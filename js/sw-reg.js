if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
    .then(()=>{
        console.log('Service Worker is Registered.');
    })
    .catch(()=>{
        console.log('Failed to Register Service Worker.')
    });
}