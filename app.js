

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


buttonMenu.addEventListener('click', openMenu)
menuList.addEventListener('click', openMenu)

openMenu()



