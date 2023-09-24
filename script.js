

let dogcontainer = document.querySelector("#dog_container");
let dogsprite = document.querySelector("#dog_sprite");

let sheepcontainer1 = document.querySelector("#sheep_container1");
let sheepsprite1 = document.querySelector("#sheep_sprite1");

let sheepcontainer2 = document.querySelector("#sheep_container2");
let sheepsprite2 = document.querySelector("#sheep_sprite2");

let sheepcontainer3 = document.querySelector("#sheep_container3");
let sheepsprite3 = document.querySelector("#sheep_sprite3");

let start = document.querySelector("#start");
let startGame = document.querySelector("#startGame");

let gameOver = document.querySelector("#game_over");
let playAgain = document.querySelector("#play_again");
let playAgain2 = document.querySelector("#play_again2");
let playAgain3 = document.querySelector("#play_again3");
let duVandt = document.querySelector("#tillykke");
let manglerPoints = document.querySelector("#mangler_points");

let tid; 
let minTid;
let gametimer = document.querySelector("#timer");


function randTal(n){

    return Math.floor(Math.random()*n)+1;
}

console.log(randTal(4));

let points; 
let liv;

window.addEventListener("load", sidenVises)


function sidenVises(){

startGame.addEventListener("click", startSpil);
gameOver.classList.add("ikke-synlig");
duVandt.classList.add("ikke-synlig");
manglerPoints.classList.add("ikke-synlig");

}



function startSpil(){


    dogcontainer.classList.add("run");
    sheepcontainer1.classList.add("run");
    sheepcontainer2.classList.add("run2");
    sheepcontainer3.classList.add("run3");

    start.classList.add("ikke-synlig");
    gameOver.classList.add("ikke-synlig");
    duVandt.classList.add("ikke-synlig");
    manglerPoints.classList.add("ikke-synlig");
    document.querySelector("#liv"+1).classList = "liv";
    document.querySelector("#liv"+2).classList = "liv";
    document.querySelector("#liv"+3).classList = "liv";
    dogcontainer.addEventListener("mousedown",forsvind_dog);
    dogcontainer.addEventListener("click",mistLiv);
    dogcontainer.addEventListener("animationiteration",genstartdog);
    dogcontainer.addEventListener("animationend", genstartdog);

    
    sheepcontainer1.addEventListener("click", forsvind_sheep1);
    sheepcontainer1.addEventListener("animationiteration",genstartsheep1);
    sheepcontainer1.addEventListener("animationend", genstartsheep1);

    sheepcontainer2.addEventListener("click", forsvind_sheep2);
    sheepcontainer2.addEventListener("animationiteration",genstartsheep2);
    sheepcontainer2.addEventListener("animationend", genstartsheep2);

    sheepcontainer3.addEventListener("click", forsvind_sheep3);
    sheepcontainer3.addEventListener("animationiteration",genstartsheep3);
    sheepcontainer3.addEventListener("animationend", genstartsheep3);

    points = 0; 
    document.querySelector("#score").textContent = points;
    liv = 3;
    tid = 30; 
    gametimer.textContent = tid;
    starttid();
}




function udskrivTid(){
 tid--;
 gametimer.textContent = tid;
 starttid();
 console.log(liv);
}

function starttid(){
if (tid > 0) {
    minTimer = setTimeout(udskrivTid, 1000);
  }
else if (points < 10 && tid == 0){
    slutspil()
}

else  {
    tillykke();
  }
}

function stopspil(){
liv = 0;
gametimer.textContent = tid;
console.log("stop spil");

gameOver.classList.remove("ikke-synlig");
playAgain.addEventListener("click", startSpil);



dogcontainer.classList.remove("run");
sheepcontainer1.classList.remove("run");
sheepcontainer2.classList.remove("run2");
sheepcontainer3.classList.remove("run3");

dogcontainer.removeEventListener("mousedown",forsvind_dog);
dogcontainer.removeEventListener("click",mistLiv);
dogcontainer.removeEventListener("animationiteration",genstartdog);
dogcontainer.removeEventListener("animationend", genstartdog);


sheepcontainer1.removeEventListener("click", forsvind_sheep1);
sheepcontainer1.removeEventListener("animationiteration",genstartsheep1);
sheepcontainer1.removeEventListener("animationend", genstartsheep1);

sheepcontainer2.removeEventListener("click", forsvind_sheep2);
sheepcontainer2.removeEventListener("animationiteration",genstartsheep2);
sheepcontainer2.removeEventListener("animationend", genstartsheep2);

sheepcontainer3.removeEventListener("click", forsvind_sheep3);
sheepcontainer3.removeEventListener("animationiteration",genstartsheep3);
sheepcontainer3.removeEventListener("animationend", genstartsheep3);





dogcontainer.classList = " pos4 sletmig";
dogsprite.classList = "sprite";

sheepcontainer1.classList ="pos1";
sheepsprite1.classList = "sprite";

sheepcontainer2.classList ="pos2";
sheepsprite2.classList = "sprite";

sheepcontainer3.classList ="pos3";
sheepsprite3.classList = "sprite";

document.querySelector("#p-inner-start").textContent = "Tillykke du har fået "+ points + " points";
document.querySelector("#h1-inner-start").textContent = "Spillet er slut";


}


function forsvind_dog(){
   
    
    console.log("forsvind_dog");
    dogsprite.classList.add("forsvind_dog");
    
    dogcontainer.classList.add("frys");
    

    
}


function genstartdog(){

   
        console.log("genstartdog");
        myRand = Math.floor(Math.random()*4)+1;
        dogcontainer.classList = "";
        dogcontainer.offsetLeft;
        dogcontainer.classList = "container run pos" + myRand;
        dogsprite.classList = "sprite";
        dogcontainer.addEventListener("click",mistLiv);
   
    

}



