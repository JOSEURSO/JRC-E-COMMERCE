window.addEventListener('scroll', showBackToTopButtonOnScroll)

const backToTopButton = document.querySelector('.back-to-top')
const swiperCarousel = document.querySelector('.swiper')
const menuElement = document.querySelector('.menu')
const menuButton = document.querySelector('.btn-reset')

const closeAndOpenMenu = () => {
  menuElement.classList.toggle('active')
  menuButton.classList.toggle('close-btn')
}

const closeMenu = () => {
  menuElement.classList.remove('active')
  menuButton.classList.remove('close-btn')
}

menuButton.addEventListener('click', closeAndOpenMenu)
backToTopButton.addEventListener('click', closeMenu)

document
  .querySelectorAll('#navbar .menu li')
  .forEach((el) => el.addEventListener('click', closeMenu))

function showBackToTopButtonOnScroll() {
  if (scrollY > 400) {
    backToTopButton.classList.add('show')
    backToTopButton.classList.remove('hidden')
  } else {
    backToTopButton.classList.remove('show')
    backToTopButton.classList.add('hidden')
  }
}

function createClient(clientNumber, clientName, clientTestimonial) {
  return `
    <div class="swiper-slide">
      <img
        class="swiper-slide-image"
        src="./assets/cliente-${clientNumber}.webp"
        alt="Foto do cliente ${clientName}"
      />
      <h4 class="swiper-slide-title">${clientName}</h4>
      <p class="swiper-slide-description">
        ${clientTestimonial}
      </p>
    </div>
  `
}

document.querySelector('.swiper-wrapper').innerHTML =
  createClient(
    '1',
    'Murilo Bueno',
    'Já formatei e montei meu pc várias vezes na P. A. Informática sempre fui muito bem atendido, muito bem instruído sobre meus hardwares e software, agilidade no atendimento e muita qualidade. Recomendo pois sempre foi um serviço muito bom.'
  ) +
  createClient(
    '2',
    'Bruno Henrique',
    'Sobre a assistência do Pablo eu gostei, comunicação boa, ótimo atendimento e assistência muito boa, entrega seu trabalho no prazo indico ele pra todos meus amigos e parentes, excelente profissional.'
  ) +
  createClient(
    '3',
    'Jesse Springman',
    'Então, só tenho agradecer a seu trabalho bem feito no meu notebook, melhorou 100% e um preço muito em conta.'
  ) +
  createClient(
    '4',
    'Mateus Antonio',
    'Meu notebook passou por uma limpeza, instalação SSD e de windows 10 através da P.A. Informática, foi um otimo serviço, rápido e com um bom custo benefício.'
  ) +
  createClient(
    '5',
    'Beatriz Felinto',
    'Um ótimo trabalho, com certeza o melhor, com muita dedicação e diligência, meu celular está novinho depois do banho que eu dei nele kkkkk, e foi feito um milagre, achei que não tinha mais jeito, super indico.'
  )

const swiper = new Swiper(swiperCarousel, {
  slidesPerView: 3,
  spaceBetween: 10,
  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: true
  },
  pagination: {
    el: '.swiper-pagination'
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    750: {
      slidesPerView: 2
    },
    1110: {
      slidesPerView: 3,
      spaceBetween: 35
    }
  }
})
