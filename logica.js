// --- Configurações e Dados Iniciais ---
const rhythmicFigures = [
    { name: 'Semibreve', symbol: '𝅝', type: 'note', duration: 4 },
    { name: 'Pausa de Semibreve', symbol: '𝄻', type: 'rest', duration: 4 },
    { name: 'Mínima', symbol: '𝅗𝅥', type: 'note', duration: 2 },
    { name: 'Pausa de Mínima', symbol: '𝄼', type: 'rest', duration: 2 },
    { name: 'Semínima', symbol: '♩', type: 'note', duration: 1 },
    { name: 'Pausa de Semínima', symbol: '𝄽', type: 'rest', duration: 1 },
    { name: 'Colcheia', symbol: '𝅘𝅥𝅮', type: 'note', duration: 0.5 },
    { name: 'Pausa de Colcheia', symbol: '𝄾', type: 'rest', duration: 0.5 },
    { name: 'Semicolcheia', symbol: '𝅘𝅥𝅯', type: 'note', duration: 0.25 },
    { name: 'Pausa de Semicolcheia', symbol: '𝄿', type: 'rest', duration: 0.25 },
    { name: 'Fusa', symbol: '𝅘𝅥𝅰', type: 'note', duration: 0.125},
    { name: 'Pausa de Fusa', symbol: '𝅀', type: 'rest', duration: 0.125},
    {name: 'Semifusa', symbol: '𝅘𝅥𝅱', type: 'note', duration: 0.0625},
     {name: 'Pausa de Semifusa', symbol: '𝅁', type: 'rest', duration: 0.0625},
    { name: 'Início de Repetição', symbol: '𝄆', type: 'repeat_start', duration: 0, isControl: true },
    { name: 'Fim de Repetição', symbol: '𝄇', type: 'repeat_end', duration: 0, isControl: true },
    { name: 'Barra Final Dupla', symbol: '𝄂', type: 'final_barline', duration: 0, isControl: true }
];

const lessons = [
    {
        name: "Lição 1: Semínimas Básicas",
        timeSignature: { beats: 4, beatType: 4 },
        tempo: 60,
        pattern: [
            { type: 'note', duration: 4, symbol: '𝅝', syllable: 'Tá' }, { type: 'note', duration: 2, symbol: '𝅗𝅥', syllable: 'Tá' },
            { type: 'note', duration: 2, symbol: '𝅗𝅥', syllable: 'Tá' }, { type: 'note', duration: 1, symbol: '♩', syllable: 'Tá' },
            { type: 'note', duration: 1, symbol: '♩', syllable: 'Tá' }, { type: 'note', duration: 1, symbol: '♩', syllable: 'Tá' },
            { type: 'note', duration: 1, symbol: '♩', syllable: 'Tá' }, { type: 'note', duration: 2, symbol: '𝅗𝅥', syllable: 'Tá' },
            { type: 'note', duration: 1, symbol: '♩', syllable: 'Tá' }, { type: 'note', duration: 1, symbol: '♩', syllable: 'Tá' },
            { type: 'note', duration: 1, symbol: '♩', syllable: 'Tá' }, { type: 'note', duration: 1, symbol: '♩', syllable: 'Tá' },
            { type: 'note', duration: 2, symbol: '𝅗𝅥', syllable: 'Tá' }, { type: 'note', duration: 1, symbol: '♩', syllable: 'Tá' },
            { type: 'note', duration: 2, symbol: '𝅗𝅥', syllable: 'Tá' }, { type: 'note', duration: 1, symbol: '♩', syllable: 'Tá'},
            { type: 'note', duration: 4, symbol: '𝅝', syllable: 'Tá' }, { type: 'final_barline', duration: 0, symbol: '𝄂', isControl: true },

        ]
    },
    {
        name: "Lição 2: Mínimas e Semínimas",
        timeSignature: { beats: 4, beatType: 4 },
        tempo: 60,
        pattern: [
            { type: 'note', duration: 2, symbol: '𝅗𝅥', syllable: 'Tá' },
            { type: 'note', duration: 1, symbol: '♩', syllable: 'Tá' }, { type: 'note', duration: 1, symbol: '♩', syllable: 'Tá' },
        ]
    },
    {
        name: "Lição 3: Colcheias 'Ta-ca'",
        timeSignature: { beats: 4, beatType: 4 },
        tempo: 70,
        pattern: [
            { type: 'note', duration: 0.5, symbol: '𝅘𝅥𝅮', syllable: 'Ta' }, { type: 'note', duration: 0.5, symbol: '𝅘𝅥𝅮', syllable: 'ca' },
            { type: 'note', duration: 0.5, symbol: '𝅘𝅥𝅮', syllable: 'Ta' }, { type: 'note', duration: 0.5, symbol: '𝅘𝅥𝅮', syllable: 'ca' },
            { type: 'note', duration: 1, symbol: '♩', syllable: 'Tá' }, { type: 'note', duration: 1, symbol: '♩', syllable: 'Tá' },
        ]
    },
    {
        name: "Lição 4: Semínimas e Pausas",
        timeSignature: { beats: 4, beatType: 4 },
        tempo: 65,
        pattern: [
            { type: 'note', duration: 1, symbol: '♩', syllable: 'Tá' }, { type: 'rest', duration: 1, symbol: '𝄽' },
            { type: 'note', duration: 1, symbol: '♩', syllable: 'Tá' }, { type: 'note', duration: 1, symbol: '♩', syllable: 'Tá' },
        ]
    },
    {
        name: "Lição 5: Semicolcheias 'Ti-ri-ti-ri'",
        timeSignature: { beats: 4, beatType: 4 },
        tempo: 80,
        pattern: [
            { type: 'note', duration: 0.25, symbol: '𝅘𝅥𝅯', syllable: 'Ti' }, { type: 'note', duration: 0.25, symbol: '𝅘𝅥𝅯', syllable: 'ri' },
            { type: 'note', duration: 0.25, symbol: '𝅘𝅥𝅯', syllable: 'ti' }, { type: 'note', duration: 0.25, symbol: '𝅘𝅥𝅯', syllable: 'ri' },
            { type: 'note', duration: 1, symbol: '♩', syllable: 'Tá' },
            { type: 'note', duration: 0.5, symbol: '𝅘𝅥𝅮', syllable: 'Ta' }, { type: 'note', duration: 0.5, symbol: '𝅘𝅥𝅮', syllable: 'ca' },
        ]
    },
        {
        name: "Lição 6: Compasso Ternário (3/4)",
        timeSignature: { beats: 3, beatType: 4 },
        tempo: 75,
        pattern: [
            { type: 'note', duration: 1, symbol: '♩', syllable: 'Tá' },
            { type: 'note', duration: 0.5, symbol: '𝅘𝅥𝅮', syllable: 'Ta' }, { type: 'note', duration: 0.5, symbol: '𝅘𝅥𝅮', syllable: 'ca' },
            { type: 'note', duration: 1, symbol: '♩', syllable: 'Tá' },
        ]
    },
    {
        name: "Lição 7: Compasso Binário (2/4) com Semicolcheias",
        timeSignature: { beats: 2, beatType: 4 },
        tempo: 90,
        pattern: [
            { type: 'note', duration: 0.25, symbol: '𝅘𝅥𝅯', syllable: 'Ti' }, { type: 'note', duration: 0.25, symbol: '𝅘𝅥𝅯', syllable: 'ri' },
            { type: 'note', duration: 0.25, symbol: '𝅘𝅥𝅯', syllable: 'ti' }, { type: 'note', duration: 0.25, symbol: '𝅘𝅥𝅯', syllable: 'ri' },
            { type: 'note', duration: 0.5, symbol: '𝅘𝅥𝅮', syllable: 'Ta' }, { type: 'note', duration: 0.5, symbol: '𝅘𝅥𝅮', syllable: 'ca' },
        ]
    }
];

