document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('clickMeButton');
    const container = document.querySelector('.container');

    const moveButton = () => {
        const containerRect = container.getBoundingClientRect();
        const buttonRect = button.getBoundingClientRect();

        const newLeft = Math.random() * (containerRect.width - buttonRect.width);
        const newTop = Math.random() * (containerRect.height - buttonRect.height);

        button.style.left = `${newLeft}px`;
        button.style.top = `${newTop}px`;
    };

    button.addEventListener('mouseenter', moveButton);
    
    button.addEventListener('click', () => {
        window.location.href = 'index2.html';
    });
});
