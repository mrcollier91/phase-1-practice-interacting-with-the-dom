let counterText = document.getElementById('counter')
let i = counterText.innerText


document.addEventListener('DOMContentLoaded', (e) => {
   setInterval(function startTimer() {
     counterText.innerText = (i)  
     i ++
   },1000);
   document.getElementById('plus').addEventListener('click' , (e) => {
       counterText.innerText = (i)
       i ++
   })
   document.getElementById('minus').addEventListener('click', (e) => {
       counterText.innerText = (i)
       i --
   })
   document.getElementById('heart').addEventListener('click', (e) => {
       //add liker function once wrote
        likerFunction()
   })
   document.getElementById('submit').addEventListener('click', (e) => {
       e.preventDefault()
       console.log('clicked')
       commentAdder()

   })
})

function commentAdder() {
    let ul = document.createElement('ul')
    let div = document.getElementById('list')
    div.append(ul)
    let li = document.createElement('li')
    ul.appendChild(li)
    li.innerText = document.getElementById('comment-input').value
}

function likerFunction() {
      let li = document.createElement('li')
      let ul = document.querySelector('.likes')
      ul.append(li)
      li.innerText = ('you liked ' + i)
      console.log('liked')
}