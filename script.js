/**
 * Creator           : Coding's Time
 * Youtube Channel   : https://www.youtube.com/channel/UC6dnKqrImGWqMb9ty1n0Ziw
 * Github Profile    : https://github.com/codingstime
 */

let onSlide = false;

window.addEventListener("load", () => {
   autoSlide();

   const dots = document.querySelectorAll(".carousel_dot");
   for (let i = 0; i < dots.length; i++) {
      dots[i].addEventListener("click", () => slide(i));
   }

   const buttonPrev = document.querySelector(".carousel_button__prev");
   const buttonNext = document.querySelector(".carousel_button__next");
   buttonPrev.addEventListener("click", () => slide(getItemActiveIndex() - 1));
   buttonNext.addEventListener("click", () => slide(getItemActiveIndex() + 1));
})

function autoSlide() {
   setInterval(() => {
      slide(getItemActiveIndex() + 1);
   }, 3000); // slide speed = 3s
}

function slide(toIndex) {
   if (onSlide)
      return;
   onSlide = true;

   const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
   const itemActive = document.querySelector(".carousel_item__active");
   const itemActiveIndex = itemsArray.indexOf(itemActive);
   let newItemActive = null;

   if (toIndex > itemActiveIndex) {
      // check if toIndex exceeds the number of carousel items
      if (toIndex >= itemsArray.length) {
         toIndex = 0;
      }

      newItemActive = itemsArray[toIndex];

      // start transition
      newItemActive.classList.add("carousel_item__pos_next");
      setTimeout(() => {
         newItemActive.classList.add("carousel_item__next");
         itemActive.classList.add("carousel_item__next");
      }, 20);
   } else {
      // check if toIndex exceeds the number of carousel items
      if (toIndex < 0) {
         toIndex = itemsArray.length - 1;
      }

      newItemActive = itemsArray[toIndex];

      // start transition
      newItemActive.classList.add("carousel_item__pos_prev");
      setTimeout(() => {
         newItemActive.classList.add("carousel_item__prev");
         itemActive.classList.add("carousel_item__prev");
      }, 20);
   }

   // remove all transition class and switch active class
   newItemActive.addEventListener("transitionend", () => {
      itemActive.className = "carousel_item";
      newItemActive.className = "carousel_item carousel_item__active";
      onSlide = false;
   }, {
      once: true
   });

   slideIndicator(toIndex);
}

function getItemActiveIndex() {
   const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
   const itemActive = document.querySelector(".carousel_item__active");
   const itemActiveIndex = itemsArray.indexOf(itemActive);
   return itemActiveIndex;
}

function slideIndicator(toIndex) {
   const dots = document.querySelectorAll(".carousel_dot");
   const dotActive = document.querySelector(".carousel_dot__active");
   const newDotActive = dots[toIndex];

   dotActive.classList.remove("carousel_dot__active");
   newDotActive.classList.add("carousel_dot__active");
}


let modalSite = document.querySelector('dialog')
let btnFechar = document.querySelectorAll('dialog button')

let cont = 0;

setTimeout(() => {
    modalSite.showModal()
}, 3000);


// document.addEventListener('mouseleave', ()=>{

   // if(cont == 0){
      //  modalSite.showModal()
   // }


    
 //})

btnFechar.forEach(button => {
    button.addEventListener('click', ()=>{
        modalSite.close()
        cont = 1;
    })
})

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key.toLowerCase() === 'u') {
        event.preventDefault();
        alert('Visualização do código-fonte desativada!');
    }
});

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    alert('Clique direito desativado!');
});


btnFechar.forEach(button => {
    button.addEventListener('click', ()=>{
        modalSite.close()
        cont = 1;
    })
})

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key.toLowerCase() === 'u') {
        event.preventDefault();
        alert('Visualização do código-fonte desativada!');
    }
});

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    alert('Clique direito desativado!');
});


const elements = document.querySelectorAll(".hidden");

elements.forEach((element) => myObserve.observe(element));


document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key.toLowerCase() === 'u') {
        event.preventDefault();
        alert('Visualização do código-fonte desativada!');
    }
});

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    alert('Clique direito desativado!');
});
   

const inputName = document.getElementById('inputName');
const textComment = document.getElementById('inputText');
const form = document.getElementById('formulario');
const commentPost = document.getElementById('commentPost');

form.addEventListener('submit', (event) => {
 event.preventDefault();

 let p = document.createElement('p');
 p.classList = 'p-2 d-flex text-wrap flex-wrap';
 p.innerHTML = `<strong>${inputName.value}: </strong> ${textComment.value}`;
 commentPost.appendChild(p);
 textComment.value = '';
 inputName.focus();

});


const button = document.querySelector('#like');
const number = document.querySelector('#number');

button.addEventListener('click', () => {
  let likeValue = document.querySelector('#number').textContent;
  let newValue = Number(likeValue) + 1;
  button.classList.add('like');
  number.innerHTML = newValue;
});










