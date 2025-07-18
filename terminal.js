const terminalInput = document.getElementById('terminal-input');
const terminalOutput = document.getElementById('terminal-output');

terminalInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const cmd = terminalInput.value.trim();
    if (cmd === '') return;
    // Show typed command
    terminalOutput.innerHTML += `<div><span class="prompt">$</span> ${cmd}</div>`;
    if (cmd.toLowerCase() === 'whoami') {
      terminalOutput.innerHTML += `<div style="color:#54ff87;">shagnik sarkar</div>`;
    } else if (cmd.toLowerCase() === 'clear') {
      terminalOutput.innerHTML = '';
    } else {
      terminalOutput.innerHTML += `<div>Command not found: <span style="color:#ff7171;">${cmd}</span></div>`;
    }
    terminalInput.value = '';
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }
});
