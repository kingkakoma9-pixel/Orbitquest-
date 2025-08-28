function showPanel(panelId) {
  // Hide all panels
  const panels = document.querySelectorAll('.panel');
  panels.forEach(panel => panel.classList.add('hidden'));

  // Show selected one
  document.getElementById(panelId).classList.remove('hidden');
}
