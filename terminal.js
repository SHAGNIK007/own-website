const terminalInput = document.getElementById('terminal-input');
const terminalOutput = document.getElementById('terminal-output');
const terminalCard = document.getElementById('terminal-card');
const commandsSection = document.getElementById('terminal-commands');

// Animate terminal and commands on first load
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    terminalCard.classList.add('visible');
    commandsSection.classList.add('visible');
    commandsSection.classList.remove('hidden');
  }, 350); // delay for effect
  terminalInput.blur();
  setTimeout(() => terminalInput.focus(), 900);
});

terminalInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const cmd = terminalInput.value.trim().toLowerCase();
    if (!cmd) return;
    terminalOutput.innerHTML += `<div><span class="prompt">$</span> ${cmd}</div>`;
    if (cmd === 'whoami') {
      terminalOutput.innerHTML += `<div style="color:#54ff87;">Shagnik Sarkar - a CS undergrad @VIT-AP</div>`;
    } else if (cmd === 'projects') {
      terminalOutput.innerHTML += `<div>github.com/SHAGNIK007</div>`;
    } else if (cmd === 'help') {
      terminalOutput.innerHTML += `<div>look below the terminal to get to know about the commands</div>`;
    } else if (cmd === 'clear') {
      terminalOutput.innerHTML = '';
    } else {
      terminalOutput.innerHTML += `<div>Command not found: <span style="color:#ff7171;">${cmd}</span></div>`;
    }
    terminalInput.value = '';
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }
});
