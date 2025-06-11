// --- DOM Elements ---
const modeSelect = document.getElementById('mode-select');
const lessonSelect = document.getElementById('lesson-select');
const timeSignatureBeats = document.getElementById('time-signature-beats');
const timeSignatureType = document.getElementById('time-signature-type');
const timeSignatureDisplay = document.getElementById('time-signature-display');
const tempoDisplay = document.getElementById('tempo-display');
const playPauseButton = document.getElementById('play-pause-button');
const rhythmDisplayEl = document.getElementById('rhythm-display');
const customRhythmCreatorDiv = document.getElementById('custom-rhythm-creator');
const lessonSelectorContainer = document.getElementById('lesson-selector-container');
const figurePaletteDiv = document.getElementById('figure-palette');
const deleteSelectedFigureButton = document.getElementById('delete-selected-figure-button');
const messageArea = document.getElementById('message-area');

// --- App State ---
let currentMode = 'lessons';
let currentLessonIndex = 0;
let activeTimeSignature = { beats: 4, beatType: 4 };
let activePattern = [];
let customPattern = [];
let isPlaying = false;
let isCountingDown = false;
let selectedIndexForEditing = null;
let transportEventIds = [];
let metronomeEventId = null;

// --- Audio ---
let noteSynth = null;
let metronomeSynth = null;

// --- HELPER FUNCTIONS ---
function reEnableButtonsAfterErrorOrStop() {
    playPauseButton.disabled = false;
    const elements = [
        document.getElementById('tempo-decrease'),
        document.getElementById('tempo-increase'),
        document.getElementById('reset-button'),
        document.getElementById('clear-custom-rhythm'),
        document.getElementById('delete-selected-figure-button'),
        document.getElementById('ai-suggest-button'),
        lessonSelect,
        modeSelect,
        timeSignatureBeats,
        timeSignatureType
    ];
    elements.forEach(el => {
        if(el) el.disabled = false;
    });
}

function disableButtonsForPlayback(){
    playPauseButton.disabled = true;
    const elements = [
        document.getElementById('tempo-decrease'),
        document.getElementById('tempo-increase'),
        document.getElementById('reset-button'),
        document.getElementById('clear-custom-rhythm'),
        document.getElementById('delete-selected-figure-button'),
        document.getElementById('ai-suggest-button'),
        lessonSelect,
        modeSelect,
        timeSignatureBeats,
        timeSignatureType
    ];
    elements.forEach(el => {
        if(el) el.disabled = true;
    });
}

