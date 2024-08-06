// scripts.js

function copyCode() {
    const code = document.getElementById('code').innerText;
    navigator.clipboard.writeText(code).then(() => {
        const notification = document.getElementById('copy-notification');
        notification.classList.remove('hidden');
        setTimeout(() => {
            notification.classList.add('hidden');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}
