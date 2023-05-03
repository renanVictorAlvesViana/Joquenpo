 let papel = document.querySelector('#paper'); 
 let tesoura = document.querySelector('#scissors'); 
 let pedra = document.querySelector('#rock'); 
  
 let playerActions = document.querySelector('.player'); 
 let resetBtn = document.querySelector('#reset') 
  
 let vsResult = document.querySelector(".vs") 
 let resultSpan = document.querySelector('#result') 
  
 let computerScore = document.querySelector('#computer-score') 
 let playerScore = document.querySelector('#player-score') 
  
 let showPlayer = document.querySelector('#you-chose'); 
 let showComputer = document.querySelector('#computer-chose'); 
  
 let choseComputer; 
 let playerChose; 
  
 let win = 0; 
 let loss = 0; 
 let resetScore = document.querySelector('#score-button'); 
  
 window.onload = () => { 
     playerActions.classList.remove('hide'); 
     resetBtn.classList.add('hide'); 
     showComputer.innerText = "🕒" 
     showPlayer.innerText = "🕒" 
     vsResult.classList.add("hide"); 
  
     computerScore.innerText = 0; 
     playerScore.innerText = 0; 
 }; 
  
 // computer 
 function computerChose() { 
    choseComputer = Math.floor(Math.random() * (4 - 1) + 1); 
      
     if (choseComputer === 1) { 
         showComputer.innerText = "🤚" // paper 
     } if (choseComputer === 2) { 
         showComputer.innerText = "✌️" // scissors 
     } if (choseComputer === 3) { 
         showComputer.innerText = "✊" // rock 
     }; 
  
     return choseComputer; 
 }; 
  
 // player 
 function showPlayerChose() { 
  
     function paper() { 
         playerActions.classList.add('hide'); 
         resetBtn.classList.remove('hide'); 
         showPlayer.innerText = "🤚" 
         vsResult.classList.remove("hide"); 
         computerChose(); 
         playerChose = 1; 
  
         choseComputer = computerChose(); 
         result(); 
  
         return playerChose; 
     } 
  
     function scissors() { 
         playerActions.classList.add('hide'); 
         resetBtn.classList.remove('hide'); 
         showPlayer.innerText = "✌️" 
         vsResult.classList.remove("hide"); 
         computerChose(); 
         playerChose = 2; 
  
         choseComputer = computerChose(); 
         result(); 
  
         return playerChose; 
     } 
  
     function rock() {   
         playerActions.classList.add('hide'); 
         resetBtn.classList.remove('hide'); 
         showPlayer.innerText = "✊" 
         vsResult.classList.remove("hide"); 
         computerChose(); 
         playerChose = 3; 
  
         choseComputer = computerChose(); 
         result(); 
  
         return playerChose; 
     } 
  
     playerChose = rock() || scissors() || paper(); 
  
     papel.addEventListener('click', paper); 
     tesoura.addEventListener('click', scissors); 
     pedra.addEventListener('click', rock); 
  
     resetBtn.addEventListener('click', () => { 
         playerActions.classList.remove('hide'); 
         resetBtn.classList.add('hide'); 
         showComputer.innerText = "🕒" 
         showPlayer.innerText = "🕒" 
         vsResult.classList.add("hide"); 
     }) 
  
     // result 
     function result() { 
         let c = choseComputer; 
         let p = playerChose; 
  
         if (c === p) { 
             resultSpan.innerText = 'Empate' 
         } 
         if (c === 3 && p === 2 || c === 2 && p === 1 || c === 1 && p === 3) { 
             resultSpan.innerText = 'Você perdeu!' 
             computerScore.innerText = ++loss; 
              
         } 
         if (c === 2 && p === 3 || c === 1 && p === 2 || c === 3 && p === 1) { 
             resultSpan.innerText = 'Você ganhou!' 
             playerScore.innerText = ++win; 
         }; 
     }; 
  
     //reset score 
     resetScore.addEventListener("click", () => { 
         win = 0; 
         loss = 0; 
         playerScore.innerText = 0; 
         computerScore.innerText = 0; 
     }) 
  
 }; 
  
 showPlayerChose();