function forsvind_sheep1(){
    console.log("forsvind_sheep1");
    sheepsprite1.classList.add("forsvind_sheep1");
    sheepcontainer1.classList.add("frys");
    sheepcontainer1.removeEventListener("click", forsvind_sheep1);
    points++;
    console.log(points);
    document.querySelector("#score").textContent = points;
}
function forsvind_sheep2(){
    console.log("forsvind_sheep2");
    sheepsprite2.classList.add("forsvind_sheep2");
    sheepcontainer2.classList.add("frys");
    sheepcontainer2.removeEventListener("click", forsvind_sheep2);
    points++;
    console.log(points);
    document.querySelector("#score").textContent = points;
}
function forsvind_sheep3(){
    console.log("forsvind_sheep3");
    sheepsprite3.classList.add("forsvind_sheep3");
    sheepcontainer3.classList.add("frys");
    sheepcontainer3.removeEventListener("click", forsvind_sheep3);
    points++;
    console.log(points);
    document.querySelector("#score").textContent = points;

}



function genstartsheep1(){

        sheepcontainer1.addEventListener("click", forsvind_sheep1);
        console.log("genstartsheep1");
        myRand = Math.floor(Math.random()*4)+1;
        sheepcontainer1.classList = "";
        sheepcontainer1.offsetLeft;
        sheepcontainer1.classList = "container run pos" + myRand;
        sheepsprite1.classList = "sprite";
}
function genstartsheep2(){

        sheepcontainer2.addEventListener("click", forsvind_sheep2);
        console.log("genstartsheep2");
        myRand = Math.floor(Math.random()*4)+1;
        sheepcontainer2.classList = "";
        sheepcontainer2.offsetLeft;
        sheepcontainer2.classList = "container run2 pos" + myRand;
        sheepsprite2.classList = "sprite";
}
function genstartsheep3(){

        sheepcontainer3.addEventListener("click", forsvind_sheep3);
        console.log("genstartsheep3");
        myRand = Math.floor(Math.random()*4)+1;
        sheepcontainer3.classList = "";
        sheepcontainer3.offsetLeft;
        sheepcontainer3.classList = "container run3 pos" + myRand;
        sheepsprite3.classList = "sprite";
}

function tillykke(){
    tid = 0;
    gametimer.textContent = tid;
    console.log("stop spil");
    
    gameOver.classList.add("ikke-synlig");
    duVandt.classList.remove("ikke-synlig");
    playAgain2.addEventListener("click", startSpil);
    document.querySelector("#p_tillykke").textContent = "Du sparkede "+ points + " får! Godt gået !";
    
    
    dogcontainer.classList.remove("run");
    sheepcontainer1.classList.remove("run");
    sheepcontainer2.classList.remove("run2");
    sheepcontainer3.classList.remove("run3");
    
    dogcontainer.removeEventListener("mousedown",forsvind_dog);
    dogcontainer.removeEventListener("click",mistLiv);
    dogcontainer.removeEventListener("animationiteration",genstartdog);
    dogcontainer.removeEventListener("animationend", genstartdog);
    
    
    sheepcontainer1.removeEventListener("click", forsvind_sheep1);
    sheepcontainer1.removeEventListener("animationiteration",genstartsheep1);
    sheepcontainer1.removeEventListener("animationend", genstartsheep1);
    
    sheepcontainer2.removeEventListener("click", forsvind_sheep2);
    sheepcontainer2.removeEventListener("animationiteration",genstartsheep2);
    sheepcontainer2.removeEventListener("animationend", genstartsheep2);
    
    sheepcontainer3.removeEventListener("click", forsvind_sheep3);
    sheepcontainer3.removeEventListener("animationiteration",genstartsheep3);
    sheepcontainer3.removeEventListener("animationend", genstartsheep3);
}

function slutspil(){
    tid = 0;
    gametimer.textContent = tid;
    console.log("stop spil 2");

    gameOver.classList.add("ikke-synlig");
    manglerPoints.classList.remove("ikke-synlig");
    playAgain3.addEventListener("click", startSpil);
    document.querySelector("#p_mangler_points").textContent = "Øv... du sparkede kun "+ points + " får. Du skal sparke minimum 10.";

    
    
    
    dogcontainer.classList.remove("run");
    sheepcontainer1.classList.remove("run");
    sheepcontainer2.classList.remove("run2");
    sheepcontainer3.classList.remove("run3");
    
    dogcontainer.removeEventListener("mousedown",forsvind_dog);
    dogcontainer.removeEventListener("click",mistLiv);
    dogcontainer.removeEventListener("animationiteration",genstartdog);
    dogcontainer.removeEventListener("animationend", genstartdog);
    
    
    sheepcontainer1.removeEventListener("click", forsvind_sheep1);
    sheepcontainer1.removeEventListener("animationiteration",genstartsheep1);
    sheepcontainer1.removeEventListener("animationend", genstartsheep1);
    
    sheepcontainer2.removeEventListener("click", forsvind_sheep2);
    sheepcontainer2.removeEventListener("animationiteration",genstartsheep2);
    sheepcontainer2.removeEventListener("animationend", genstartsheep2);
    
    sheepcontainer3.removeEventListener("click", forsvind_sheep3);
    sheepcontainer3.removeEventListener("animationiteration",genstartsheep3);
    sheepcontainer3.removeEventListener("animationend", genstartsheep3);
}
    
function manglerP() {

    if (points < "10" && tid == "0") {
        slutspil2()
    }
}

function mistLiv(){
    dogcontainer.removeEventListener("click",mistLiv);
    document.querySelector("#liv"+liv).classList.add("ikke-synlig");
    liv--;
    if (liv<=0) {
        clearTimeout(minTimer);
        stopspil()
    }

}

