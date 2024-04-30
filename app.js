alert("Welcome")
let gameSeq = [];
let userSeq = [];
let max_score=0;

let btns=["yellow","red","purple","green"];

let start = false;
let level = 0;

let h2 = document.querySelector("h2");
let h3=document.querySelector("h3");

document.addEventListener("keypress", function () {
    if (start == false)
    {
        console.log("game is started");
        start = true;
        levelUp();
    }
});

function btnFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelUp()
{
    userSeq=[]; //reset user sequence
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random() * 3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(randColor);

    btnFlash(randBtn);
}

function checkAns(idx)
{
    console.log("Current level:",level);
   // let idx=level-1;

    if(userSeq[idx]===gameSeq[idx])
    {
        console.log("same value");
        if(userSeq.length==gameSeq.length)
        {
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerText= `Your Score is: ${level}`;
        if(level>max_score)
        {
            max_score=level;
        }
        h3.innerText=`Max-Score = ${max_score}`;
        document.querySelector("body").style.color="red";
        setTimeout(function(){
            document.querySelector("body").style.color="white";
        },1000)
       reSet();
    }
}

function btnPress(){
    let btn=this;
    btnFlash(btn);
    console.log("btn was pressed");

    let userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reSet()
{
    userSeq=[];
    gameSeq=[];
    start=false;
     level=0
}