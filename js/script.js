// animation gsap block1 
gsap.to(".green", {rotation: 360, x: 100, duration: 1});

//animation gsap block2 
gsap.from(".purple", {rotation: -360, x: -100, duration: 4});

// animation gsap block3 
gsap.fromTo(".blue", {x: 200},{},{rotation: 360, x: 200, duration: 2});


//ajout de first event click

const h3 = document.querySelector('h3')
    h3.addEventListener('click', ()=>{
    h3.style.backgroundColor="white"
    h3.style.fontSize= "25px"
    h3.innerHTML='<p>codeur3.1 FallOmar</p>'
    console.log(' l\'action sur mon h3')
})


//animation effectuer sur le text bienvenue
gsap.to('.text', {rotation: -360, x: -100, duration: 4})

//Gestion des evenements
window.document.addEventListener('blur', ()=>{
  console.log('event1- blur action') 
  })

window.document.addEventListener('keypress', ()=>{
 console.log('event 4 - double click action')
})


//interaction sur le premier block 2 events

let division = document.querySelector('div')
division.addEventListener('mousemove', ()=>{
    division.style.backgroundColor= "orange"
    division.style.textAlign = "center"
    division.style.fontSize= "35px"
    division.style.color = "white"
    division.textContent = "Salut 10000 codeurs je suis Fall Omar fullstack dev detenteur du passeport numerique"
    console.log('event5- mouse move')
})
division.addEventListener('mouseout', ()=>{
    division.style.backgroundColor="blue"
    division.textContent = "Javascript dans la poche, merci a tous"
})


//faire bouger la derniere box du bas

gsap.to(".box", { 
    rotation: 360,
    x: '100vw',
    xPercent: -100,
    // special properties
    duration: 2, // how long the animation lasts
    repeat: 3, // the number of repeats - this will play 3 times
    yoyo: true, // this will alternate back and forth on each repeat. Like a yoyo
  });

//Fin du TP javascript.








