
function changecolorblock1 () {
   let block1 = document.querySelector('div')
   block1.style.background = "pink" 
}
document.addEventListener('click', changecolorblock1)

//ajout de event click

const h3 = document.querySelector('h3')
    h3.addEventListener('click', ()=>{
    h3.style.backgroundColor="white"
    h3.style.fontSize= "25px"
    h3.innerHTML='<p>codeur3.1 FallOmar</p>'
})


let division = document.querySelector('div')
division.addEventListener('mousemove', ()=>{
    division.style.backgroundColor= "orange"
    division.style.textAlign = "center"
    division.style.fontSize= "35px"
    division.style.color = "white"
    division.textContent = "Salut 10000 codeurs je suis Fall Omar fullstack ambassadeur 10000 codeurs detenteur du passeport numerique"
})
division.addEventListener('mouseout', ()=>{
    division.style.backgroundColor="blue"
    division.textContent = "Javascript dans la poche, merci a tous "
   
})
//function pour animer le text
function annimeText () {
    return gsap.to('.text', {rotation: -360, x: -100, duration: 4})
}

//Amelioration du TP et gestion du dom

//animer block 3
function retournerBlock3 (){
    let annimerBlock3 = document.getElementById('bluebox')
    annimerBlock3.addEventListener('click', ()=>{
        gsap.from(".blue", {rotation: -360, x: -100, duration: 4})  
    })
}
retournerBlock3()

//translater le block2

let translateBlock2 = document.getElementById('purplebox')
translateBlock2.addEventListener('dblclick', function(){
 gsap.from(".purple", {rotation: -660, x: 600, duration: 7})    
})

//changer couleur de text dans le block 4

let textcolorBlock4 = document.getElementById('text-alternatif2')
textcolorBlock4.style.margin = "20px"
textcolorBlock4.style.alignContent = "center"
textcolorBlock4.style.color = "purple"
textcolorBlock4.style.fontSize = "20px"

//action formulaire

function validateForm(e) {
    
    let x = document.forms["myForm"]["email"].value;
    if (x == "") {
      alert("Le champs du formulaire sont requis");
      return false;
    }
   
  }
  


  //Gestion de l'evennement keypress 
// window.document.addEventListener('keypress', ()=>{
//  let userEnter = prompt('veuillez choisir une lettre')
//   console.log('valeur entree dans le input est :' , userEnter)
// })























