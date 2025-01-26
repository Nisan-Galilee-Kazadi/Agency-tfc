

const buttonMenu = document.getElementById('menuIcon')

const menuList = document.getElementById('menuList')

function openMenu () {
    if(menuList.classList.contains('open')){
        menuList.classList.remove('open')
    }
    else{
        menuList.classList.add('open')
    }
}


buttonMenu.addEventListener('click', function(){
    openMenu();
    changeButton();
})

openMenu()


const menuOpen = document.getElementById('open-icon')

const menuClose = document.getElementById('close-icon')

const contenair = document.querySelector('.menu')


function changeButton() {
    if(menuOpen.style.display !== 'none'){
        menuOpen.style.display = 'none';
        menuClose.style.display = 'block';
    }else{
        menuOpen.style.display = 'block';
        menuClose.style.display = 'none';
    }
}


