let player,computer
let playerScore=document.querySelector('playerScore')
let computerScore=document.querySelector('computerScore')
let images =document.querySelectorAll('img')
const playRPS = choice =>{
    const choices =['rock','paper','scissors']

    if(choices.includes(choice.toLowerCase())){
        player = choice.toLowerCase()
         computer = choices[Math.floor(Math.random() * 3)];

        if (player==='rock' && computer === 'paper'){ 
             
            return `player : ${choice} ::: Computer : ${computer} => computer WINS!`

        }else if (player === 'rock'&& computer === 'scissors'){
            return `player : ${choice} ::: Computer : ${computer} => you WIN!`

        }else if(player=== 'scissors'&& computer=== 'paper'){
            return `player : ${choice} ::: Computer : ${computer} => you WIN!`

        }else if(player==='scissors'&& computer==='rock'){
            return `player : ${choice} ::: Computer : ${computer} => computer WINS!`

        }else if(player==='paper'&& computer==='rock'){
            return `player : ${choice} ::: Computer : ${computer} => computer WINS!`

        }else if(player==='paper'&& computer==='scissors'){
            return `player : ${choice} ::: Computer : ${computer} => computer WINS! `

        }else{
            return `player : ${choice} ::: Computer : ${computer} => DRAW!`
        }
    } else {
        return`${choice} is not a valid choice for the game`
    }
           
}


let body = document.querySelector('body')
let separator = document.querySelector('.separator')
// select all the buttons

let buttons = document.querySelectorAll('button')

buttons.forEach(button =>{
    button.addEventListener('click',(e)=>{  
  let h4 =document.createElement('h4')
  h4.style.color='aliceblue'
  h4.textContent = playRPS(button.textContent).split('=> ') [1]
  let table = document.createElement('table')
  let thead = document.createElement('thead')
  thead.innerHTML='<tr><th>player</th> <th>computer<th/><tr/>'
  table.appendChild(thead)
  let tbody = document.createElement('tbody')
  tbody.innerHTML = `<tr><td>${player}<td/><td>${computer}<td/\>`
  table.appendChild(tbody)
  separator.appendChild(table)
  separator.appendChild(h4)
 function count(){
    let index=0
  let index1=0
  if ( h4.textContent=== 'computer WINS!'){ 
    index++
   alert( `computer=${index}`)
  }else if (h4.textContent=== 'you WIN!'){
    index1++
   alert(`player=${index1}`)
  }
  }
  count()
  
    })
})