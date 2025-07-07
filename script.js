// script.js

function applyTheme(theme) {
  const root = document.documentElement;
  if (theme === 'light') {
    root.style.setProperty('--bg-color', '#f9f9f9');
    root.style.setProperty('--text-color', '#000');
    root.style.setProperty('--btn-bg', '#eee');
    root.style.setProperty('--btn-text', '#000');
    root.style.setProperty('--btn-hover-bg', '#000');
    root.style.setProperty('--btn-hover-text', '#fff');
  } else {
    root.style.setProperty('--bg-color', '#111');
    root.style.setProperty('--text-color', '#fff');
    root.style.setProperty('--btn-bg', '#222');
    root.style.setProperty('--btn-text', '#fff');
    root.style.setProperty('--btn-hover-bg', '#fff');
    root.style.setProperty('--btn-hover-text', '#000');
  }
}

function toggleTheme() {
  const current = localStorage.getItem('theme') || 'dark';
  const newTheme = current === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', newTheme);
  applyTheme(newTheme);
}

const savedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(savedTheme);
