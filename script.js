// NAVIGATION TOP PART
let ul = document.querySelector("ul");
let bg = document.querySelector("nav #bg");
bg.onclick = function(){
	ul.style = 'display: none';
	bg.style = 'display: none';
}
let button = document.querySelector("#navB").onclick = function(){
	ul.style = 'display: flex';
	bg.style = 'display: flex';
}
// BOTTOM FORM PART
let tik = document.querySelector(".tik div svg");
let host = 0;
let tikB = document.querySelector(".tik div").onclick = function(){
	if (host == 0){
		host = 1
		tik.style ='display: block'
	}
	else {
		host = 0
		tik.style ='display: none'
	}
}
let bg2 = document.querySelector('.bg');
let ok = document.querySelector('.wrapper button').onclick = function(){
	bg2.style ='display: none'
}
let bg3 = document.querySelector('.bg2');
let ok2 = document.querySelector('.wrapper2 button').onclick = function(){
	bg3.style = 'display: none'
}
let sfx1 = document.querySelector('#sfx1');
let sfx2 = document.querySelector('#sfx2');
let inp1 = document.getElementById('inp1');
let inp2 = document.getElementById('inp2');
let inp3 = document.getElementById('inp3');
let inp4 = document.getElementById('inp4');
let send = document.getElementById('send').onclick = function pauseAudio(){
	if (inp1.value == "" || inp2.value == "" || inp3.value == "" || inp4.value == "" || host == 0){
		bg2.style ='display: flex'
		sfx2.play()
	}
	else {
		bg3.style ='display: flex'
		inp1.value = ""
		inp2.value = ""
		inp3.value = ""
		inp4.value = ""
		host = 0
		tik.style ='display: none'
		sfx1.play()
	}
}
//GSAP AND SCROOL-TRIGGER ANIMATION
gsap.to('ul li',{
	y: 0,
	duration: 1,
	opacity: 1,
	stagger: 0.5,
})
gsap.to('nav',{
	background: 'hsla(235, 0%, 0%, 0.2)',
	backdropFilter: "blur(2px)",
	scrollTrigger: {
		trigger: '#section1',
		scroller: 'body',
		start: 'top 0%',
		end: 'bottom 90%',
		scrub: 1,
	}
})
// CUSTOM CURSOR PART
var page1 = document.querySelector('body');
var cursor = document.querySelector('#cursor');

page1.addEventListener('mouseenter', function() {
	gsap.to('#cursor', {
		scale: 1,
		opacity: 1,
		duration: 0.3,
	})
})
page1.addEventListener('mouseleave', function() {
	gsap.to('#cursor', {
		scale: 0,
		opacity: 0,
		duration: 0.3,
	})
})
page1.addEventListener('mousemove', function(dets) {
	gsap.to('#cursor', {
		left: dets.x - 14,
		top: dets.y -4,
		duration: 0.05,
	})
})