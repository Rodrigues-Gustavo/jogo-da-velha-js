const html = document.querySelector('html');
const checkbox =  document.querySelector('#switch');

function toggle() {
    checkbox.addEventListener('change',() => {
        html.classList.toggle('light-mode')
    });
}

export { toggle }