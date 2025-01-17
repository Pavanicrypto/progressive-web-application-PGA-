if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered', registration);
            })
            .catch(error => {
                console.error('Service Worker registration failed', error);
            });
    });
}

// Push Notification Example (register user)
function subscribeUser() {
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            console.log('Notification permission granted.');
            // Here you would subscribe the user to push notifications
        } else {
            console.log('Notification permission denied.');
        }
    });
}
subscribeUser();