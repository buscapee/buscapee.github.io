const dynamicTextElement = document.getElementById('digitando');
const texts = ["Front-End", "JavaScript", "de Interfaces"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let speed = 200;

function type() {
    const currentText = texts[textIndex];
    if (isDeleting) {
        dynamicTextElement.textContent = currentText.slice(0, charIndex--);
    } else {
        dynamicTextElement.textContent = currentText.slice(0, ++charIndex);
    }

    if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
    }

    setTimeout(type, isDeleting ? speed / 2 : speed);
}

document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(type, 500);
});
