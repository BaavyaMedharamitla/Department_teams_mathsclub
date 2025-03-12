// Arrays for all puzzles
const sequences = [
    { numbers: [2, 4, 8, 16], next: 32, explanation: "Each number is multiplied by 2" },
    { numbers: [3, 6, 9, 12], next: 15, explanation: "Add 3 to each number" },
    { numbers: [1, 1, 2, 3, 5], next: 8, explanation: "Fibonacci sequence - each number is the sum of previous two" },
    { numbers: [1, 4, 9, 16], next: 25, explanation: "Square numbers - 1², 2², 3², 4², next is 5²" },
    { numbers: [2, 6, 12, 20], next: 30, explanation: "Add 4, then 6, then 8, then 10" },
    { numbers: [3, 7, 15, 31], next: 63, explanation: "Multiply by 2 and add 1" }
];

const riddles = [
    {
        question: "I am an even number. Take away one letter and I become odd. What number am I?",
        answer: "seven",
        explanation: "When you remove the letter 'S' from 'SEVEN', you get 'EVEN'"
    },
    {
        question: "What three numbers, when added and multiplied, give the same result?",
        answer: "1,2,3",
        explanation: "1 + 2 + 3 = 6, and 1 × 2 × 3 = 6"
    },
    {
        question: "What number can you add to itself to get half of itself?",
        answer: "0",
        explanation: "0 + 0 = 0, which is half of 0"
    },
    {
        question: "What is the only number spelled with letters in alphabetical order?",
        answer: "forty",
        explanation: "FORTY is the only number where letters appear in alphabetical order"
    }
];

const patterns = [
    {
        sequence: "1, 3, 6, 10, 15",
        next: 21,
        hint: "Think about triangular numbers!",
        explanation: "Each number is the sum of consecutive integers: 1=1, 1+2=3, 1+2+3=6, etc."
    },
    {
        sequence: "2, 4, 8, 16, 32",
        next: 64,
        hint: "Look at how numbers multiply!",
        explanation: "Each number is doubled: 2×2=4, 4×2=8, 8×2=16, etc."
    },
    {
        sequence: "1, 4, 9, 16, 25",
        next: 36,
        hint: "Think about square numbers!",
        explanation: "These are square numbers: 1²=1, 2²=4, 3²=9, 4²=16, etc."
    }
];

const cryptoPuzzles = [
    {
        rules: `<p>If: MATH = 40</p>
                <p>And: PUZZLE = 80</p>
                <p>Then: BRAIN = ?</p>`,
        answer: 50,
        hint: "Each letter's position in the alphabet contributes to the sum!",
        explanation: "B(2) + R(18) + A(1) + I(9) + N(14) = 50"
    },
    {
        rules: `<p>If: CODE = 27</p>
                <p>And: MATH = 42</p>
                <p>Then: GAME = ?</p>`,
        answer: 28,
        hint: "Add up the position of each letter in the alphabet!",
        explanation: "G(7) + A(1) + M(13) + E(5) = 28"
    },
    {
        rules: `<p>If: SUM = 55</p>
                <p>And: ADD = 13</p>
                <p>Then: PLUS = ?</p>`,
        answer: 72,
        hint: "Letters have values based on their position!",
        explanation: "P(16) + L(12) + U(21) + S(19) = 72"
    }
];

const visualPuzzles = [
    {
        shapes: `<span>🔴 = 5</span><span>🟦 = 4</span><span>🟡 = 3</span>`,
        equation: "🔴 + 🟦 - 🟡 = ?",
        answer: 6,
        explanation: "🔴(5) + 🟦(4) - 🟡(3) = 6"
    },
    {
        shapes: `<span>🔷 = 8</span><span>⭐ = 6</span><span>⚪ = 2</span>`,
        equation: "🔷 - ⭐ + ⚪ = ?",
        answer: 4,
        explanation: "🔷(8) - ⭐(6) + ⚪(2) = 4"
    },
    {
        shapes: `<span>🟪 = 9</span><span>🟨 = 3</span><span>⭕ = 1</span>`,
        equation: "🟪 ÷ 🟨 + ⭕ = ?",
        answer: 4,
        explanation: "🟪(9) ÷ 🟨(3) + ⭕(1) = 4"
    }
];

// Sequence puzzle
function checkSequence() {
    const answer = document.getElementById('sequenceAnswer').value;
    if (answer == window.currentSequence.next) {
        showSuccess('Correct! ' + window.currentSequence.explanation);
    } else {
        showError('Try again!');
    }
}

