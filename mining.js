let points = 0;
let miningRate = 1;
let fuel = 30;
let maxFuel = 30;
let fuelInterval;
let miningActive = true;

const pointsEl = document.getElementById("points");
const rateEl = document.getElementById("rate");
const fuelEl = document.getElementById("fuel");
const fuelBarEl = document.getElementById("fuelbar");
const claimBtn = document.getElementById("claimBtn");

function updateUI() {
    pointsEl.textContent = points.toFixed(0);
    rateEl.textContent = miningRate.toFixed(1) + " /s";
    fuelEl.textContent = fuel.toFixed(0) + "s";
    fuelBarEl.style.width = ((fuel / maxFuel) * 100) + "%";
}

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

claimBtn.addEventListener("click", () => {
    alert("Simulated Ad: Watch complete!");
    if (!miningActive && fuel <= 0) {
        alert("Fuel is empty! Refuel in Shop.");
    } else {
        alert(`You claimed ${points.toFixed(0)} points!`);
        points = 0;
        updateUI();
    }
});

updateUI();
startMining();