const figureToToneDuration = { 4: "1n", 2: "2n", 1: "4n", 0.5: "8n", 0.25: "16n", 0.125: "32n", 0.0625: "64n"};

// --- Elementos da DOM ---
const modeSelect = document.getElementById('mode-select');
const lessonSelect = document.getElementById('lesson-select');
const lessonSelectorContainer = document.getElementById('lesson-selector-container');
const timeSignatureDisplay = document.getElementById('time-signature-display');
const timeSignatureSelectFree = document.getElementById('time-signature-select-free');
const tempoDisplay = document.getElementById('tempo-display');
const tempoDecreaseBtn = document.getElementById('tempo-decrease');
const tempoIncreaseBtn = document.getElementById('tempo-increase');
const playPauseButton = document.getElementById('play-pause-button');
const resetButton = document.getElementById('reset-button');
const rhythmDisplayEl = document.getElementById('rhythm-display');
const messageArea = document.getElementById('message-area');
const customRhythmCreatorDiv = document.getElementById('custom-rhythm-creator');
const figurePaletteDiv = document.getElementById('figure-palette');
const clearCustomRhythmBtn = document.getElementById('clear-custom-rhythm');
const aiSuggestButton = document.getElementById('ai-suggest-button');
const countdownDisplay = document.getElementById('countdown-display');
const figureLegendContainer = document.getElementById('figure-legend-container');
const figureLegendContent = document.getElementById('figure-legend-content');
const deleteSelectedFigureButton = document.getElementById('delete-selected-figure-button');

// --- Estado da Aplicação ---
let currentMode = 'lessons';
let currentLessonIndex = 0;
let currentTempoBPM = lessons[0].tempo;
let activeTimeSignature = lessons[0].timeSignature;
let activePattern = lessons[0].pattern;
let customPattern = [];
let isPlaying = false;
let isCountingDown = false;
let isAISuggesting = false;
let countdownTimeoutId = null;
let metronomeEventId = null;
let selectedIndexForEditing = null;
let playbackRepeatStartIndex = null;
let hasRepeatedThisSection = false;
let hasRepeatedThisSectionGlobal = false;
let transportEventIds = [];

// --- Synths (Tone.js) ---
let noteSynth = null;
let metronomeSynth = null;

function reEnableButtonsAfterErrorOrStop() {
    console.log("reEnableButtonsAfterErrorOrStop chamada"); 
    playPauseButton.disabled = false;
    if (currentMode === 'freeCreate') { 
        if (aiSuggestButton) aiSuggestButton.disabled = false;
        if (deleteSelectedFigureButton) deleteSelectedFigureButton.disabled = false;
    }
    if (lessonSelect) lessonSelect.disabled = false;
    if (modeSelect) modeSelect.disabled = false;
    if (timeSignatureSelectFree) timeSignatureSelectFree.disabled = false;
}

function initializeSynths() {
    console.log("initializeSynths chamada"); 
    try {
        if (Tone.context && Tone.context.state !== 'running') {
            console.warn("Contexto de áudio não estava 'running' ao tentar inicializar synths. Isso pode ser problemático se Tone.start() não foi chamado via gesto.");
        }
        noteSynth = new Tone.PolySynth(Tone.Synth, {
            oscillator: { type: "triangle" },
            envelope: { attack: 0.01, decay: 0.2, sustain: 0.2, release: 0.3 },
            volume: -6
        }).toDestination();
        metronomeSynth = new Tone.MembraneSynth({
            pitchDecay: 0.01, octaves: 5, oscillator: { type: "triangle" },
            envelope: { attack: 0.001, decay: 0.1, sustain: 0, release: 0.01},
            volume: -10
        }).toDestination();
        console.log("Sintetizadores (noteSynth, metronomeSynth) aparentemente criados em initializeSynths."); 
    } catch (e) {
        console.error("ERRO CRÍTICO em initializeSynths:", e); 
        messageArea.textContent = "Erro ao inicializar componentes de áudio.";
        noteSynth = null; 
        metronomeSynth = null; 
    }
}

// --- Funções de Validação de Compasso ---
function calculateMeasureCapacity(timeSig) {
    if (!timeSig || typeof timeSig.beats !== 'number' || typeof timeSig.beatType !== 'number' || timeSig.beatType === 0) {
        console.error("Fórmula de compasso inválida para calculateMeasureCapacity:", timeSig);
        return 4; 
    }
    return timeSig.beats * (4 / timeSig.beatType);
}

function checkPatternValidity(patternToCheck, timeSig) {
    const measureCapacity = calculateMeasureCapacity(timeSig);
    let currentMeasureSum = 0;
    const tolerance = 0.001;
    for (const item of patternToCheck) {
        let itemDuration = 0;
        if (!item.isControl) {
            itemDuration = item.duration;
        }
        if (currentMeasureSum + itemDuration > measureCapacity + tolerance) {
            return false;
        }
        currentMeasureSum += itemDuration;
        if (Math.abs(currentMeasureSum - measureCapacity) < tolerance) {
            currentMeasureSum = 0;
        }
    }
    return true;
}

// --- Funções de Gerenciamento de Modo e Lição ---
function populateLessonSelect() {
    lessonSelect.innerHTML = ''; 
    lessons.forEach((lesson, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = lesson.name;
        lessonSelect.appendChild(option);
    });
}

function updateActivePatternAndTimeSignature() {
    if (currentMode === 'lessons') {
        const lesson = lessons[currentLessonIndex];
        activePattern = lesson.pattern;
        activeTimeSignature = lesson.timeSignature;
        currentTempoBPM = lesson.tempo; 
        populateFigureLegend(activePattern);
        figureLegendContainer.classList.remove('hidden');
    } else { 
        activePattern = customPattern;
        const [beats, beatType] = timeSignatureSelectFree.value.split('/').map(Number);
        activeTimeSignature = { beats, beatType };
        figureLegendContainer.classList.add('hidden');
    }
    tempoDisplay.textContent = currentTempoBPM;
    timeSignatureDisplay.textContent = `${activeTimeSignature.beats}/${activeTimeSignature.beatType}`;
    renderRhythm();
    resetPlaybackState(false);
}

function switchMode(mode) {
    currentMode = mode;
    stopRhythmExecution(); 
    selectedIndexForEditing = null;
    if (mode === 'lessons') {
        lessonSelectorContainer.classList.remove('hidden');
        customRhythmCreatorDiv.classList.add('hidden');
        if(timeSignatureSelectFree.parentElement && timeSignatureSelectFree.parentElement.classList.contains('mb-4')){
            timeSignatureSelectFree.parentElement.classList.add('hidden');
        }
        messageArea.textContent = "Modo de Lições. Escolha uma lição.";
        rhythmDisplayEl.classList.remove('edit-mode');
    } else { 
        lessonSelectorContainer.classList.add('hidden');
        customRhythmCreatorDiv.classList.remove('hidden');
         if(timeSignatureSelectFree.parentElement && timeSignatureSelectFree.parentElement.classList.contains('mb-4')){
            timeSignatureSelectFree.parentElement.classList.remove('hidden');
        }
        messageArea.textContent = "Modo de Criação Livre. Clique em um item para editar ou apagar.";
        rhythmDisplayEl.classList.add('edit-mode');
    }
    updateActivePatternAndTimeSignature();
}