function showSequenceAnswer() {
    const explanation = document.getElementById('sequenceExplanation');
    explanation.style.display = 'block';
    explanation.innerHTML = `Answer: ${window.currentSequence.next}<br>Explanation: ${window.currentSequence.explanation}`;
}

function newSequence() {
    // Clear previous answer and explanation
    document.getElementById('sequenceAnswer').value = '';
    document.getElementById('sequenceExplanation').style.display = 'none';
    
    // Select random sequence
    const randomIndex = Math.floor(Math.random() * sequences.length);
    const sequence = sequences[randomIndex];
    
    // Update display
    document.getElementById('sequenceDisplay').textContent = sequence.numbers.join(', ') + ', ';
    
    // Store current sequence for checking
    window.currentSequence = sequence;
}

// Riddle puzzle
function newRiddle() {
    // Clear previous answer and explanation
    document.getElementById('riddleAnswer').value = '';
    document.getElementById('riddleExplanation').style.display = 'none';
    
    // Select random riddle
    const randomIndex = Math.floor(Math.random() * riddles.length);
    const riddle = riddles[randomIndex];
    
    // Update display
    document.getElementById('riddleQuestion').textContent = riddle.question;
    
    // Store current riddle for checking
    window.currentRiddle = riddle;
}

function checkRiddle() {
    const answer = document.getElementById('riddleAnswer').value.toLowerCase();
    if (answer === window.currentRiddle.answer) {
        showSuccess('Correct! ' + window.currentRiddle.explanation);
    } else {
        showError('Try again! Think about the question carefully.');
    }
}

function showRiddleAnswer() {
    const explanation = document.getElementById('riddleExplanation');
    explanation.style.display = 'block';
    explanation.innerHTML = `Answer: ${window.currentRiddle.answer}<br>Explanation: ${window.currentRiddle.explanation}`;
}

// Quick Math game
let correctAnswer = 0;

function generateMathProblem() {
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 20) + 1;
    const operators = ['+', '-', 'x'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    
    switch(operator) {
        case '+': correctAnswer = num1 + num2; break;
        case '-': correctAnswer = num1 - num2; break;
        case 'x': correctAnswer = num1 * num2; break;
    }
    
    document.getElementById('mathProblem').textContent = `${num1} ${operator} ${num2} = ?`;
}

function checkMath() {
    const answer = document.getElementById('mathAnswer').value;
    if (answer == correctAnswer) {
        alert('Correct! Try another one!');
        generateMathProblem();
    } else {
        alert('Try again!');
    }
}

function showMathAnswer() {
    const explanation = document.getElementById('mathExplanation');
    explanation.style.display = 'block';
    const problem = document.getElementById('mathProblem').textContent;
    explanation.innerHTML = `Answer: ${correctAnswer}<br>Explanation: ${problem.replace('= ?', `= ${correctAnswer}`)}`;
}

// Sudoku Game
let attemptsLeft = 3;
let helpKeysLeft = 3;
let sudokuSolution = [
    [5,3,4,6,7,8,9,1,2],
    [6,7,2,1,9,5,3,4,8],
    [1,9,8,3,4,2,5,6,7],
    [8,5,9,7,6,1,4,2,3],
    [4,2,6,8,5,3,7,9,1],
    [7,1,3,9,2,4,8,5,6],
    [9,6,1,5,3,7,2,8,4],
    [2,8,7,4,1,9,6,3,5],
    [3,4,5,2,8,6,1,7,9]
];

let initialPuzzle = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]
];

function createSudokuGrid() {
    const grid = document.getElementById('sudokuGrid');
    grid.innerHTML = '';
    
    for(let i = 0; i < 9; i++) {
        for(let j = 0; j < 9; j++) {
            const cell = document.createElement('div');
            cell.className = 'sudoku-cell';
            
            if(initialPuzzle[i][j] !== 0) {
                cell.textContent = initialPuzzle[i][j];
                cell.classList.add('fixed-cell');
            } else {
                const input = document.createElement('input');
                input.type = 'number';
                input.min = 1;
                input.max = 9;
                input.addEventListener('input', function() {
                    if(this.value.length > 1) {
                        this.value = this.value.slice(0,1);
                    }
                });
                cell.appendChild(input);
            }
            grid.appendChild(cell);
        }
    }
}

