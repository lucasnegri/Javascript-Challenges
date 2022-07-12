
//Ao pressionar a tecla

window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return  //Se pressionar tecla não existente, retorna

    key.classList.add('playing'); 
    audio.currentTime = 0;
    audio.play();
});


//Ao soltar a tecla

window.addEventListener('keyup', function(e){
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    
    key.classList.remove('playing');

});



