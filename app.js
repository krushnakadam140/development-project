let gameSeq=[];
let userseq=[];

let btns=["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if( started == false) {
        console.log("game is started");
        started=true;

        leveUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout( function () {
      btn.classList.remove("flash");
    }, 250);
}

function leveUp (){
    userseq =[];
    level++;
    h2.innerText=`Level ${level}`;
    
    let randIdx= Math.floor(Math.random()*3);
    let randColor =btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx) {
  if( gameSeq[idx] === userseq[idx] ) {
    if(userseq.length == gameSeq.length){
       setTimeout(leveUp(),1000) ;
    };
  }else{
    h2.innerHTML=`Game over!Your score was <b>${level} <b> <br> press any key to start.`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function (){
        document.querySelector("body").style.backgroundColor="white";  
    }, 200)
    reset();
  }
}

function btnpress(){
    let btn = this;
    gameFlash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");

for(btn of allbtns){
   
    btn.addEventListener("click", btnpress );
}

function reset(){
    started = false;
    gameSeq = [];
    userseq = [];
    level = 0;
}