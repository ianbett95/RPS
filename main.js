let player,computer

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
// select all the buttons

let buttons = document.querySelectorAll('button')

buttons.forEach(button =>{
    button.addEventListener('click',(e)=>{
  

    
  let h1 =document.createElement('h1')
  h1.textContent = playRPS(button.textContent).split('=> ') [1]
  let table = document.createElement('table')
  let thead = document.createElement('thead')
  thead.innerHTML='<tr><th>player</th> <th>computer<th/><tr/>'
  table.appendChild(thead)
  let tbody = document.createElement('tbody')
  tbody.innerHTML = `<tr><td>${player}<td/><td>${computer}<td/\>`
  table.appendChild(tbody)


  body.appendChild(table)
  body.appendChild(h1)
    })
})