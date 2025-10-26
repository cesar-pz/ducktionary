// Common 5-letter words for random mode
const WORD_LIST = [
    'ABOUT', 'ABOVE', 'ABUSE', 'ACTOR', 'ACUTE', 'ADMIT', 'ADOPT', 'ADULT', 'AFTER', 'AGAIN',
    'AGENT', 'AGREE', 'AHEAD', 'ALARM', 'ALBUM', 'ALERT', 'ALIGN', 'ALIKE', 'ALIVE', 'ALLOW',
    'ALONE', 'ALONG', 'ALTER', 'ANGEL', 'ANGER', 'ANGLE', 'ANGRY', 'APART', 'APPLE', 'APPLY',
    'ARENA', 'ARGUE', 'ARISE', 'ARRAY', 'ASIDE', 'ASSET', 'AUDIO', 'AVOID', 'AWARD', 'AWARE',
    'BADLY', 'BAKER', 'BASIC', 'BEACH', 'BEGAN', 'BEGIN', 'BEING', 'BELLY', 'BENCH', 'BILLY',
    'BIRTH', 'BLACK', 'BLAME', 'BLIND', 'BLOCK', 'BLOOD', 'BOARD', 'BOOST', 'BOOTH', 'BOUND',
    'BRAIN', 'BRAND', 'BREAD', 'BREAK', 'BREED', 'BRIEF', 'BRING', 'BROAD', 'BROKE', 'BROWN',
    'BUILD', 'BUYER', 'CABLE', 'CARRY', 'CATCH', 'CAUSE', 'CHAIN', 'CHAIR', 'CHART', 'CHASE',
    'CHEAP', 'CHECK', 'CHEST', 'CHIEF', 'CHILD', 'CHINA', 'CHOSE', 'CIVIL', 'CLAIM', 'CLASS',
    'CLEAN', 'CLEAR', 'CLICK', 'CLOCK', 'CLOSE', 'COACH', 'COAST', 'COULD', 'COUNT', 'COURT',
    'COVER', 'CRAFT', 'CRASH', 'CRAZY', 'CREAM', 'CRIME', 'CROSS', 'CROWD', 'CROWN', 'CURVE',
    'CYCLE', 'DAILY', 'DANCE', 'DATED', 'DEATH', 'DEBUT', 'DELAY', 'DEPTH', 'DOING', 'DOUBT',
    'DRAFT', 'DRAMA', 'DRANK', 'DRAWN', 'DREAM', 'DRESS', 'DRILL', 'DRINK', 'DRIVE', 'DROVE',
    'DYING', 'EAGER', 'EARLY', 'EARTH', 'EIGHT', 'ELITE', 'EMPTY', 'ENEMY', 'ENJOY', 'ENTER',
    'ENTRY', 'EQUAL', 'ERROR', 'EVENT', 'EVERY', 'EXACT', 'EXIST', 'EXTRA', 'FAITH', 'FALSE',
    'FAULT', 'FIBER', 'FIELD', 'FIFTH', 'FIFTY', 'FIGHT', 'FINAL', 'FIRST', 'FIXED', 'FLASH',
    'FLEET', 'FLOOR', 'FLUID', 'FOCUS', 'FORCE', 'FORTH', 'FORTY', 'FORUM', 'FOUND', 'FRAME',
    'FRANK', 'FRAUD', 'FRESH', 'FRONT', 'FRUIT', 'FULLY', 'FUNNY', 'GIANT', 'GIVEN', 'GLASS',
    'GLOBE', 'GOING', 'GRACE', 'GRADE', 'GRAND', 'GRANT', 'GRASS', 'GREAT', 'GREEN', 'GROSS',
    'GROUP', 'GROWN', 'GUARD', 'GUESS', 'GUEST', 'GUIDE', 'HAPPY', 'HARRY', 'HEART', 'HEAVY',
    'HENCE', 'HENRY', 'HORSE', 'HOTEL', 'HOUSE', 'HUMAN', 'IDEAL', 'IMAGE', 'INDEX', 'INNER',
    'INPUT', 'ISSUE', 'JAPAN', 'JIMMY', 'JOINT', 'JONES', 'JUDGE', 'KNOWN', 'LABEL', 'LARGE',
    'LASER', 'LATER', 'LAUGH', 'LAYER', 'LEARN', 'LEASE', 'LEAST', 'LEAVE', 'LEGAL', 'LEMON',
    'LEVEL', 'LEWIS', 'LIGHT', 'LIMIT', 'LINKS', 'LIVES', 'LOCAL', 'LOGIC', 'LOOSE', 'LOWER',
    'LUCKY', 'LUNCH', 'LYING', 'MAGIC', 'MAJOR', 'MAKER', 'MARCH', 'MARIA', 'MATCH', 'MAYBE',
    'MAYOR', 'MEANT', 'MEDIA', 'METAL', 'MIGHT', 'MINOR', 'MINUS', 'MIXED', 'MODEL', 'MONEY',
    'MONTH', 'MORAL', 'MOTOR', 'MOUNT', 'MOUSE', 'MOUTH', 'MOVIE', 'MUSIC', 'NEEDS', 'NEVER',
    'NEWLY', 'NIGHT', 'NOISE', 'NORTH', 'NOTED', 'NOVEL', 'NURSE', 'OCCUR', 'OCEAN', 'OFFER',
    'OFTEN', 'ORDER', 'OTHER', 'OUGHT', 'PAINT', 'PANEL', 'PAPER', 'PARTY', 'PEACE', 'PETER',
    'PHASE', 'PHONE', 'PHOTO', 'PIECE', 'PILOT', 'PITCH', 'PLACE', 'PLAIN', 'PLANE', 'PLANT',
    'PLATE', 'POINT', 'POUND', 'POWER', 'PRESS', 'PRICE', 'PRIDE', 'PRIME', 'PRINT', 'PRIOR',
    'PRIZE', 'PROOF', 'PROUD', 'PROVE', 'QUEEN', 'QUICK', 'QUIET', 'QUITE', 'RADIO', 'RAISE',
    'RANGE', 'RAPID', 'RATIO', 'REACH', 'READY', 'REFER', 'RIGHT', 'RIVAL', 'RIVER', 'ROBIN',
    'ROGER', 'ROMAN', 'ROUGH', 'ROUND', 'ROUTE', 'ROYAL', 'RURAL', 'SCALE', 'SCENE', 'SCOPE',
    'SCORE', 'SENSE', 'SERVE', 'SEVEN', 'SHALL', 'SHAPE', 'SHARE', 'SHARP', 'SHEET', 'SHELF',
    'SHELL', 'SHIFT', 'SHINE', 'SHIRT', 'SHOCK', 'SHOOT', 'SHORT', 'SHOWN', 'SIGHT', 'SINCE',
    'SIXTH', 'SIXTY', 'SIZED', 'SKILL', 'SLEEP', 'SLIDE', 'SMALL', 'SMART', 'SMILE', 'SMITH',
    'SMOKE', 'SOLID', 'SOLVE', 'SORRY', 'SOUND', 'SOUTH', 'SPACE', 'SPARE', 'SPEAK', 'SPEED',
    'SPEND', 'SPENT', 'SPLIT', 'SPOKE', 'SPORT', 'STAFF', 'STAGE', 'STAKE', 'STAND', 'START',
    'STATE', 'STEAM', 'STEEL', 'STICK', 'STILL', 'STOCK', 'STONE', 'STOOD', 'STORE', 'STORM',
    'STORY', 'STRIP', 'STUCK', 'STUDY', 'STUFF', 'STYLE', 'SUGAR', 'SUITE', 'SUPER', 'SWEET',
    'TABLE', 'TAKEN', 'TASTE', 'TAXES', 'TEACH', 'TERRY', 'TEXAS', 'THANK', 'THEFT', 'THEIR',
    'THEME', 'THERE', 'THESE', 'THICK', 'THING', 'THINK', 'THIRD', 'THOSE', 'THREE', 'THREW',
    'THROW', 'TIGHT', 'TIMES', 'TITLE', 'TODAY', 'TOPIC', 'TOTAL', 'TOUCH', 'TOUGH', 'TOWER',
    'TRACK', 'TRADE', 'TRAIN', 'TREAT', 'TREND', 'TRIAL', 'TRIED', 'TRIES', 'TRUCK', 'TRULY',
    'TRUST', 'TRUTH', 'TWICE', 'UNDER', 'UNDUE', 'UNION', 'UNITY', 'UNTIL', 'UPPER', 'UPSET',
    'URBAN', 'USAGE', 'USUAL', 'VALID', 'VALUE', 'VIDEO', 'VIRUS', 'VISIT', 'VITAL', 'VOCAL',
    'VOICE', 'WASTE', 'WATCH', 'WATER', 'WHEEL', 'WHERE', 'WHICH', 'WHILE', 'WHITE', 'WHOLE',
    'WHOSE', 'WOMAN', 'WOMEN', 'WORLD', 'WORRY', 'WORSE', 'WORST', 'WORTH', 'WOULD', 'WOUND',
    'WRITE', 'WRONG', 'WROTE', 'YOUNG', 'YOUTH'
];

