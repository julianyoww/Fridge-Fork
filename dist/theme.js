(() => {
  const key = 'fridge-fork-appearance';
  const modes = ['system', 'light', 'dark'];
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  let preference = 'system';
  try {
    const saved = localStorage.getItem(key);
    if (modes.includes(saved)) preference = saved;
  } catch {}
  function apply() {
    const resolved = preference === 'system' ? (system.matches ? 'dark' : 'light') : preference;
    document.documentElement.dataset.theme = resolved;
    document.documentElement.style.colorScheme = resolved;
  }
  apply();
  system.addEventListener('change', apply);
  document.addEventListener('DOMContentLoaded', () => {
    const select = document.querySelector('#theme-select');
    select.value = preference;
    select.addEventListener('change', () => {
      preference = modes.includes(select.value) ? select.value : 'system';
      try { localStorage.setItem(key, preference); } catch {}
      apply();
    });
  });
})();
