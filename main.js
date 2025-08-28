function showPanel(panelId, button) {
  // Hide all panels
  const panels = document.querySelectorAll('.panel');
  panels.forEach(panel => panel.classList.add('hidden'));

  // Show selected panel
  document.getElementById(panelId).classList.remove('hidden');

  // Reset active state
  const buttons = document.querySelectorAll('.navbar button');
  buttons.forEach(btn => btn.classList.remove('active'));

  // Highlight clicked button
  button.classList.add('active');
}