function checkSudoku() {
    const cells = document.querySelectorAll('.sudoku-cell');
    let isCorrect = true;
    let incorrectCells = 0;
    let checkedCells = 0;
    
    cells.forEach((cell, index) => {
        const row = Math.floor(index / 9);
        const col = index % 9;
        const input = cell.querySelector('input');
        
        if (input) {
            const value = parseInt(input.value);
            cell.classList.remove('wrong-cell', 'correct-cell');
            
            if (!value) {
                // Empty cell - don't count as incorrect
                checkedCells++;
            } else if (value === sudokuSolution[row][col]) {
                // Correct number
                cell.classList.add('correct-cell');
                const popup = document.createElement('div');
                popup.className = 'popup-message correct';
                popup.textContent = '✓';
                cell.appendChild(popup);
                setTimeout(() => popup.remove(), 1000);
                checkedCells++;
            } else {
                // Wrong number
                cell.classList.add('wrong-cell');
                const popup = document.createElement('div');
                popup.className = 'popup-message wrong';
                popup.textContent = '✗';
                cell.appendChild(popup);
                setTimeout(() => popup.remove(), 1000);
                incorrectCells++;
                isCorrect = false;
                checkedCells++;
            }
        }
    });
    
    // Update message based on checked cells
    if (checkedCells === 0) {
        document.getElementById('sudokuMessage').innerHTML = 'Please fill in some numbers first!';
    } else if (isCorrect && checkedCells === cells.length) {
        document.getElementById('sudokuMessage').innerHTML = 'Congratulations! You solved the puzzle!';
    } else {
        const message = `Correct: ${checkedCells - incorrectCells}, Wrong: ${incorrectCells}`;
        document.getElementById('sudokuMessage').innerHTML = message;
        
        if (incorrectCells > 0) {
            attemptsLeft--;
            document.getElementById('attemptsCounter').textContent = `Attempts remaining: ${attemptsLeft}`;
            
            if (attemptsLeft <= 0) {
                setTimeout(() => {
                    alert('Game Over! Starting new game...');
                    newGame();
                }, 1000);
            }
        }
    }
    document.getElementById('sudokuMessage').style.display = 'block';
}

function useHelpKey() {
    if (helpKeysLeft <= 0) return;
    
    const cells = document.querySelectorAll('.sudoku-cell');
    let emptyCount = 0;
    let randomCell;
    
    // Find a random empty cell
    cells.forEach((cell, index) => {
        if (cell.querySelector('input') && !cell.querySelector('input').value) {
            emptyCount++;
            if (Math.random() < 1/emptyCount) {
                randomCell = cell;
            }
        }
    });
    
    if (randomCell) {
        const index = Array.from(cells).indexOf(randomCell);
        const row = Math.floor(index / 9);
        const col = index % 9;
        const correctValue = sudokuSolution[row][col];
        
        // Fill in the correct value
        const input = randomCell.querySelector('input');
        input.value = correctValue;
        input.disabled = true;
        randomCell.classList.add('highlighted');
        
        helpKeysLeft--;
        document.getElementById('helpKeyBtn').textContent = `Help Key (${helpKeysLeft})`;
        if (helpKeysLeft === 0) {
            document.getElementById('helpKeyBtn').disabled = true;
        }
    }
}

function revealSolution() {
    if (confirm('Are you sure you want to see the complete solution? This will end the current game.')) {
        const cells = document.querySelectorAll('.sudoku-cell');
        cells.forEach((cell, index) => {
            const row = Math.floor(index / 9);
            const col = index % 9;
            
            if (cell.querySelector('input')) {
                cell.innerHTML = '';
                cell.textContent = sudokuSolution[row][col];
                cell.classList.add('revealed');
            }
        });
        
        document.getElementById('sudokuMessage').innerHTML = 'Solution revealed. Start a new game to play again.';
        document.getElementById('sudokuMessage').style.display = 'block';
        document.getElementById('helpKeyBtn').disabled = true;
    }
}

function newGame() {
    attemptsLeft = 3;
    document.getElementById('attemptsCounter').textContent = `Attempts remaining: ${attemptsLeft}`;
    document.getElementById('sudokuMessage').style.display = 'none';
    helpKeysLeft = 3;
    document.getElementById('helpKeyBtn').textContent = `Help Key (${helpKeysLeft})`;
    document.getElementById('helpKeyBtn').disabled = false;
    createSudokuGrid();
}

// Pattern Detective Puzzle
function checkPattern() {
    const answer = document.getElementById('patternAnswer').value;
    if (answer == window.currentPattern.next) {
        showSuccess('Excellent! ' + window.currentPattern.explanation);
    } else {
        showError('Try again! ' + window.currentPattern.hint);
    }
}

function showPatternAnswer() {
    const explanation = document.getElementById('patternExplanation');
    explanation.style.display = 'block';
    explanation.innerHTML = `Answer: ${window.currentPattern.next}<br>Explanation: ${window.currentPattern.explanation}`;
}

