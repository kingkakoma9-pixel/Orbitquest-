// Mining system starter
console.log('mining.js loaded');
// FILE: js/mining.js
let points = 0;
let miningRate = 1; // points per second
let fuel = 30; // seconds of fuel
let maxFuel = 30;
let fuelInterval;
let miningActive = true;

// DOM elements
const pointsEl = document.getElementById("points");
const rateEl = document.getElementById("rate");
const fuelEl = document.getElementById("fuel");
const fuelBarEl = document.getElementById("fuelbar");
const claimBtn = document.getElementById("claimBtn");

// Update UI function
function updateUI() {
    pointsEl.textContent = points.toFixed(0);
    rateEl.textContent = miningRate.toFixed(1) + " /s";
    fuelEl.textContent = fuel.toFixed(0) + "s";
    fuelBarEl.style.width = ((fuel / maxFuel) * 100) + "%";
}

// Mining loop
function startMining() {
    fuelInterval = setInterval(() => {
        if (fuel > 0 && miningActive) {
            points += miningRate;
            fuel -= 1;
            updateUI();
        } else if (fuel <= 0) {
            miningActive = false;
            clearInterval(fuelInterval);
            fuel = 0;
            updateUI();
        }
    }, 1000);
}

// Claim button click
claimBtn.addEventListener("click", () => {
    // Simulate ad verification first (can replace with real ads later)
    alert("Simulated Ad: Watch complete!");
    
    // Add points if mining was active
    if (!miningActive && fuel <= 0) {
        alert("Fuel is empty! Refuel in Shop.");
    } else {
        alert(`You claimed ${points.toFixed(0)} points!`);
        points = 0; // reset points after claim
        updateUI();
    }
});

// Initialize
updateUI();
startMining();