function populateFigureLegend(pattern) {
    figureLegendContent.innerHTML = '';
    if (!pattern || pattern.length === 0) {
        figureLegendContainer.classList.add('hidden');
        return;
    }
    const uniqueFiguresInPattern = [];
    const figureSymbolsAdded = new Set();
    pattern.forEach(item => {
        if (!item.isControl && (item.type === 'note' || item.type === 'rest')) {
            if (!figureSymbolsAdded.has(item.symbol + item.duration)) {
                const figureDefinition = rhythmicFigures.find(rf => rf.symbol === item.symbol && rf.duration === item.duration && !rf.isControl);
                if (figureDefinition) {
                    uniqueFiguresInPattern.push({
                        symbol: item.symbol,
                        name: figureDefinition.name
                    });
                    figureSymbolsAdded.add(item.symbol + item.duration);
                }
            }
        }
    });
    if (uniqueFiguresInPattern.length > 0) {
        uniqueFiguresInPattern.forEach(fig => {
            const legendItemDiv = document.createElement('div');
            legendItemDiv.classList.add('legend-item');
            const symbolSpan = document.createElement('span');
            symbolSpan.classList.add('legend-symbol');
            symbolSpan.textContent = fig.symbol;
            const nameSpan = document.createElement('span');
            nameSpan.classList.add('legend-name');
            nameSpan.textContent = fig.name;
            legendItemDiv.appendChild(symbolSpan);
            legendItemDiv.appendChild(nameSpan);
            figureLegendContent.appendChild(legendItemDiv);
        });
        figureLegendContainer.classList.remove('hidden');
    } else {
        figureLegendContainer.classList.add('hidden');
    }
}

// --- Funções Principais (renderização, etc.) ---
function populateFigurePalette() {
    figurePaletteDiv.innerHTML = ''; 
    rhythmicFigures.forEach(fig => {
        const button = document.createElement('button');
        button.classList.add('figure-button', 'p-2.5', 'sm:p-3', 'rounded-lg', 'shadow', 'text-2xl', 'sm:text-3xl', 'transition-all', 'duration-150', 'ease-in-out');
        if(fig.isControl) {
            button.classList.add('figure-button-control');
        }
        button.textContent = fig.symbol;
        button.title = fig.name;
        button.addEventListener('click', () => handlePaletteFigureClick(fig));
        figurePaletteDiv.appendChild(button);
    });
}

function handlePaletteFigureClick(figureFromPalette) {
    if (currentMode !== 'freeCreate' || isPlaying || isCountingDown || isAISuggesting) return;
    const newFigure = {
        type: figureFromPalette.type,
        duration: figureFromPalette.duration,
        symbol: figureFromPalette.symbol,
        syllable: '',
        isControl: figureFromPalette.isControl || false
    };
    if (!newFigure.isControl) {
        let tempPattern;
        if (selectedIndexForEditing !== null) {
            tempPattern = [...customPattern];
            tempPattern.splice(selectedIndexForEditing, 1, newFigure);
        } else {
            tempPattern = [...customPattern, newFigure];
        }
        if (!checkPatternValidity(tempPattern, activeTimeSignature)) {
            messageArea.textContent = "Ação não permitida: a figura excede o limite do compasso.";
            return;
        }
    }
    if (newFigure.type === 'note' && !newFigure.isControl) {
        let tempPatternForSyllableContext = [...customPattern];
        let previousFigureForSyllable = null;
        let baseIndexForSyllable = customPattern.length;
        if (selectedIndexForEditing !== null) {
            baseIndexForSyllable = selectedIndexForEditing;
            if (selectedIndexForEditing > 0) {
                previousFigureForSyllable = tempPatternForSyllableContext[selectedIndexForEditing - 1];
            }
        } else if (tempPatternForSyllableContext.length > 0) {
            previousFigureForSyllable = tempPatternForSyllableContext[tempPatternForSyllableContext.length - 1];
        }
        if (newFigure.duration === 4 || newFigure.duration === 2 || newFigure.duration === 1) {
            newFigure.syllable = 'Tá';
        } else if (newFigure.duration === 0.5) {
            if (previousFigureForSyllable && previousFigureForSyllable.type === 'note' && previousFigureForSyllable.duration === 0.5 && previousFigureForSyllable.syllable === 'Ta') {
                newFigure.syllable = 'ca';
            } else {
                newFigure.syllable = 'Ta';
            }
        } else if (newFigure.duration === 0.25) {
            let consecutiveSemicolcheiasBeforeCurrent = 0;
            for (let i = baseIndexForSyllable - 1; i >= 0; i--) {
                const prevFig = tempPatternForSyllableContext[i];
                if (prevFig.type === 'note' && prevFig.duration === 0.25) {
                    consecutiveSemicolcheiasBeforeCurrent++;
                } else {
                    break;
                }
            }
            const positionInGroup = consecutiveSemicolcheiasBeforeCurrent % 4;
            if (positionInGroup === 0) newFigure.syllable = "Ti";
            else if (positionInGroup === 1) newFigure.syllable = "ri";
            else if (positionInGroup === 2) newFigure.syllable = "ti";
            else if (positionInGroup === 3) newFigure.syllable = "ri";
        }
    }
    if (selectedIndexForEditing !== null) {
        customPattern.splice(selectedIndexForEditing, 1, newFigure);
        messageArea.textContent = `Item na posição ${selectedIndexForEditing + 1} substituído.`;
        selectedIndexForEditing = null; 
    } else {
        customPattern.push(newFigure);
        messageArea.textContent = "Item adicionado ao final.";
    }
    updateActivePatternAndTimeSignature();
}

function handleFigureSelectionForEditing(index) {
    if (currentMode !== 'freeCreate' || isPlaying || isCountingDown) return;
    if (selectedIndexForEditing === index) {
        selectedIndexForEditing = null;
        messageArea.textContent = "Seleção removida.";
    } else {
        selectedIndexForEditing = index;
        const item = activePattern[index];
        // Tenta pegar o nome de rhythmicFigures, se não, usa o tipo do item.
        const figureInfo = rhythmicFigures.find(rf => rf.symbol === item.symbol && rf.type === item.type && rf.duration === item.duration);
        const itemName = figureInfo ? figureInfo.name : item.type;
        messageArea.textContent = `Item ${index + 1} (${itemName}) selecionado.`;
    }
    renderRhythm(); 
}

function deleteSelectedFigure() {
    if (currentMode !== 'freeCreate' || selectedIndexForEditing === null || isPlaying || isCountingDown) {
        messageArea.textContent = "Nenhum item selecionado para apagar ou ação não permitida.";
        return;
    }
    customPattern.splice(selectedIndexForEditing, 1);
    messageArea.textContent = `Item apagado.`;
    selectedIndexForEditing = null; 
    updateActivePatternAndTimeSignature();
}

function clearCustomPattern() {
    if (currentMode !== 'freeCreate' || isPlaying || isCountingDown || isAISuggesting) return;
    customPattern = [];
    selectedIndexForEditing = null;
    updateActivePatternAndTimeSignature();
    messageArea.textContent = "Ritmo limpo. Crie uma nova sequência!";
}