class WordleGame {
    constructor() {
        this.currentWord = '';
        this.currentAttempt = 0;
        this.maxAttempts = 6;
        this.currentGuess = '';
        this.gameOver = false;
        this.customMode = false;
        this.isCustomInputActive = false; // Track if custom input is active
        this.keydownListenerAdded = false; // Ensure keydown listener is added only once
        this.keyboardState = {};
        
        this.initElements();
        this.initKeyboard();
        this.startRandomGame();
        this.attachEventListeners();
    }

    initElements() {
        this.gameBoard = document.getElementById('game-board');
        this.keyboard = document.getElementById('keyboard');
        this.message = document.getElementById('message');
        this.attempts = document.getElementById('attempts');
        this.modeToggle = document.getElementById('mode-toggle');
        this.customModeDiv = document.getElementById('custom-mode');
        this.customWordInput = document.getElementById('custom-word');
        this.startCustomBtn = document.getElementById('start-custom');
    }

    attachEventListeners() {
        this.modeToggle.addEventListener('click', () => this.toggleMode());
        this.startCustomBtn.addEventListener('click', () => this.startCustomGame());
        this.customWordInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.toUpperCase().replace(/[^A-Z]/g, '');
        });
    
        // Disable main game keyboard actions when the custom input is focused
        this.customWordInput.addEventListener('focus', () => {
            this.isCustomInputActive = true;
        });
    
        // Re-enable main game keyboard actions when the custom input loses focus
        this.customWordInput.addEventListener('blur', () => {
            this.isCustomInputActive = false;
        });
    
        // Prevent main game actions when typing in the custom input
        this.customWordInput.addEventListener('keydown', (event) => {
            event.stopPropagation(); // Prevent the event from reaching the document-level listener
        });
    
        // Dedicated keydown handler for the main game
        if (!this.keydownListenerAdded) {
            this.keydownListenerAdded = true;
            document.addEventListener('keydown', (event) => {
                if (this.isCustomInputActive) {
                    // Do nothing if custom input is active
                    return;
                }
                this.handleKeyPress(event); // Main game keyboard actions
            });
        }
    }

    toggleMode() {
        this.customMode = !this.customMode;
        if (this.customMode) {
            this.customModeDiv.classList.remove('hidden');
            this.modeToggle.textContent = 'Random Mode';
        } else {
            this.customModeDiv.classList.add('hidden');
            this.modeToggle.textContent = 'Custom Mode';
            this.startRandomGame();
        }
    }

    startRandomGame() {
        const randomIndex = Math.floor(Math.random() * WORD_LIST.length);
        this.currentWord = WORD_LIST[randomIndex];
        this.resetGame();
        this.showMessage('Guess the 5-letter word!', 'info');
    }

    startCustomGame() {
        const word = this.customWordInput.value.trim().toUpperCase();
        if (word.length < 5 || word.length > 10) {
            this.showMessage('Word must be 5-10 letters!', 'error');
            return;
        }
        if (!/^[A-Z]+$/.test(word)) {
            this.showMessage('Only letters allowed!', 'error');
            return;
        }
        this.currentWord = word;
        this.customWordInput.value = '';
        this.customModeDiv.classList.add('hidden');
        this.resetGame();
        this.showMessage(`Guess the ${word.length}-letter word!`, 'info');
    }

    resetGame() {
        this.currentAttempt = 0;
        this.currentGuess = '';
        this.gameOver = false;
        this.keyboardState = {};
        this.gameBoard.innerHTML = '';
        this.createBoard();
        this.updateKeyboard();
        this.updateAttempts();
    }

    createBoard() {
        for (let i = 0; i < this.maxAttempts; i++) {
            const row = document.createElement('div');
            row.className = 'row';
            for (let j = 0; j < this.currentWord.length; j++) {
                const tile = document.createElement('div');
                tile.className = 'tile';
                tile.id = `tile-${i}-${j}`;
                row.appendChild(tile);
            }
            this.gameBoard.appendChild(row);
        }
    }

    initKeyboard() {
        const keyboardLayout = [
            ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
            ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
            ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACK']
        ];

        keyboardLayout.forEach(row => {
            const rowDiv = document.createElement('div');
            rowDiv.className = 'keyboard-row';
            row.forEach(key => {
                const keyButton = document.createElement('button');
                keyButton.className = 'key';
                keyButton.textContent = key;
                keyButton.id = `key-${key}`;
                if (key === 'ENTER' || key === 'BACK') {
                    keyButton.classList.add('wide');
                }
                //keyButton.addEventListener('click', () => this.handleKeyClick(key));
                rowDiv.appendChild(keyButton);
            });
            this.keyboard.appendChild(rowDiv);
        });
    }

    handleKeyPress(e) {
        if (this.gameOver) return;

        const key = e.key.toUpperCase();
        if (/^[A-Z]$/.test(key)) {
            this.addLetter(key);
        } else if (key === 'ENTER') {
            this.submitGuess();
        } else if (key === 'BACKSPACE') {
            this.deleteLetter();
        }
    }

    handleKeyClick(key) {
        if (this.gameOver) return;

        if (key === 'ENTER') {
            this.submitGuess();
        } else if (key === 'BACK') {
            this.deleteLetter();
        } else {
            this.addLetter(key);
        }
    }

    addLetter(letter) {
        if (this.currentGuess.length < this.currentWord.length) {
            this.currentGuess += letter;
            this.updateCurrentRow();
        }
    }

    deleteLetter() {
        if (this.currentGuess.length > 0) {
            this.currentGuess = this.currentGuess.slice(0, -1);
            this.updateCurrentRow();
        }
    }

    updateCurrentRow() {
        for (let i = 0; i < this.currentWord.length; i++) {
            const tile = document.getElementById(`tile-${this.currentAttempt}-${i}`);
            if (i < this.currentGuess.length) {
                tile.textContent = this.currentGuess[i];
                tile.classList.add('filled');
            } else {
                tile.textContent = '';
                tile.classList.remove('filled');
            }
        }
    }

    submitGuess() {
        if (this.currentGuess.length !== this.currentWord.length) {
            this.showMessage(`Word must be ${this.currentWord.length} letters!`, 'error');
            return;
        }

        this.checkGuess();
        this.currentAttempt++;
        this.updateAttempts();

        if (this.currentGuess === this.currentWord) {
            this.gameOver = true;
            this.showMessage('🎉 Congratulations! You won!', 'success');
        } else if (this.currentAttempt >= this.maxAttempts) {
            this.gameOver = true;
            this.showMessage(`Game Over! The word was: ${this.currentWord}`, 'error');
        }

        this.currentGuess = '';
    }

    checkGuess() {
        const FLIP_ANIMATION_DELAY = 100; // milliseconds per tile
        const letterCount = {};
        const guessStatus = Array(this.currentWord.length).fill('absent');

        // Count letters in the word
        for (let i = 0; i < this.currentWord.length; i++) {
            letterCount[this.currentWord[i]] = (letterCount[this.currentWord[i]] || 0) + 1;
        }

        // First pass: mark correct letters
        for (let i = 0; i < this.currentGuess.length; i++) {
            if (this.currentGuess[i] === this.currentWord[i]) {
                guessStatus[i] = 'correct';
                letterCount[this.currentGuess[i]]--;
            }
        }

        // Second pass: mark present letters
        for (let i = 0; i < this.currentGuess.length; i++) {
            if (guessStatus[i] === 'absent' && 
                this.currentWord.includes(this.currentGuess[i]) && 
                letterCount[this.currentGuess[i]] > 0) {
                guessStatus[i] = 'present';
                letterCount[this.currentGuess[i]]--;
            }
        }

        // Update tiles and keyboard
        for (let i = 0; i < this.currentGuess.length; i++) {
            const tile = document.getElementById(`tile-${this.currentAttempt}-${i}`);
            const letter = this.currentGuess[i];
            
            setTimeout(() => {
                tile.classList.add(guessStatus[i]);
            }, i * FLIP_ANIMATION_DELAY);

            // Update keyboard state (prioritize better states: correct > present > absent)
            // This ensures once a key is marked correct, it stays correct even if the letter appears elsewhere
            const currentState = this.keyboardState[letter];
            if (!currentState || 
                (currentState === 'absent' && guessStatus[i] !== 'absent') ||
                (currentState === 'present' && guessStatus[i] === 'correct')) {
                this.keyboardState[letter] = guessStatus[i];
            }
        }

        setTimeout(() => this.updateKeyboard(), this.currentGuess.length * FLIP_ANIMATION_DELAY);
    }

    updateKeyboard() {
        // Get all key elements
        const keys = document.querySelectorAll('#keyboard .key');
        keys.forEach(key => {
            // Reset all keys to default class
            key.classList.remove('correct', 'present', 'absent');
            key.className = 'key'; // Ensure only the default class remains
        });
    
        // Apply states from keyboardState
        Object.keys(this.keyboardState).forEach(letter => {
            const key = document.getElementById(`key-${letter}`);
            if (key && this.keyboardState[letter]) {
                key.classList.add(this.keyboardState[letter]); // Add state if it exists
            }
        });
    }

    updateAttempts() {
        this.attempts.textContent = this.currentAttempt;
    }

    showMessage(text, type) {
        const ERROR_MESSAGE_DURATION = 5000; // milliseconds
        this.message.textContent = text;
        this.message.className = `message ${type}`;
        if (type === 'error') {
            setTimeout(() => {
                this.message.textContent = '';
                this.message.className = 'message';
            }, ERROR_MESSAGE_DURATION);
        }
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new WordleGame();
});
