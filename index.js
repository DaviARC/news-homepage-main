const menu = document.querySelector('.header-hamburguer');
const closeMenu = document.querySelector('.close-menu');
const nav = document.querySelector('.nav-header')
const sombra = document.querySelector('.sombra')

    function mudaDisplay(){
        if(nav.classList.contains('open')){
            nav.classList.remove('open');
            menu.classList.add('open');
            closeMenu.classList.remove('open');
            sombra.classList.remove('open');
        }else {
            nav.classList.add('open')
            closeMenu.classList.add('open')
            menu.classList.remove('open')
            sombra.classList.add('open');      
        }
    }

    menu.addEventListener('click', mudaDisplay);
    closeMenu.addEventListener('click', mudaDisplay);
