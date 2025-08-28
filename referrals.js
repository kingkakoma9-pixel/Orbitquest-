let refPoints = 0;
const refDisplay = document.getElementById('ref-points');
const inviteBtn = document.getElementById('invite-btn');

inviteBtn.addEventListener('click', () => {
    refPoints += 30;
    refDisplay.textContent = refPoints;
    alert("You earned 30 referral points!");
});