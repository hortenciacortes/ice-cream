const menu = document.querySelectorAll('nav .toggle');
const links = document.querySelectorAll('nav ul li a');

// abrir ou fechar o menu
for(const element of menu){
    element.addEventListener('click', function(){
        document.querySelector('nav.container').classList.toggle('show')
    })
}
// esconder o menu e ir para a seção desejada
for(const element of links){
    element.addEventListener('click', function(){
        document.querySelector('nav.container').classList.remove('show')
    })
}

// mudar o header da página quando der scroll
function changeHeaderWhenScroll(){
    const header = document.querySelector('#header')
    const navHeight = header.offsetHeight
    // console.log(window.scrollY)

    if(window.scrollY >= navHeight){
        //scroll é maior que a altura do header
        header.classList.add('scroll')
    }else{
        //menor que a altura do header
        header.classList.remove('scroll')
    }
}

// back to top button
function backToTop(){
    const backToTop = document.querySelector('.back-to-top');

    if(window.scrollY >= 560){
        backToTop.classList.add('show')
    }else{
        backToTop.classList.remove('show')
    }
}

// menu ativo conforme a seção visível na página
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection(){
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for(section of sections){
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if(checkpointStart && checkpointEnd){
            document.querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.add('active')
        }else{
            document.querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.remove('active')
        }
    }
}

// When to scroll
window.addEventListener('scroll', function(){
    changeHeaderWhenScroll()
    backToTop()
    activateMenuAtCurrentSection()
})

// testimonials carousel slider swiper
const swiper = new Swiper('.swiper-container',{
    slidesPerView: 1,
    pagination:{
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints:{
        767:{
            slidesPerView: 2,
            setWrapperSize: true
        },
        1439:{
            slidesPerView: 3,
            setWrapperSize: true
        }
    }
})

// scrollReveal: Mostrar elementos quando der scroll na página
const scrollReveal = ScrollReveal({
    duration: 700,
    reset: true,
})

scrollReveal.reveal(`
    #home .image, 
    #about .image,
    #services .text, #services .card,
    #testimonials .title, #testimonials .swiper-wrapper,
    #contact .title, #contact .contact-info
`,{interval: 10})


