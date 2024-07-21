// scripts.js

function copyCode(codeId) {
    const code = document.getElementById(codeId).innerText;
    navigator.clipboard.writeText(code).then(() => {
        const notificationId = 'copy-notification' + codeId.slice(-1);
        const notification = document.getElementById(notificationId);
        notification.classList.remove('hidden');
        setTimeout(() => {
            notification.classList.add('hidden');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}