function highlightActiveVisualElement(patternIndex) {
    document.querySelectorAll('.figure-container[data-pattern-index]').forEach(el => el.classList.remove('highlight'));
    if (patternIndex !== null) {
        const currentFigureContainer = document.querySelector(`.figure-container[data-pattern-index="${patternIndex}"]`);
        if (currentFigureContainer) {
            currentFigureContainer.classList.add('highlight');
            currentFigureContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    }
}

function initializeSynths() {
    try {
        if (noteSynth) noteSynth.dispose();
        if (metronomeSynth) metronomeSynth.dispose();
        noteSynth = new Tone.PolySynth(Tone.Synth, { oscillator: { type: "triangle" }, envelope: { attack: 0.01, decay: 0.2, sustain: 0.2, release: 0.3 }, volume: -6 }).toDestination();
        metronomeSynth = new Tone.MembraneSynth({ pitchDecay: 0.01, octaves: 5, oscillator: { type: "sine" }, envelope: { attack: 0.001, decay: 0.1, sustain: 0, release: 0.01}, volume: -10 }).toDestination();
    } catch (e) {
        console.error("ERRO CRÍTICO em initializeSynths:", e); 
        messageArea.textContent = "Erro ao inicializar componentes de áudio.";
    }
}

// --- CORE LOGIC FUNCTIONS ---
function getBeatValue(figureDuration, timeSig) {
    const beatUnitValue = 4 / timeSig.beatType;
    return figureDuration / beatUnitValue;
}

function getDurationText(beatValue) {
    if (beatValue < 1) return `${beatValue} tempo`;
    return `${beatValue} ${beatValue > 1 ? 'tempos' : 'tempo'}`;
}

function assignSyllablesToPattern(pattern) {
    const newPattern = JSON.parse(JSON.stringify(pattern)); 
    let i = 0;
    while (i < newPattern.length) {
        const currentFig = newPattern[i];
        if (currentFig.type !== 'note' || currentFig.isControl) {
            i++;
            continue;
        }
        
        let j = i;
        let group = [];
        while(j < newPattern.length && newPattern[j].type === 'note' && newPattern[j].duration === currentFig.duration && [0.5, 0.25, 0.125].includes(currentFig.duration)) {
            group.push(newPattern[j]);
            j++;
        }

        if (group.length > 1) {
            if(currentFig.duration === 0.5) {
                const syllables = (group.length === 3) ? ['ta', 'ca', 'ta'] : ['ta', 'ca'];
                for(let k = 0; k < group.length; k++) {
                    group[k].syllable = syllables[k % syllables.length];
                }
            } else if (currentFig.duration === 0.25) {
                const syllables = ['ti', 'ri', 'ti', 'ri'];
                for(let k = 0; k < group.length; k++) {
                    group[k].syllable = syllables[k % 4];
                }
            } else if (currentFig.duration === 0.125) {
                const syllables = ['ti', 'ri', 'ti', 'ri'];
                for(let k = 0; k < group.length; k++) {
                    group[k].syllable = syllables[k % 4];
                }
            }
            i = j;
        } else {
            currentFig.syllable = 'Tá';
            i++;
        }
    }
    return newPattern;
}

function updateActivePatternAndTimeSignature() {
    stopRhythmExecution();
    if (currentMode === 'lessons') {
        const lesson = lessons[currentLessonIndex];
        activePattern = assignSyllablesToPattern(lesson.pattern);
        activeTimeSignature = lesson.timeSignature;
    } else { 
        activePattern = assignSyllablesToPattern(customPattern);
        activeTimeSignature = {
            beats: parseInt(timeSignatureBeats.value),
            beatType: parseInt(timeSignatureType.value)
        };
    }
    
    timeSignatureDisplay.textContent = `${activeTimeSignature.beats}/${activeTimeSignature.beatType}`;
    
    renderRhythm();
    if(currentMode === 'lessons') populateFigureLegend();
}

// --- UI & RENDER FUNCTIONS ---
function switchMode(mode) {
    currentMode = mode;
    stopRhythmExecution(); 
    selectedIndexForEditing = null;
    const isLessonMode = mode === 'lessons';
    
    lessonSelectorContainer.classList.toggle('hidden', !isLessonMode);
    customRhythmCreatorDiv.classList.toggle('hidden', isLessonMode);
    
    document.getElementById('figure-legend-container').classList.toggle('hidden', !isLessonMode);
    
    messageArea.textContent = isLessonMode ? "Modo de Lições. Escolha uma lição." : "Modo de Criação Livre.";
    rhythmDisplayEl.classList.toggle('edit-mode', !isLessonMode);
    updateActivePatternAndTimeSignature();
}

function populateLessonSelect() {
    lessonSelect.innerHTML = ''; 
    lessons.forEach((lesson, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = lesson.name;
        lessonSelect.appendChild(option);
    });
}

function populateFigureLegend() {
    const content = document.getElementById('figure-legend-content');
    content.innerHTML = '';
    const uniqueFigures = [...new Map(activePattern.filter(item => !item.isControl).map(item => [JSON.stringify([item.symbol, item.duration]), item])).values()];
    uniqueFigures.forEach(fig => {
        const figureDef = rhythmicFigures.find(rf => rf.symbol === fig.symbol && rf.duration === fig.duration);
        if(!figureDef) return;
        const beatValue = getBeatValue(fig.duration, activeTimeSignature);
        content.innerHTML += `<div class="legend-item"><span class="legend-symbol">${fig.symbol}</span><span class="legend-name">${figureDef.name} - Dura ${getDurationText(beatValue)}</span></div>`;
    });
}

function populateFigurePalette() {
    figurePaletteDiv.innerHTML = ''; 
    rhythmicFigures.forEach(fig => {
        const button = document.createElement('button');
        button.className = 'figure-button p-2.5 sm:p-3 rounded-lg shadow text-2xl sm:text-3xl transition-all duration-150 ease-in-out';
        if(fig.isControl) button.classList.add('figure-button-control');
        button.textContent = fig.symbol;
        button.title = fig.name;
        button.addEventListener('click', () => handlePaletteFigureClick(fig));
        figurePaletteDiv.appendChild(button);
    });
}

function renderRhythm() {
    rhythmDisplayEl.className = 'flex items-end flex-wrap';
    rhythmDisplayEl.innerHTML = '';
    
    const tsContainer = document.createElement('div');
    tsContainer.className = 'figure-container';
    tsContainer.innerHTML = `<div class="beat-counter-text">&nbsp;</div><div class="time-signature-item p-2 sm:p-3 text-3xl sm:text-4xl font-bold text-slate-700 flex flex-col justify-center items-center"><span>${activeTimeSignature.beats}</span><span>${activeTimeSignature.beatType}</span></div><div>&nbsp;</div>`;
    rhythmDisplayEl.appendChild(tsContainer);

    if (activePattern.length === 0) {
        rhythmDisplayEl.className = 'flex justify-center items-center h-full min-h-[150px]';
        rhythmDisplayEl.innerHTML = `<p class="text-slate-500 text-lg">Selecione uma lição ou comece a criar.</p>`;
        deleteSelectedFigureButton.classList.add('hidden');
        return;
    }

    let currentBeatsInMeasure = 0;
    const tolerance = 0.001;

    activePattern.forEach((item, index) => {
        const beatValue = getBeatValue(item.duration, activeTimeSignature);
        const figureContainer = document.createElement('div');
        figureContainer.className = 'figure-container';
        figureContainer.dataset.patternIndex = index;
        if (item.isControl) figureContainer.dataset.isControl = "true";
        if (selectedIndexForEditing === index) figureContainer.classList.add('selected-for-edit');
        if (currentMode === 'freeCreate') figureContainer.addEventListener('click', () => handleFigureSelectionForEditing(index));

        const beatCounterElement = document.createElement('div');
        beatCounterElement.className = 'beat-counter-text';
        if (!item.isControl) {
            const startBeat = currentBeatsInMeasure + 1;
            if (beatValue >= 1 && Math.abs(beatValue - Math.round(beatValue)) < tolerance) {
                const beatsArray = Array.from({length: beatValue}, (_, i) => Math.floor(startBeat) + i);
                beatCounterElement.textContent = beatsArray.join(' ');
            } else {
               const beatNumber = Math.floor(currentBeatsInMeasure) + 1;
               const subBeatPosition = currentBeatsInMeasure - Math.floor(currentBeatsInMeasure);
               if (subBeatPosition < tolerance) beatCounterElement.textContent = beatNumber;
               else if (Math.abs(subBeatPosition - 0.25) < tolerance) beatCounterElement.textContent = 'e';
               else if (Math.abs(subBeatPosition - 0.5) < tolerance) beatCounterElement.textContent = '+';
               else if (Math.abs(subBeatPosition - 0.75) < tolerance) beatCounterElement.textContent = 'a';
            }
        }

        const noteItemElement = document.createElement('div');
        noteItemElement.className = `note-item p-3 sm:p-4 rounded-lg shadow min-w-[45px] sm:min-w-[55px] ${item.type === 'note' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`;
        noteItemElement.textContent = item.symbol;

        const syllableElement = document.createElement('div');
        syllableElement.className = 'syllable-text';
        syllableElement.innerHTML = item.syllable || '&nbsp;';

        figureContainer.appendChild(beatCounterElement);
        figureContainer.appendChild(noteItemElement);
        figureContainer.appendChild(syllableElement);
        
        rhythmDisplayEl.appendChild(figureContainer);

        if (!item.isControl) currentBeatsInMeasure += beatValue;

        if (Math.abs(currentBeatsInMeasure - activeTimeSignature.beats) < tolerance) {
             if (index < activePattern.length - 1 && !activePattern[index + 1]?.isControl) {
                 rhythmDisplayEl.innerHTML += `<div class="barline-container"><div class="barline-item"></div></div>`;
             }
             currentBeatsInMeasure = 0; 
        } else if(currentBeatsInMeasure > activeTimeSignature.beats){
             currentBeatsInMeasure %= activeTimeSignature.beats;
        }
    });
    deleteSelectedFigureButton.classList.toggle('hidden', selectedIndexForEditing === null);
}

// --- USER INTERACTION ---
function handlePaletteFigureClick(figure) {
    if (currentMode !== 'freeCreate' || isPlaying || isCountingDown) return;
    const newFigure = { ...figure };
    const beatValue = getBeatValue(newFigure.duration, activeTimeSignature);
    const durationText = getDurationText(beatValue);
    
    if (selectedIndexForEditing !== null) {
        customPattern.splice(selectedIndexForEditing, 1, newFigure);
        messageArea.textContent = `${newFigure.name} inserido. Vale ${durationText}.`;
        selectedIndexForEditing = null; 
    } else {
        customPattern.push(newFigure);
        messageArea.textContent = `${newFigure.name} adicionado. Vale ${durationText}.`;
    }
    updateActivePatternAndTimeSignature();
}

function handleFigureSelectionForEditing(index) {
    if (currentMode !== 'freeCreate' || isPlaying || isCountingDown) return;
    if (selectedIndexForEditing === index) {
        selectedIndexForEditing = null; messageArea.textContent = "Seleção removida.";
    } else {
        selectedIndexForEditing = index;
        const item = activePattern[index];
        const figureDef = rhythmicFigures.find(rf => rf.symbol === item.symbol && rf.duration === item.duration);
        const beatValue = getBeatValue(item.duration, activeTimeSignature);
        messageArea.textContent = `Item ${index + 1} (${figureDef.name}) selecionado. Vale ${getDurationText(beatValue)}.`;
    }
    renderRhythm(); 
}

/**
 * Gera um padrão rítmico com base na dificuldade e na fórmula de compasso.
 * @param {string} difficulty - "fácil", "moderado" ou "difícil".
 * @param {object} timeSignature - O objeto com a fórmula de compasso ativa.
 * @returns {Array} - Um novo padrão rítmico.
 */
function generateAIRhythm(difficulty, timeSignature) {
    const beatsPerMeasure = timeSignature.beats;
    const numMeasures = 8;

    // 1. Define quais figuras são permitidas para cada dificuldade
    const getAllowedFigures = (diff) => {
        const notes = rhythmicFigures.filter(f => f.type === 'note' && f.duration > 0);
        if (diff === 'fácil') {
            // Apenas figuras de 1 tempo ou mais
            return notes.filter(f => getBeatValue(f.duration, timeSignature) >= 1);
        }
        if (diff === 'moderado') {
            // Adiciona figuras de meio tempo (colcheias)
            return notes.filter(f => getBeatValue(f.duration, timeSignature) >= 0.5);
        }
        // 'difícil' usa todas as figuras até a semicolcheia
        return notes.filter(f => getBeatValue(f.duration, timeSignature) >= 0.25);
    };

    const allowedFigures = getAllowedFigures(difficulty);
    let finalPattern = [];

    // 2. Cria 8 compassos, um de cada vez
    for (let i = 0; i < numMeasures; i++) {
        let beatsInMeasure = 0;
        
        while (beatsInMeasure < beatsPerMeasure) {
            const remainingBeats = beatsPerMeasure - beatsInMeasure;
            
            // Filtra apenas as figuras que cabem no espaço restante do compasso
            const fittingFigures = allowedFigures.filter(f => {
                // Adicionamos uma pequena tolerância para lidar com imprecisões de ponto flutuante
                return getBeatValue(f.duration, timeSignature) <= (remainingBeats + 0.001);
            });

            let figureToAdd;
            if (fittingFigures.length > 0) {
                // Escolhe uma figura aleatória entre as que cabem
                figureToAdd = fittingFigures[Math.floor(Math.random() * fittingFigures.length)];
            } else {
                // Se, por algum motivo, nada couber (raro), saímos do loop para evitar um loop infinito.
                break;
            }
            
            finalPattern.push({ ...figureToAdd });
            beatsInMeasure += getBeatValue(figureToAdd.duration, timeSignature);
        }
    }
    
    return finalPattern;
}

/**
 * Lida com o clique no botão de sugestão da IA.
 */
function handleAISuggestClick() {
    // 1. Pergunta ao usuário a dificuldade desejada
    const promptMessage = "Qual o nível de dificuldade do exercício?\nDigite: fácil, moderado ou difícil";
    const rawInput = prompt(promptMessage);

    // Se o usuário cancelar, não faz nada
    if (rawInput === null) return;
    
    const difficulty = rawInput.trim().toLowerCase();

    // 2. Valida a entrada
    if (!['fácil', 'moderado', 'difícil'].includes(difficulty)) {
        messageArea.textContent = "Dificuldade inválida. Por favor, tente novamente.";
        return;
    }

    // Força a mudança para o modo de Criação Livre, se já não estiver nele
    if (currentMode !== 'freeCreate') {
        modeSelect.value = 'freeCreate';
        switchMode('freeCreate');
    }

    messageArea.textContent = `✨ A IA está gerando um exercício ${difficulty}...`;

    // 3. Simula um pequeno "pensamento" da IA e gera o ritmo
    setTimeout(() => {
        const newPattern = generateAIRhythm(difficulty, activeTimeSignature);
        customPattern = newPattern; // Define o padrão gerado como o ritmo customizado
        updateActivePatternAndTimeSignature(); // Atualiza a tela
        
        messageArea.textContent = `Exercício ${difficulty} com 8 compassos foi gerado!`;
    }, 500); // Meio segundo de delay para uma melhor experiência do usuário
}

// --- PLAYBACK LOGIC ---
function stopRhythmExecution(fromPause = false) {
    isPlaying = false; isCountingDown = false;
    Tone.Transport.stop();
    Tone.Transport.cancel(0);
    transportEventIds.forEach(id => Tone.Transport.clear(id));
    transportEventIds = [];
    if(metronomeEventId) {
        metronomeEventId.stop(0).dispose();
        metronomeEventId = null;
    }
    playPauseButton.textContent = 'Tocar';
    playPauseButton.classList.replace('btn-pause', 'btn-play');
    reEnableButtonsAfterErrorOrStop();
    highlightActiveVisualElement(null);
    document.getElementById('countdown-display').textContent = "";
    if (!fromPause) messageArea.textContent = "Reprodução parada.";
}

async function startCountdownAndPlay() {
    if (isPlaying || isCountingDown) return;
    disableButtonsForPlayback(); playPauseButton.disabled = true;

    try {
        if (Tone.context.state !== 'running') await Tone.start();
        initializeSynths();
        if (!noteSynth || !metronomeSynth) throw new Error("Sintetizadores não iniciados.");
        
        isCountingDown = true; messageArea.textContent = "Preparando...";
        
        stopRhythmExecution(true);

        const userInputBpm = parseInt(document.getElementById('tempo-display').textContent);
        const { beats, beatType } = activeTimeSignature;
        
        const adjustedBpm = userInputBpm * (4 / beatType);
        Tone.Transport.bpm.value = adjustedBpm;
        
        const beatUnitDuration = Tone.Time(`${beatType}n`).toSeconds();
        const countdownDuration = beatUnitDuration * beats;

        schedulePlayback(countdownDuration);
        scheduleMetronome();
        
        for(let i=0; i < beats; i++) {
            transportEventIds.push(Tone.Transport.scheduleOnce(t => { Tone.Draw.schedule(() => { document.getElementById('countdown-display').textContent = beats - i; }, t); }, i * beatUnitDuration));
        }

        transportEventIds.push(Tone.Transport.scheduleOnce(t => {
            Tone.Draw.schedule(() => {
                document.getElementById('countdown-display').textContent = "";
                isCountingDown = false; isPlaying = true;
                playPauseButton.textContent = "Pausar"; playPauseButton.classList.replace('btn-play', 'btn-pause');
                playPauseButton.disabled = false; document.getElementById('reset-button').disabled = false;
                messageArea.textContent = "Tocando...";
            }, t);
        }, countdownDuration - 0.05));

        Tone.Transport.start(Tone.now());

    } catch (error) {
        console.error("Erro ao iniciar playback:", error);
        messageArea.textContent = "Erro: " + error.message;
        stopRhythmExecution();
    }
}

function pauseRhythmExecution() {
     if (isPlaying) {
          Tone.Transport.pause();
          isPlaying = false;
          playPauseButton.textContent = 'Tocar';
          playPauseButton.classList.replace('btn-pause', 'btn-play');
          messageArea.textContent = "Pausado.";
          reEnableButtonsAfterErrorOrStop();
          playPauseButton.disabled = false;
          document.getElementById('reset-button').disabled = false;
     }
}

function resumeRhythmExecution() {
      if (!isPlaying && Tone.Transport.state === 'paused') {
          isPlaying = true;
          playPauseButton.textContent = 'Pausar';
          playPauseButton.classList.replace('btn-play', 'btn-pause');
          disableButtonsForPlayback();
          playPauseButton.disabled = false;
          document.getElementById('reset-button').disabled = false;
          Tone.Transport.start();
          messageArea.textContent = "Tocando...";
     }
}

function schedulePlayback(offset = 0) {
    let time = offset;
    activePattern.forEach((item, index) => {
        if (item.isControl) return;
        const beatValue = getBeatValue(item.duration, activeTimeSignature);
        const toneDuration = Tone.Time(`${activeTimeSignature.beatType}n`).toSeconds() * beatValue;
         if (item.type === 'note') {
             transportEventIds.push(Tone.Transport.scheduleOnce(t => { noteSynth.triggerAttackRelease("C4", toneDuration, t); }, time));
         }
         transportEventIds.push(Tone.Transport.scheduleOnce(t => { Tone.Draw.schedule(() => highlightActiveVisualElement(index), t); }, time));
         time += toneDuration;
    });
    transportEventIds.push(Tone.Transport.scheduleOnce(() => { stopRhythmExecution(); messageArea.textContent = "Fim da lição!"; }, time + 0.2));
}

function scheduleMetronome() {
    if (metronomeEventId) {
        metronomeEventId.stop(0).dispose();
    }
    const { beats, beatType } = activeTimeSignature;
    const isCompound = (beats >= 6 && beats % 3 === 0);
    const events = [];
    
    const beatDurationNotation = `${beatType}n`;
    
    for (let i = 0; i < beats; i++) {
        const time = Tone.Time(beatDurationNotation).toSeconds() * i;
        let note = "C5"; // Weak beat
        if (isCompound) {
            if (i % 3 === 0) note = "G5"; 
        } else {
            if (i === 0) note = "G5";
        }
        events.push({ time, note });
    }

    metronomeEventId = new Tone.Part((time, value) => {
        metronomeSynth.triggerAttackRelease(value.note, "32n", time);
    }, events).start(0);
    metronomeEventId.loop = true;
    metronomeEventId.loopEnd = Tone.Time(beatDurationNotation).toSeconds() * beats;
}

// --- Event Listeners Setup ---
function setupEventListeners() {
    modeSelect.addEventListener('change', (e) => switchMode(e.target.value));
    lessonSelect.addEventListener('change', (e) => {
        currentLessonIndex = parseInt(e.target.value);
        updateActivePatternAndTimeSignature();
    });
    [timeSignatureBeats, timeSignatureType].forEach(el => el.addEventListener('change', updateActivePatternAndTimeSignature));
    document.getElementById('tempo-decrease').addEventListener('click', () => {
        const tempoEl = document.getElementById('tempo-display');
        tempoEl.textContent = Math.max(30, parseInt(tempoEl.textContent) - 5);
    });
    document.getElementById('tempo-increase').addEventListener('click', () => {
        const tempoEl = document.getElementById('tempo-display');
        tempoEl.textContent = Math.min(280, parseInt(tempoEl.textContent) + 5);
    });
    playPauseButton.addEventListener('click', () => {
        if (isPlaying) { pauseRhythmExecution(); } 
        else if (Tone.Transport.state === 'paused') { resumeRhythmExecution(); }
        else { startCountdownAndPlay(); }
    });
    document.getElementById('reset-button').addEventListener('click', () => {
        stopRhythmExecution();
        messageArea.textContent = "Ritmo resetado.";
    });
    document.getElementById('clear-custom-rhythm').addEventListener('click', () => {
         customPattern = [];
         updateActivePatternAndTimeSignature();
         messageArea.textContent = "Ritmo limpo.";
    });
    deleteSelectedFigureButton.addEventListener('click', () => {
         if(selectedIndexForEditing === null) return;
         customPattern.splice(selectedIndexForEditing, 1);
         selectedIndexForEditing = null;
         updateActivePatternAndTimeSignature();
         messageArea.textContent = "Figura apagada.";
    });
    
    document.getElementById('ai-suggest-button').addEventListener('click', handleAISuggestClick);
}

// --- Init ---
function init() {
    populateLessonSelect();
    populateFigurePalette();
    setupEventListeners();
    switchMode('lessons');
    console.log("Aplicação inicializada.");
}

init();