function renderRhythm() {
    rhythmDisplayEl.innerHTML = '';
    const tsElement = document.createElement('div');
    tsElement.classList.add('time-signature-item', 'p-2', 'sm:p-3', 'text-3xl', 'sm:text-4xl', 'font-bold', 'text-slate-700', 'mr-2', 'sm:mr-4', 'flex', 'flex-col', 'justify-center', 'items-center');
    const tsBeats = document.createElement('span');
    tsBeats.textContent = activeTimeSignature.beats;
    const tsBeatType = document.createElement('span');
    tsBeatType.textContent = activeTimeSignature.beatType;
    tsElement.appendChild(tsBeats);
    tsElement.appendChild(tsBeatType);
    rhythmDisplayEl.appendChild(tsElement);

    if (activePattern.length === 0) {
        const emptyMsg = document.createElement('p');
        emptyMsg.classList.add('text-slate-500', 'text-center', 'w-full', 'self-center', 'text-lg');
        emptyMsg.textContent = currentMode === 'lessons' ? 'Nenhuma figura nesta lição.' : 'Adicione itens ou clique para selecionar/editar.';
        rhythmDisplayEl.appendChild(emptyMsg);
        selectedIndexForEditing = null; 
        deleteSelectedFigureButton.classList.add('hidden');
        return;
    }

    let currentMeasureBeats = 0;
    const measureCapacity = calculateMeasureCapacity(activeTimeSignature); 

    activePattern.forEach((item, index) => {
        const figureContainer = document.createElement('div');
        figureContainer.classList.add('figure-container');
        figureContainer.dataset.patternIndex = index;
        if (item.isControl) {
            figureContainer.dataset.isControl = "true";
        }
        if (selectedIndexForEditing === index && currentMode === 'freeCreate') {
            figureContainer.classList.add('selected-for-edit');
        }
        if (currentMode === 'freeCreate') {
            figureContainer.addEventListener('click', () => {
                handleFigureSelectionForEditing(index);
            });
        }
        const itemElement = document.createElement('div');
        itemElement.textContent = item.symbol;
        if (item.isControl) {
            itemElement.classList.add('control-bar-item');
            if (item.type === 'final_barline') {
                itemElement.classList.add('final-barline-visual-style');
            } else if (item.type === 'repeat_start' || item.type === 'repeat_end') {
                itemElement.classList.add('repeat-barline-visual-style');
            }
        } else { 
            itemElement.classList.add('note-item', 'p-3', 'sm:p-4', 'rounded-lg', 'shadow', 'min-w-[45px]', 'sm:min-w-[55px]');
            if (item.type === 'note') {
                itemElement.classList.add('bg-blue-500', 'text-white');
            } else { 
                itemElement.classList.add('bg-gray-300', 'text-gray-700');
            }
        }
        figureContainer.appendChild(itemElement);
        const syllableElement = document.createElement('div');
        syllableElement.classList.add('syllable-text');
        if (!item.isControl) {
            syllableElement.textContent = item.syllable || '';
        }
        figureContainer.appendChild(syllableElement);
        rhythmDisplayEl.appendChild(figureContainer);

        let beatsForItem = 0;
        if (!item.isControl) {
             beatsForItem = item.duration; 
        }
        currentMeasureBeats += beatsForItem;

        if (index < activePattern.length - 1) { 
            if (Math.abs(currentMeasureBeats - measureCapacity) < 0.001) { 
                if (!(activePattern[index + 1] && activePattern[index + 1].isControl)) {
                    const barline = document.createElement('div');
                    barline.textContent = '|';
                    const barlineContainer = document.createElement('div');
                    barlineContainer.classList.add('figure-container');
                    barline.classList.add('barline-item', 'text-slate-500', 'font-light', 'px-1.5', 'sm:px-2.5', 'h-full', 'flex', 'items-center');
                    barline.style.fontSize = '3rem';
                    const emptySyllableForBarline = document.createElement('div');
                    emptySyllableForBarline.classList.add('syllable-text');
                    barlineContainer.appendChild(barline);
                    barlineContainer.appendChild(emptySyllableForBarline);
                    rhythmDisplayEl.appendChild(barlineContainer);
                }
                currentMeasureBeats = 0; 
            } else if (currentMeasureBeats > measureCapacity + 0.001) {
                console.warn("Compasso transbordou durante a renderização:", currentMeasureBeats, " capacidade:", measureCapacity, " item:", item);
                currentMeasureBeats = currentMeasureBeats % measureCapacity; 
            }
        }
    });
    if (selectedIndexForEditing !== null && currentMode === 'freeCreate') {
        deleteSelectedFigureButton.classList.remove('hidden');
    } else {
        deleteSelectedFigureButton.classList.add('hidden');
    }
}

function updateTempo(change) {
    if (isPlaying || isCountingDown || isAISuggesting) return;
    currentTempoBPM += change;
    if (currentTempoBPM < 30) currentTempoBPM = 30;
    if (currentTempoBPM > 280) currentTempoBPM = 280;
    tempoDisplay.textContent = currentTempoBPM;
    if (Tone.Transport.state === "started" || Tone.Transport.state === "paused") {
        Tone.Transport.bpm.value = currentTempoBPM;
    }
}

