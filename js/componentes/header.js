window.addEventListener('scroll', function(){
    let barra = document.querySelector('.cabecera');
    if( window.scrollY > 10){
        barra.classList.toggle('scrolled', window.scrollY > 10);
    }
    else if(window.scrollY < 10){
        barra.classList.remove('scrolled', window.scrollY < 10);
    }
})
