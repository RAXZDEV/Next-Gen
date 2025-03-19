  // Mouse scroll gsap animation
gsap.to('.mouse', {
  opacity: 0,
  scrollTrigger: {
    scroller: 'body',
    trigger: '.mouse',
    start: 'top 85%',
    end: 'top 100%',
    scrub: '1'
  }
})

  // Side navigation functionality
let body = document.querySelector('body')
let menu = document.querySelector('#menu')
let nav = document.querySelector('#horizontal')
let close = document.querySelector('#close')
let bg = document.querySelector('#bg')

menu.onclick = function(){
  nav.style = 'right: 0';
  gsap.from('nav ul #horizontal li',{
    x: 40,
    stagger: 0.1,
    opacity: 0,
  })
  bg.style ='opacity: 0.5; pointer-events: visible'
  body.classList.add('disableScroll')
}
close.onclick = function() {
  nav.style = 'right: -100%'
  bg.style ='opacity: 0; pointer-events: none'
  body.classList.remove('disableScroll')
}
bg.onclick = function() {
  nav.style = 'right: -100%'
  bg.style = 'opacity: 0; pointer-events: none'
  body.classList.remove('disableScroll')
}

  // Top nav appear and disappear in scrolling bases
  
let navTop = document.querySelector('nav');
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    navTop.classList.add('hidden');
  } else {
    // Scrolling up
    navTop.classList.remove('hidden');
  }

  lastScrollTop = scrollTop;
});

gsap.to('nav', {
  background: 'hsla(235, 0%, 0%, 0.5)',
  paddingTop: '0.5vw',
  paddingBottom: '0.5vw',
  scrollTrigger: {
    scroller: 'body',
    trigger: 'nav',
    start: 'bottom 5%',
    markers: false,
    scrub: 0,
  }
})

  // Form validation functionality

let checkBox = document.querySelector('#check')
let check = document.querySelector('#check svg')
let host = false

checkBox.onclick = function(){
  if (host == false) {
    host = true
    check.style = 'display: block'
  }
  else {
    host = false
    check.style = 'display: none'
  }
}


const submit = document.querySelector('#submit')
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const message = document.querySelector('textarea')

submit.onclick = function(){
    // Name validation
  if (name.value == '') {
    name.classList.add('wrong')
    name.addEventListener('keydown', function(){
      if (name.value.length > 0) {
        name.classList.remove('wrong')
      }
      else {
        email.classList.add('wrong')
      }
    })
  }else{
    name.classList.remove('wrong')
  }
  
    // Email validation
  let mailInclude = email.value.includes('@')
  
  if (email.value == '' || mailInclude == false) {
    email.classList.add('wrong')
    email.addEventListener('keydown', function() {
      if (email.value.length > 0 && email.value.includes('@')) {
        email.classList.remove('wrong')
      }
      else{
        email.classList.add('wrong')
      }
    })
  } else {
    email.classList.remove('wrong')
  }
  
    // Message validation
  if (message.value == '') {
    message.classList.add('wrong')
    message.addEventListener('keydown', function() {
      if (message.value.length > 0) {
        message.classList.remove('wrong')
      }
      else {
        email.classList.add('wrong')
      }
    })
  } else {
    message.classList.remove('wrong')
  }
  
    // CheckBox validation
  if (host == false) {
    checkBox.classList.add('wrongCheck')
  }
  else{
    checkBox.classList.remove('wrongCheck')
  }
}