function highlightActiveVisualElement(patternIndex) {
    const figureContainers = Array.from(rhythmDisplayEl.children).filter(el => el.dataset.patternIndex !== undefined);
    figureContainers.forEach(el => el.classList.remove('highlight'));
    if (patternIndex !== null && activePattern && patternIndex < activePattern.length && activePattern[patternIndex]) { 
        const currentFigureContainer = figureContainers.find(fc => fc.dataset.patternIndex === String(patternIndex));
        if (currentFigureContainer) {
            currentFigureContainer.classList.add('highlight');
            const rect = currentFigureContainer.getBoundingClientRect();
            const displayRect = rhythmDisplayEl.getBoundingClientRect();
            if (rect.left < displayRect.left || rect.right > displayRect.right || rect.top < displayRect.top || rect.bottom > displayRect.bottom) {
                 currentFigureContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        }
    }
}

function startMetronome() {
    if (!metronomeSynth) {
        console.warn("startMetronome: metronomeSynth é nulo.");
        return;
    }
    if (metronomeEventId !== null) {
        Tone.Transport.clear(metronomeEventId);
        metronomeEventId = null;
    }
    const beatInterval = `${activeTimeSignature.beatType}n`; 
    metronomeEventId = Tone.Transport.scheduleRepeat(time => {
        if (metronomeSynth && (isPlaying || isCountingDown)) { 
             metronomeSynth.triggerAttackRelease("C5", "32n", time); 
        }
    }, beatInterval); 
    Tone.Transport.bpm.value = currentTempoBPM;
}

function stopMetronome() { 
    if (metronomeEventId !== null) {
        Tone.Transport.clear(metronomeEventId);
        metronomeEventId = null;
        console.log("Metrônomo (evento) parado e limpo.");
    }
}

// --- NOVA LÓGICA DE PLAYBACK COM TONE.TRANSPORT ---
function scheduleNextEvent(indexToPlay, timeOnTransportInput) {
    // Garante que timeOnTransportInput é um número para cálculos, se for string como "+0.1"
    let timeOnTransport;
    if (typeof timeOnTransportInput === 'string' && timeOnTransportInput.startsWith('+')) {
        // Se for relativo, calcula baseado no tempo atual do transporte
        // Isso é mais para a primeira chamada. Chamadas subsequentes devem usar segundos absolutos.
        timeOnTransport = Tone.Transport.seconds + parseFloat(timeOnTransportInput);
    } else if (typeof timeOnTransportInput === 'string') {
        try {
            timeOnTransport = Tone.Time(timeOnTransportInput).toSeconds();
        } catch (e) {
            console.error("Erro ao converter timeOnTransport string para segundos:", timeOnTransportInput, e);
            stopRhythmExecution(); return;
        }
    } else {
        timeOnTransport = timeOnTransportInput; // Assume que já é um número (segundos)
    }


    if (!isPlaying) {
        console.log(`[SCHEDULE ABORT] index: ${indexToPlay}, isPlaying: ${isPlaying}`);
        // Limpar eventos já agendados se o playback foi parado
        transportEventIds.forEach(id => Tone.Transport.clear(id));
        transportEventIds = [];
        Tone.Transport.cancel(timeOnTransport); // Cancela a partir deste ponto
        return;
    }
    if (indexToPlay >= activePattern.length) {
        console.log(`[SCHEDULE END] Fim do padrão. Agendando stop final em ${timeOnTransport.toFixed(3)}`);
        const endEventId = Tone.Transport.scheduleOnce(t => {
            if (isPlaying) { 
                console.log("[EXECUTE] Chamando stopRhythmExecution no final do padrão agendado.");
                stopRhythmExecution(); 
                messageArea.textContent = "Fim do ritmo/lição!";
                highlightActiveVisualElement(null);
            }
        }, timeOnTransport); 
        transportEventIds.push(endEventId);
        return;
    }

    const item = activePattern[indexToPlay];
    if (!item) {
        console.error(`[SCHEDULE ERROR] Item indefinido no índice ${indexToPlay}! Parando.`);
        stopRhythmExecution();
        return;
    }

    let itemEffectiveDurationSecs = 0;
    let itemToneNotationDuration = "0"; 

    if (!item.isControl) {
        if (figureToToneDuration[item.duration]) {
            itemToneNotationDuration = figureToToneDuration[item.duration];
            try {
                itemEffectiveDurationSecs = Tone.Time(itemToneNotationDuration).toSeconds();
                if (isNaN(itemEffectiveDurationSecs) || !isFinite(itemEffectiveDurationSecs) || itemEffectiveDurationSecs < 0) {
                    console.error(`Duração calculada inválida: ${itemEffectiveDurationSecs}s para item:`, item, `Notação: ${itemToneNotationDuration}`);
                    itemEffectiveDurationSecs = 0; 
                }
            } catch (e) {
                console.error("Erro ao converter itemToneNotationDuration para segundos:", e, "Item:", item, `Notação: ${itemToneNotationDuration}`);
                itemEffectiveDurationSecs = 0;
            }
        } else {
            console.warn(`[SCHEDULE WARN] Mapeamento de duração Tone.js não encontrado para item.duration = ${item.duration}. Item:`, item, `Índice: ${indexToPlay}. Usando 0s.`);
        }
    }
    
    // Para logging, se timeOnTransport for string, usa como está, senão formata
    const logTime = typeof timeOnTransportInput === 'string' ? timeOnTransportInput : timeOnTransport.toFixed(3);
    console.log(`[SCHEDULE] Item ${indexToPlay} ('${item.symbol}', tipo: ${item.type}, dur: ${item.duration}) para T: ${logTime}. Duração efetiva: ${itemEffectiveDurationSecs.toFixed(3)}s`);

    const eventId = Tone.Transport.scheduleOnce(transportTimeCallbackArg => {
        if (!isPlaying) {
            console.log(`[EXECUTE CANCELED] Item ${indexToPlay} ('${item.symbol}') - isPlaying tornou-se false.`);
            return;
        }

        console.log(`[EXECUTE START] Item ${indexToPlay} ('${item.symbol}') no tempo real T: ${transportTimeCallbackArg.toFixed(3)} (agendado para ${logTime}).`);
        highlightActiveVisualElement(indexToPlay);

        let nextIndex = indexToPlay + 1;
        let nextScheduledTime = timeOnTransport + itemEffectiveDurationSecs; // Sempre em segundos agora

        if (item.isControl) {
            nextScheduledTime = timeOnTransport; 
            if (item.type === 'repeat_start') {
                playbackRepeatStartIndex = indexToPlay;
                hasRepeatedThisSection = false;
                console.log(`[CONTROL EXEC] repeat_start. playbackRepeatStartIndex: ${playbackRepeatStartIndex}`);
            } else if (item.type === 'repeat_end') {
                let originalIndexForRepeatEnd = indexToPlay; // Para referência dentro deste bloco
                console.log(`[CONTROL EXEC] repeat_end. StartIdx: ${playbackRepeatStartIndex}, HasRepeated: ${hasRepeatedThisSection}, GlobalRepeat: ${hasRepeatedThisSectionGlobal}`);
                if (playbackRepeatStartIndex !== null && !hasRepeatedThisSection) {
                    hasRepeatedThisSection = true;
                    nextIndex = playbackRepeatStartIndex + 1;
                    console.log(`[CONTROL EXEC] repeat_end: Saltando para índice ${nextIndex} para repetir.`);
                    if (nextIndex >= activePattern.length || nextIndex <= playbackRepeatStartIndex ) { 
                        console.warn("[CONTROL EXEC] Lógica de repetição levou a nextIndex inválido, avançando após repeat_end.");
                        nextIndex = originalIndexForRepeatEnd + 1; 
                        playbackRepeatStartIndex = null;
                        hasRepeatedThisSection = false; 
                    }
                } else if (playbackRepeatStartIndex === null && !hasRepeatedThisSectionGlobal) {
                    nextIndex = 0; 
                    hasRepeatedThisSectionGlobal = true; 
                    playbackRepeatStartIndex = null; 
                    hasRepeatedThisSection = false;  
                    console.log(`[CONTROL EXEC] repeat_end: Sem 𝄆 ativo, saltando para início global (índice 0).`);
                } else {
                    nextIndex = originalIndexForRepeatEnd + 1;
                    playbackRepeatStartIndex = null; 
                    hasRepeatedThisSection = false;  
                    console.log(`[CONTROL EXEC] repeat_end: Avançando após símbolo de repetição para índice ${nextIndex}.`);
                }
            } else if (item.type === 'final_barline') {
                console.log("[CONTROL EXEC] Barra final encontrada. Parando.");
                stopRhythmExecution(); 
                messageArea.textContent = "Fim da peça.";
                setTimeout(() => { 
                    if (!isPlaying) highlightActiveVisualElement(null); 
                } , 200);
                return; 
            }
            scheduleNextEvent(nextIndex, nextScheduledTime);

        } else { 
            if (item.type === 'note' && noteSynth) {
                console.log(`[AUDIO EXEC] Tocando nota ${item.symbol} com duração Tone: ${itemToneNotationDuration} no tempo T: ${transportTimeCallbackArg.toFixed(3)}`);
                noteSynth.triggerAttackRelease("C4", itemToneNotationDuration, transportTimeCallbackArg);
            } else if (item.type === 'note' && !noteSynth) {
                console.warn(`[AUDIO EXEC] noteSynth é nulo, não pode tocar nota ${item.symbol}`);
            }
            scheduleNextEvent(nextIndex, nextScheduledTime);
        }
        console.log(`[EXECUTE END] Item ${indexToPlay} ('${item.symbol}'). Próximo a agendar: índice ${nextIndex} no tempo T: ${nextScheduledTime.toFixed(3)}`);

    }, timeOnTransport); 

    transportEventIds.push(eventId);
}


function setupAndStartTransportPlayback() {
    isPlaying = true;
    playPauseButton.textContent = 'Pausar';
    aiSuggestButton.disabled = true;
    lessonSelect.disabled = true;
    modeSelect.disabled = true;
    timeSignatureSelectFree.disabled = true;
    deleteSelectedFigureButton.disabled = true;

    Tone.Transport.cancel(0); 
    transportEventIds.forEach(id => Tone.Transport.clear(id)); 
    transportEventIds = [];
    Tone.Transport.position = 0; 

    playbackRepeatStartIndex = null;
    hasRepeatedThisSection = false;
    hasRepeatedThisSectionGlobal = false;

    messageArea.textContent = "Tocando...";
    startMetronome(); 

    // Inicia o transporte um pouquinho antes de agendar o primeiro evento para garantir que está rodando
    Tone.Transport.start(Tone.now() + 0.01); 
    // Agenda o primeiro evento para "+0.05" (relativo ao início do transporte)
    // ou um tempo absoluto um pouco depois de Tone.now()
    let firstEventTime = Tone.Transport.seconds + 0.05; // Tenta agendar um pouco à frente do tempo atual do transporte
    console.log(`setupAndStartTransportPlayback: Chamando scheduleNextEvent(0, ${firstEventTime.toFixed(3)}) (Transport.seconds: ${Tone.Transport.seconds.toFixed(3)})`);
    scheduleNextEvent(0, firstEventTime); 

    console.log("Tone.Transport iniciado para playback.");
}


async function startCountdownAndPlay() {
    console.log("startCountdownAndPlay INICIADA - Verificando condições iniciais...");
    if (isPlaying || isCountingDown || isAISuggesting || activePattern.length === 0) {
        messageArea.textContent = activePattern.length === 0 ? (currentMode === 'lessons' ? "Lição vazia." : "Ritmo vazio.") : "";
        console.warn("startCountdownAndPlay: Bloqueado por isPlaying, isCountingDown, isAISuggesting ou activePattern vazio.");
        return;
    }

    isCountingDown = true; 
    playPauseButton.disabled = true;
    aiSuggestButton.disabled = true;
    lessonSelect.disabled = true;
    modeSelect.disabled = true;
    timeSignatureSelectFree.disabled = true;
    deleteSelectedFigureButton.disabled = true;

    messageArea.textContent = "Preparando...";
    console.log("startCountdownAndPlay: Mensagem 'Preparando...' definida.");
    countdownDisplay.textContent = ""; 

    try {
        if (!Tone.context || Tone.context.state !== 'running') {
            console.log("Contexto Tone.js não está 'running'. Estado atual:", Tone.context?.state, ". Tentando Tone.start()...");
            await Tone.start(); 
            console.log("Tone.start() completado. Novo estado do contexto:", Tone.context.state);
            if (Tone.context.state !== 'running') {
                throw new Error("Falha crítica: Não foi possível iniciar o contexto de áudio do Tone.js.");
            }
        } else {
            console.log("Contexto Tone.js já está 'running'.");
        }
        
        console.log("Chamando initializeSynths() de startCountdownAndPlay para garantir que estão prontos.");
        initializeSynths(); 
        
        if (!noteSynth || !metronomeSynth) {
            console.error("Falha crítica: Um ou ambos os sintetizadores (noteSynth/metronomeSynth) são nulos APÓS initializeSynths().");
            messageArea.textContent = "Erro crítico na inicialização do áudio. Recarregue a página.";
            isCountingDown = false; 
            reEnableButtonsAfterErrorOrStop(); 
            if (playPauseButton) playPauseButton.textContent = 'Tocar'; 
            return; 
        }
        console.log("Sintetizadores verificados e parecem OK.");

        console.log("activeTimeSignature para contagem:", activeTimeSignature);
        let count = parseInt(activeTimeSignature.beats, 10); 
        console.log("Valor inicial da contagem (count):", count);

        if (isNaN(count) || typeof count !== 'number' || count <= 0) {
            console.error("Contagem inválida! count:", count, "de activeTimeSignature:", activeTimeSignature);
            messageArea.textContent = "Erro: Fórmula de compasso inválida para contagem.";
            isCountingDown = false; 
            reEnableButtonsAfterErrorOrStop();
            if (playPauseButton) playPauseButton.textContent = 'Tocar';
            return;
        }

        function doCount() {
            // console.log("doCount EXECUTANDO - count atual:", count); 
            try {
                if (!isCountingDown) { 
                    console.warn("doCount: isCountingDown é false, parando contagem.");
                    clearTimeout(countdownTimeoutId);
                    reEnableButtonsAfterErrorOrStop();
                     if (playPauseButton) playPauseButton.textContent = 'Tocar';
                    return;
                }

                if (count > 0) {
                    countdownDisplay.textContent = count;
                    if (metronomeSynth && typeof metronomeSynth.triggerAttackRelease === 'function') {
                        metronomeSynth.triggerAttackRelease("C5", "16n", Tone.now());
                    } else {
                        console.warn("metronomeSynth é nulo ou inválido durante doCount, sem som de contagem.");
                    }
                    count--;
                    
                    if (isNaN(currentTempoBPM) || currentTempoBPM <= 0 || !isFinite(currentTempoBPM)){
                        console.error("currentTempoBPM inválido antes de calcular singleBeatDurationMs:", currentTempoBPM);
                        messageArea.textContent = "Erro: Tempo (BPM) da contagem inválido.";
                        isCountingDown = false;
                        reEnableButtonsAfterErrorOrStop();
                        if (playPauseButton) playPauseButton.textContent = 'Tocar';
                        clearTimeout(countdownTimeoutId);
                        return;
                    }
                    const singleBeatDurationMs = (60000 / currentTempoBPM); 

                    if (isNaN(singleBeatDurationMs) || singleBeatDurationMs <= 0 || !isFinite(singleBeatDurationMs)) {
                        console.error("singleBeatDurationMs inválido em doCount!", singleBeatDurationMs, "BPM:", currentTempoBPM);
                        messageArea.textContent = "Erro: Tempo (BPM) inválido para timeout da contagem.";
                        isCountingDown = false;
                        reEnableButtonsAfterErrorOrStop();
                        if (playPauseButton) playPauseButton.textContent = 'Tocar';
                        clearTimeout(countdownTimeoutId);
                        return;
                    }
                    countdownTimeoutId = setTimeout(doCount, singleBeatDurationMs);
                } else {
                    console.log("Contagem regressiva finalizada. Chamando setupAndStartTransportPlayback().");
                    countdownDisplay.textContent = "";
                    isCountingDown = false;
                    setupAndStartTransportPlayback(); 
                }
            } catch (e_doCount) {
                console.error("--------------------------------------------------");
                console.error("ERRO DETALHADO DENTRO DE doCount:", e_doCount); 
                console.error("Stack do erro em doCount:", e_doCount.stack);
                console.error("--------------------------------------------------");
                messageArea.textContent = "Erro durante a contagem.";
                isCountingDown = false;
                reEnableButtonsAfterErrorOrStop();
                if (playPauseButton) {
                    playPauseButton.textContent = 'Tocar';
                    playPauseButton.classList.remove('btn-pause');
                    playPauseButton.classList.add('btn-play');
                }
                clearTimeout(countdownTimeoutId);
            }
        }
        console.log("Chamando doCount() pela primeira vez.");
        doCount();

    } catch (error) {
        console.error("--------------------------------------------------");
        console.error("ERRO DETALHADO em startCountdownAndPlay:", error); 
        console.error("Stack do erro em startCountdownAndPlay:", error.stack);
        console.error("--------------------------------------------------");
        messageArea.textContent = "Erro ao iniciar a reprodução: " + error.message;
        isCountingDown = false; 
        isPlaying = false; 
        reEnableButtonsAfterErrorOrStop();
        if (playPauseButton) {
            playPauseButton.textContent = 'Tocar';
            playPauseButton.classList.remove('btn-pause');
            playPauseButton.classList.add('btn-play');
        }
    }
}

function pauseRhythmExecution() {
    if (Tone.Transport.state === "started") { 
        console.log("Pausando Tone.Transport.");
        Tone.Transport.pause();
        isPlaying = false; 
        playPauseButton.textContent = 'Tocar';
        messageArea.textContent = "Pausado.";
        reEnableButtonsAfterErrorOrStop(); 
    } else {
        console.log("pauseRhythmExecution chamada mas transporte não estava 'started'. Estado:", Tone.Transport.state);
    }
}

function stopRhythmExecution() {
    console.log("stopRhythmExecution chamada. Estado isPlaying anterior:", isPlaying);
    isPlaying = false; 
    isCountingDown = false; 

    if(countdownTimeoutId) clearTimeout(countdownTimeoutId); 
    countdownTimeoutId = null;
    
    console.log("Parando e cancelando Tone.Transport.");
    Tone.Transport.stop();
    Tone.Transport.cancel(0); 
    transportEventIds.forEach(id => Tone.Transport.clear(id)); 
    transportEventIds = [];
    Tone.Transport.position = 0;

    if (metronomeEventId !== null) {
        // Tone.Transport.clear(metronomeEventId); // Já coberto por cancel(0)
        metronomeEventId = null; // Apenas reseta a flag
        console.log("Flag metronomeEventId resetada.");
    }
    
    playbackRepeatStartIndex = null;
    hasRepeatedThisSection = false;
    hasRepeatedThisSectionGlobal = false; 

    playPauseButton.textContent = 'Tocar';
    reEnableButtonsAfterErrorOrStop();
    if (playPauseButton.classList.contains('btn-pause')) { 
        playPauseButton.classList.remove('btn-pause');
        playPauseButton.classList.add('btn-play');
    }
    highlightActiveVisualElement(null);
    countdownDisplay.textContent = "";
    if (messageArea.textContent.includes("Tocando") || messageArea.textContent.includes("Pausado")) {
        messageArea.textContent = "Reprodução parada.";
    }
}

function resetPlaybackState(showMsg = true) {
    stopRhythmExecution(); 
    if (currentMode === 'freeCreate') {
        selectedIndexForEditing = null; 
    }
    if (showMsg) { messageArea.textContent = currentMode === 'lessons' ? "Lição resetada." : "Ritmo resetado."; }
    renderRhythm(); 
}

async function getAIRhythmSuggestion() {
    if (currentMode !== 'freeCreate' || isAISuggesting || isPlaying || isCountingDown) return;
    isAISuggesting = true;
    aiSuggestButton.disabled = true;
    deleteSelectedFigureButton.disabled = true;
    aiSuggestButton.textContent = "Sugerindo...";
    messageArea.textContent = "IA pensando em um trecho rítmico...";
    const apiKey = "AIzaSyC2YKijK21_UvFmpdq6523lvUyqQDmY_jQ";
    if (apiKey === "") {
        messageArea.textContent = "Chave da API Gemini não configurada.";
        console.error("Chave da API Gemini não configurada.");
        isAISuggesting = false;
        aiSuggestButton.disabled = false;
        deleteSelectedFigureButton.disabled = false;
        aiSuggestButton.textContent = "✨ Sugerir Trecho";
        return;
    }
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
    const contextPatternAI = customPattern.filter(fig => !fig.isControl).slice(-4);
    const contextText = contextPatternAI.map(fig => `${fig.type} (${fig.duration}t ${fig.symbol})`).join(', ') || "início do compasso";
     // --- PROMPT MODIFICADO ABAIXO ---
    const prompt = `Você é um assistente de composição musical especializado em ritmos.
O compasso atual é ${activeTimeSignature.beats}/${activeTimeSignature.beatType}.
O ritmo atual (se existir) termina com: ${contextText}.

Por favor, sugira uma sequência rítmica que preencha exatamente 4 a 8 compassos completos (por exemplo, resultando entre 1 a 16 figuras, dependendo das durações escolhidas e do compasso atual) que continue o ritmo existente ou inicie um novo de forma musicalmente interessante. Nunca deixe um compasso vazio, sempre completando com a quantidade de figuras suficiente para fechar o compasso.

A sequência deve ser musicalmente coesa e utilizar uma VARIEDADE de durações de figuras (notas e pausas) da lista fornecida para tornar o exercício mais completo, educativo e desafiador. Tente incorporar figuras de durações longas, médias e curtas. Evite sequências excessivamente monótonas ou repetitivas, a menos que seja uma repetição musicalmente intencional e curta.

As durações possíveis para cada figura são: 4 (semibreve), 2 (mínima), 1 (semínima), 0.5 (colcheia), 0.25 (semicolcheia).

Use os seguintes símbolos musicais OBRIGATORIAMENTE:
- Semibreve (nota): 𝅝
- Pausa de Semibreve (pausa): 𝄻
- Mínima (nota): 𝅗𝅥
- Pausa de Mínima (pausa): 𝄼
- Semínima (nota): ♩
- Pausa de Semínima (pausa): 𝄽
- Colcheia (nota): 𝅘𝅥𝅮
- Pausa de Colcheia (pausa): 𝄾
- Semicolcheia (nota): 𝅘𝅥𝅯
- Pausa de Semicolcheia (pausa): 𝄿

Responda OBRIGATORIAMENTE com um objeto JSON que contenha uma chave "suggested_figures".
O valor de "suggested_figures" deve ser um array de objetos, onde cada objeto representa uma figura rítmica e tem as seguintes chaves:
- "type": string (deve ser "note" ou "rest")
- "duration": number (deve ser um dos seguintes: 4, 2, 1, 0.5, 0.25)
- "symbol": string (o símbolo musical correspondente conforme listado acima)

Exemplo de resposta JSON válida (USANDO OS SÍMBOLOS CORRETOS):
\`\`\`json
{
  "suggested_figures": [
    { "type": "note", "duration": 1, "symbol": "♩" },
    { "type": "note", "duration": 0.5, "symbol": "𝅘𝅥𝅮" },
    { "type": "note", "duration": 0.5, "symbol": "𝅘𝅥𝅮" },
    { "type": "rest", "duration": 1, "symbol": "𝄽" },
    { "type": "note", "duration": 0.25, "symbol": "𝅘𝅥𝅯" },
    { "type": "note", "duration": 0.25, "symbol": "𝅘𝅥𝅯" },
    { "type": "note", "duration": 0.25, "symbol": "𝅘𝅥𝅯" },
    { "type": "note", "duration": 0.25, "symbol": "𝅘𝅥𝅯" }
  ]
}
\`\`\`
Gere apenas o objeto JSON. Não inclua nenhuma explicação ou texto adicional fora do JSON.`;
    // --- FIM DO PROMPT MODIFICADO --- //
    
    const payload = { contents: [{ role: "user", parts: [{ text: prompt }] }] };
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        if (!response.ok) {
            const errorBody = await response.text();
            console.error(`[API Error Debug] Status: ${response.status}, StatusText: ${response.statusText}, Body: "${errorBody}"`);
            throw new Error(`Erro da API: ${response.status} ${response.statusText} - ${errorBody.trim()}`);
        }
        const result = await response.json();
        if (result.candidates && result.candidates[0]?.content?.parts?.[0]) {
            let jsonText = result.candidates[0].content.parts[0].text;
            const jsonMatch = jsonText.match(/```json\s*([\s\S]*?)\s*```/);
            if (jsonMatch && jsonMatch[1]) { jsonText = jsonMatch[1]; }
            let parsedJson;
            try { parsedJson = JSON.parse(jsonText); }
            catch (parseError) {
                console.error("Erro ao parsear JSON da IA:", parseError, "Texto:", jsonText);
                messageArea.textContent = "Erro ao processar sugestão (JSON inválido)."; return;
            }
            if (parsedJson.suggested_figures && Array.isArray(parsedJson.suggested_figures)) {
                const newFigures = parsedJson.suggested_figures.filter(fig => {
                    const expectedFig = rhythmicFigures.find(rf => !rf.isControl && rf.type === fig.type && rf.duration === fig.duration);
                    const isValidSymbol = rhythmicFigures.some(rf => !rf.isControl && rf.symbol === fig.symbol && rf.type === fig.type && rf.duration === fig.duration);
                    return expectedFig && isValidSymbol && (fig.type === "note" || fig.type === "rest") && [4, 2, 1, 0.5, 0.25].includes(fig.duration);
                });
                if (newFigures.length > 0) {
                    const tempPatternWithSuggestions = [...customPattern, ...newFigures.map(f => ({...f, isControl: false, syllable: ''}))]; 
                    if (!checkPatternValidity(tempPatternWithSuggestions, activeTimeSignature)) {
                        messageArea.textContent = "Sugestão da IA muito longa para o(s) compasso(s) atual(is).";
                        console.warn("Sugestão da IA descartada por exceder limite do compasso.");
                        return; 
                    }
                    const figuresWithSyllables = newFigures.map((fig, index, arr) => {
                        let syllable = '';
                        let prevFigForSyllable = null;
                        if (index > 0) { 
                            prevFigForSyllable = arr[index-1];
                        } else if (customPattern.filter(cpFig => !cpFig.isControl).length > 0) {
                            const realCustomPattern = customPattern.filter(cpFig => !cpFig.isControl);
                            prevFigForSyllable = realCustomPattern[realCustomPattern.length -1];
                        }
                        if (fig.type === 'note') {
                            if (fig.duration === 4 || fig.duration === 2 || fig.duration === 1) {
                                syllable = 'Tá';
                            } else if (fig.duration === 0.5) {
                                if (prevFigForSyllable && prevFigForSyllable.type === 'note' && prevFigForSyllable.duration === 0.5 && prevFigForSyllable.syllable === 'Ta') {
                                    syllable = 'ca';
                                } else {
                                    syllable = 'Ta';
                                }
                            } else if (fig.duration === 0.25) {
                                let consecutiveSemicolcheiasBeforeCurrentInSuggestion = 0;
                                const patternForSemicolcheiaContext = (index === 0) ? customPattern.filter(cpFig => !cpFig.isControl) : arr;
                                const startIndexForSemicolcheia = (index === 0) ? patternForSemicolcheiaContext.length -1 : index -1;
                                for(let j = startIndexForSemicolcheia; j >= 0; j--) {
                                    const prevContextFig = patternForSemicolcheiaContext[j];
                                    if(prevContextFig.type === 'note' && prevContextFig.duration === 0.25) consecutiveSemicolcheiasBeforeCurrentInSuggestion++; else break;
                                }
                                const positionInGroup = consecutiveSemicolcheiasBeforeCurrentInSuggestion % 4;
                                if (positionInGroup === 0) syllable = "Ti";
                                else if (positionInGroup === 1) syllable = "ri";
                                else if (positionInGroup === 2) syllable = "ti";
                                else if (positionInGroup === 3) syllable = "ri";
                            }
                        }
                        return { ...fig, syllable: syllable, isControl: false };
                    });
                    customPattern.push(...figuresWithSyllables);
                    updateActivePatternAndTimeSignature();
                    messageArea.textContent = "Sugestão da IA adicionada!";
                } else {
                    messageArea.textContent = "Sugestão da IA inválida ou vazia.";
                    console.warn("Figuras parseadas mas filtradas:", parsedJson.suggested_figures);
                }
            } else {
                messageArea.textContent = "Resposta da IA em formato inesperado.";
                console.warn("Resposta IA (formato inesperado):", parsedJson);
            }
        } else {
            messageArea.textContent = "Não foi possível obter sugestão da IA.";
            console.warn("Resposta IA (sem candidatos):", result);
        }
    } catch (error) {
        if (!(error.message.startsWith("Erro da API:"))) { console.error("Erro ao buscar sugestão IA:", error); }
        messageArea.textContent = "Erro ao comunicar com a IA. Verifique o console.";
    } finally {
        isAISuggesting = false;
        reEnableButtonsAfterErrorOrStop();
        aiSuggestButton.textContent = "✨ Sugerir Trecho";
    }
}

