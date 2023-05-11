// register-service-worker.js
export default function registerServiceWorker(route) {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js', { scope: '/:id' })
        .then((reg) => {
          console.log('Service worker registered.', reg)
        })
        .catch((err) => {
          console.error('Service worker registration failed:', err)
        })
    })
  }
}
