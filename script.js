
const fortunes = [
    "True wisdom comes not from knowledge, but from understanding.",
    "Every moment is a new beginning.",
    "Courage is grace under pressure.",
    "The best way out is always through.",
    "What you do today shapes tomorrow.",
    "Little by little, one travels far.",
    "Dream big. Start small. Act now.",
    "Fortune favors the bold.",
    "Believe in yourself and all that you are.",
    "You create your own luck."
];

const box = document.getElementById("fortune-box");
box.textContent = fortunes[Math.floor(Math.random() * fortunes.length)];

// Define colors for each button
const textColors = ["#4a2700", "#003366", "#006400", "#8B4513", "#800080"];
const bgColors = ["#ffefc3", "#e0f7ff", "#e6f7e9", "#f5e6d3", "#f0e6f5"];
const borderColors = ["#ffb703", "#0077b6", "#228B22", "#D2691E", "#9370DB"];
const fontColors = ["#333333", "#0066cc", "#8B0000", "#2E8B57", "#4B0082"];

// Define fonts for the font button
const fonts = [
    { family: "Georgia, serif", size: "1.1rem" },
    { family: "Arial, sans-serif", size: "1.3rem" },
    { family: "'Courier New', monospace", size: "1.5rem" },
    { family: "'Trebuchet MS', sans-serif", size: "1.2rem" },
    { family: "Palatino, serif", size: "1.4rem" }
];

// Initialize buttons with colors
const colorBtn = document.getElementById("color-btn");
const bgBtn = document.getElementById("bg-btn");
const borderBtn = document.getElementById("border-btn");
const fontBtn = document.getElementById("font-btn");

// Set initial button colors
colorBtn.style.backgroundColor = textColors[0];
bgBtn.style.backgroundColor = bgColors[0];
borderBtn.style.backgroundColor = borderColors[0];
fontBtn.style.backgroundColor = fontColors[0];

// Button functionality
colorBtn.addEventListener("click", () => {
    const selectedColor = textColors[Math.floor(Math.random() * textColors.length)];
    box.style.color = selectedColor;
    colorBtn.style.backgroundColor = selectedColor;
});

bgBtn.addEventListener("click", () => {
    const selectedColor = bgColors[Math.floor(Math.random() * bgColors.length)];
    box.style.backgroundColor = selectedColor;
    bgBtn.style.backgroundColor = selectedColor;
});

borderBtn.addEventListener("click", () => {
    const selectedColor = borderColors[Math.floor(Math.random() * borderColors.length)];
    box.style.borderColor = selectedColor;
    borderBtn.style.backgroundColor = selectedColor;
});

fontBtn.addEventListener("click", () => {
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    box.style.fontFamily = randomFont.family;
    box.style.fontSize = randomFont.size;
    fontBtn.style.backgroundColor = fontColors[Math.floor(Math.random() * fontColors.length)];
});


//------------ Stopwatch ------------------\\\

let time = 0;
let interval = null;
let isRunning = false;

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

function updateDisplay() {
    timerDisplay.textContent = time;
}

startBtn.addEventListener("click", () => {
    if (isRunning) return;
    
    isRunning = true;
    interval = setInterval(() => {
        time += 3;
        if (time >= 30) {
            time = 30;
            clearInterval(interval);
            isRunning = false;
        }
        updateDisplay();
    }, 3000);
});

stopBtn.addEventListener("click", () => {
    if (isRunning) {
        clearInterval(interval);
        isRunning = false;
    }
});

resetBtn.addEventListener("click", () => {
    clearInterval(interval);
    isRunning = false;
    time = 0;
    updateDisplay();
});