// --- Event Listeners ---
modeSelect.addEventListener('change', (e) => switchMode(e.target.value));
lessonSelect.addEventListener('change', (e) => {
    currentLessonIndex = parseInt(e.target.value);
    selectedIndexForEditing = null; 
    updateActivePatternAndTimeSignature();
});
timeSignatureSelectFree.addEventListener('change', () => {
    if (currentMode === 'freeCreate') {
        selectedIndexForEditing = null; 
        const newTimeSig = { 
            beats: parseInt(timeSignatureSelectFree.value.split('/')[0]), 
            beatType: parseInt(timeSignatureSelectFree.value.split('/')[1]) 
        };
        if (!checkPatternValidity(customPattern, newTimeSig)) {
            messageArea.textContent = "Atenção: Ritmo atual pode ser inválido para nova fórmula. Ajuste ou limpe.";
        }
        updateActivePatternAndTimeSignature();
    }
});
tempoDecreaseBtn.addEventListener('click', () => updateTempo(-5));
tempoIncreaseBtn.addEventListener('click', () => updateTempo(5));
playPauseButton.addEventListener('click', () => {
    if (Tone.Transport.state === "paused") {
        console.log("Play/Pause: Transport estava pausado. Retomando...");
        isPlaying = true;
        playPauseButton.textContent = 'Pausar';
        // Desabilitar outros botões durante o playback
        aiSuggestButton.disabled = true;
        lessonSelect.disabled = true;
        modeSelect.disabled = true;
        timeSignatureSelectFree.disabled = true;
        deleteSelectedFigureButton.disabled = true;
        
        startMetronome(); // Garante que o metrônomo está configurado para tocar
        Tone.Transport.start(); // Retoma o transporte do Tone
        messageArea.textContent = "Tocando...";
    } else if (isPlaying) { // Se tocando, pausa
        console.log("Play/Pause: Estava tocando. Pausando...");
        pauseRhythmExecution();
    } else { // Se parado (nem tocando, nem pausado), inicia do começo com contagem
        console.log("Play/Pause: Estava parado. Iniciando contagem...");
        startCountdownAndPlay();
    }
});
resetButton.addEventListener('click', () => resetPlaybackState(true));
clearCustomRhythmBtn.addEventListener('click', clearCustomPattern);
aiSuggestButton.addEventListener('click', getAIRhythmSuggestion);
deleteSelectedFigureButton.addEventListener('click', deleteSelectedFigure);

// --- Inicialização da Aplicação ---
function init() {
    populateLessonSelect();
    populateFigurePalette();
    // Define o estado inicial explicitamente para garantir que activeTimeSignature seja válido
    currentMode = 'lessons'; 
    currentLessonIndex = 0; 
    const initialLesson = lessons[currentLessonIndex];
    if (initialLesson) { // Verifica se a lição inicial existe
        activeTimeSignature = initialLesson.timeSignature;
        currentTempoBPM = initialLesson.tempo;
    } else { // Fallback se o array de lições estiver vazio ou o índice for inválido
        activeTimeSignature = { beats: 4, beatType: 4};
        currentTempoBPM = 100;
        console.warn("Nenhuma lição inicial encontrada, usando valores padrão para timeSignature e tempo.");
    }
    
    switchMode(currentMode); 
    console.log("Aplicação inicializada.");
}
init();