function newPattern() {
    // Clear previous answer and explanation
    document.getElementById('patternAnswer').value = '';
    document.getElementById('patternExplanation').style.display = 'none';
    
    // Select random pattern
    const randomIndex = Math.floor(Math.random() * patterns.length);
    const pattern = patterns[randomIndex];
    
    // Update display
    document.getElementById('patternDisplay').textContent = pattern.sequence + ", ";
    document.getElementById('patternHint').textContent = pattern.hint;
    
    // Store current pattern for checking
    window.currentPattern = pattern;
}

// Crypto Math Puzzle
function newCrypto() {
    // Clear previous answer and explanation
    document.getElementById('cryptoAnswer').value = '';
    document.getElementById('cryptoExplanation').style.display = 'none';
    
    // Select random crypto puzzle
    const randomIndex = Math.floor(Math.random() * cryptoPuzzles.length);
    const puzzle = cryptoPuzzles[randomIndex];
    
    // Update display
    document.getElementById('cryptoRules').innerHTML = puzzle.rules;
    
    // Store current puzzle for checking
    window.currentCrypto = puzzle;
}

function checkCrypto() {
    const answer = document.getElementById('cryptoAnswer').value;
    if (answer == window.currentCrypto.answer) {
        showSuccess('Great job! You cracked the code!');
    } else {
        showError('Not quite! ' + window.currentCrypto.hint);
    }
}

function showCryptoHint() {
    const explanation = document.getElementById('cryptoExplanation');
    explanation.style.display = 'block';
    explanation.innerHTML = 'Hint: ' + window.currentCrypto.hint;
}

function showCryptoAnswer() {
    const explanation = document.getElementById('cryptoExplanation');
    explanation.style.display = 'block';
    explanation.innerHTML = `Answer: ${window.currentCrypto.answer}<br>Explanation: ${window.currentCrypto.explanation}`;
}

// Visual Logic Puzzle
function newVisualLogic() {
    // Clear previous answer and explanation
    document.getElementById('visualAnswer').value = '';
    document.getElementById('visualExplanation').style.display = 'none';
    
    // Select random visual puzzle
    const randomIndex = Math.floor(Math.random() * visualPuzzles.length);
    const puzzle = visualPuzzles[randomIndex];
    
    // Update display
    document.getElementById('shapeValues').innerHTML = puzzle.shapes;
    document.getElementById('visualEquation').textContent = puzzle.equation;
    
    // Store current puzzle for checking
    window.currentVisual = puzzle;
}

function checkVisualLogic() {
    const answer = document.getElementById('visualAnswer').value;
    if (answer == window.currentVisual.answer) {
        showSuccess('Perfect! You solved the visual equation!');
    } else {
        showError('Try again! Look at the values of each shape.');
    }
}

function showVisualAnswer() {
    const explanation = document.getElementById('visualExplanation');
    explanation.style.display = 'block';
    explanation.innerHTML = `Answer: ${window.currentVisual.answer}<br>${window.currentVisual.explanation}`;
}

function showSuccess(message) {
    alert('✨ ' + message);
}

function showError(message) {
    alert('❌ ' + message);
}

// Functions to initialize puzzles
function initSequence() {
    const sequence = sequences[0];  // Start with first sequence
    document.getElementById('sequenceDisplay').textContent = sequence.numbers.join(', ') + ', ';
}

function initRiddle() {
    const riddle = riddles[0];  // Start with first riddle
    document.getElementById('riddleQuestion').textContent = riddle.question;
}

function initPattern() {
    const pattern = patterns[0];  // Start with first pattern
    document.getElementById('patternDisplay').textContent = pattern.sequence + ", ";
    document.getElementById('patternHint').textContent = pattern.hint;
    window.currentPattern = pattern;
}

function initCrypto() {
    const puzzle = cryptoPuzzles[0];  // Start with first puzzle
    document.getElementById('cryptoRules').innerHTML = puzzle.rules;
    window.currentCrypto = puzzle;
}

function initVisualLogic() {
    const puzzle = visualPuzzles[0];  // Start with first puzzle
    document.getElementById('shapeValues').innerHTML = puzzle.shapes;
    document.getElementById('visualEquation').textContent = puzzle.equation;
    window.currentVisual = puzzle;
}

// Add to window.onload
window.onload = function() {
    generateMathProblem();
    createSudokuGrid();
    initSequence();
    initRiddle();
    initPattern();
    initCrypto();
    initVisualLogic();
}

function goBackToActivity() {
    window.location.href = '../activities.html';
}
