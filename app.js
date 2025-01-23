

const liPages = document.querySelector('pages')

const heroSection = document.querySelector('.introsection')

function blurry() {
    if(heroSection.classList.contains('blurry')){
        heroSection.classList.remove('blurry')
    }
    else{
        heroSection.classList.add('blurry')
    }
}

blurry()

liPages.addEventListener("mouseover",blurry)




