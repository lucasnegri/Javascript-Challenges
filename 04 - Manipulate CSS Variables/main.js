
const inputs = document.querySelectorAll('.controls input');

function handlerUpdate(){
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handlerUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handlerUpdate));


