(() => {
  const button = document.querySelector('#install-app');
  const dialog = document.querySelector('#install-dialog');
  const status = document.querySelector('#install-status');
  let pending;
  const standalone = window.matchMedia('(display-mode: standalone)');
  const update = () => { button.hidden = standalone.matches || navigator.standalone === true; };
  update(); standalone.addEventListener('change', update);
  window.addEventListener('beforeinstallprompt', event => {event.preventDefault(); pending = event;});
  window.addEventListener('appinstalled', () => {pending = null; button.hidden = true; dialog.close();});
  button.addEventListener('click', async () => {
    if (!pending) {dialog.showModal(); return;}
    const prompt = pending; pending = null;
    try { await prompt.prompt(); await prompt.userChoice; } catch { dialog.showModal(); }
  });
  document.querySelector('#close-install').addEventListener('click', () => dialog.close());
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
      try {
        await navigator.serviceWorker.register('./sw.js');
        await navigator.serviceWorker.ready;
        status.textContent = 'Recipes are ready to use offline on this device.';
      } catch { status.textContent = 'Offline setup is unavailable. You can still use the app online.'; }
    });
  } else status.textContent = 'This browser supports online use only.';
})();
