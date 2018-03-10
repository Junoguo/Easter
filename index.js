var rabbitegg = document.getElementById("rabbitegg_1_")
var fact1 = document.getElementById("fact1")
var fact2 = document.getElementById("fact2")
var fact3 = document.getElementById("fact3")
var fact4 = document.getElementById("fact4")
var egg2div = document.getElementById("egg2")
var egg3div = document.getElementById("egg3")
var egg4div = document.getElementById("egg4")
var egg1div = document.getElementById("egg1")
var fact5 = document.getElementById("fact5")
var bubble = document.getElementById("bubble")
var pinkR = document.getElementById("Bigrabbit")
var mario =document.getElementById("mario")

rabbitegg.onclick = function () {
    fact1.style.display = "inline";
    fact1.classList.add("fact1style");
    fact2.style.display = "none";
    fact4.style.display = "none"
    fact3.style.display = "none"
    fact5.style.display = "none"
    mario.play(); 
    
}

egg2div.onclick = function (){
    fact2.style.display = "inline";
    fact2.classList.add("fact1style")
    fact1.style.display = "none"
    fact4.style.display = "none"
    fact3.style.display = "none"
    fact5.style.display = "none"
    mario.play(); 

}

egg3div.onclick = function(){
    fact3.style.display = "inline"
    fact3.classList.add("fact1style")
    fact1.style.display = "none"
    fact2.style.display = "none"
    fact4.style.display = "none"
    fact5.style.display = "none"
    mario.play(); 
}

egg4div.onclick = function(){
    fact4.style.display = "inline"
    fact4.classList.add("fact1style")
    fact1.style.display = "none"
    fact2.style.display = "none"
    fact3.style.display = "none"
    fact5.style.display = "none"
    mario.play(); 
}
egg1div.onclick = function (){
    fact5.style.display = "inline"
    fact5.classList.add("fact1style")
    fact1.style.display = "none"
    fact2.style.display = "none"
    fact3.style.display = "none"
    fact4.style.display = "none" 
    mario.play(); 
}

pinkR.onmouseover = function(){
    bubble.play();  
}
