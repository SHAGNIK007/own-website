const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.transform = `translate(${e.clientX - 9}px, ${e.clientY - 9}px)`;
});
document.addEventListener('mousedown', () => {
  cursor.style.transform += ' scale(1.3)';
  setTimeout(() => cursor.style.transform = cursor.style.transform.replace(' scale(1.3)', ''), 140);
});
