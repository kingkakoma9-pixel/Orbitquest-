document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".navbar button");
  const panels = document.querySelectorAll(".panel");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      // Hide all panels
      panels.forEach(panel => panel.classList.remove("active"));
      // Remove active from buttons
      buttons.forEach(btn => btn.classList.remove("active"));

      // Show target panel
      const target = document.getElementById(button.dataset.target);
      if (target) target.classList.add("active");

      // Highlight active button
      button.classList.add("active");
    });
  });
});
