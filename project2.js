let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");

const compScorepara = document.querySelector("#comp-score");

const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomidx = Math.floor(Math.random() * 3);
    return options[randomidx];
};

const drawgame = () =>{
    
     msg.innerText = "game was draw";
     msg.style.backgroundColor =" #081b31";
}

const showwinner= (userwin , userchoice , compchoice) => {
    if(userwin){
        userScore++;
        userScorepara.innerText= compScore;
        
        msg.innerText = "you win!";
        msg.style.backgroundColor="green";
    }else {
        compScore++;
        compScorepara.innerText= userScore;
        
         msg.innerText = "you lose!";
         msg.style.backgroundColor= "red";
    }

};

const playgame = (userchoice) => {
console.log(userchoice);

//generate computer choice
const compchoice = gencompchoice();
console.log(compchoice);

if(userchoice=== compchoice){
drawgame();
}else{
    let userwin = true;
    if(userchoice === "rock") {
       userwin= compchoice ==="paper"? false: true;
    } else if(userchoice === "paper"){
         userwin= compchoice ==="scissors"? false: true;
    } else{
       userwin= compchoice=== "rock" ? false : true;
    }
    showwinner(userwin, userchoice, compchoice);
}
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() =>{
        const userchoice = choice.getAttribute("id");
playgame(userchoice)
    })
})