let points = 0;
const pointsDisplay = document.getElementById('points');
const launchBtn = document.getElementById('launch-rocket');

launchBtn.addEventListener('click', () => {
    points += 10;
    pointsDisplay.textContent = points;
});