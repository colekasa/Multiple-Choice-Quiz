var startBtn = document.getElementById('start-btn')
var scoreBtn = document.getElementById('highScore')
var timerEl = document.getElementById('timer')
var answerEl = document.getElementById('determination')
var timeLeft = 6;
var timeInterval;
var questions = [
    {
        text:'Question 1',
        choices: ['A','B','C','D'],
        correct: 'A',
    },
    {
        text:'Question 2',
        choices: ['A','B','C','D'],
        correct: 'A',
    },
    {
        text:'Question 3',
        choices: ['A','B','C','D'],
        correct: 'A',
    },
    {
        text:'Question 4',
        choices: ['A','B','C','D'],
        correct: 'A',
    },
    {
        text:'Question 5',
        choices: ['A','B','C','D'],
        correct: 'A',
    },
    {
        text:'Question 6',
        choices: ['A','B','C','D'],
        correct: 'A',
    },
    {
        text:'Question 7',
        choices: ['A','B','C','D'],
        correct: 'A',
    },
    {
        text:'Question 8',
        choices: ['A','B','C','D'],
        correct: 'A',
    },
    {
        text:'Question 9',
        choices: ['A','B','C','D'],
        correct: 'A',
    },
    {
        text:'Question 10',
        choices: ['A','B','C','D'],
        correct: 'A',
    },
    {
        text:'Question 11',
        choices: ['A','B','C','D'],
        correct: 'A',
    },
    {
        text:'Question 12',
        choices: ['A','B','C','D'],
        correct: 'A',
    },
]

var Q = 0
function askQuestion(){
    document.querySelector('.question').textContent = questions[Q].text
    var choicesUl = document.querySelector('.choices')
    choicesUl.innerHTML = ''
    questions[Q].choices.forEach(function(choice){
        console.log(choice)
        var liEl = document.createElement('button')
        liEl.textContent = choice
        liEl.setAttribute('value', choice)
        liEl.onclick = function(event){
            var selected = event.target.value
            if(selected===questions[Q].correct){
                document.querySelector('.determination').textContent = 'Correct!'
                localStorage.setItem("correct",12)
                localStorage.getItem("correct")
            }
            else{
                document.querySelector('.determination').textContent = 'Incorrect!'
                localStorage.setItem("incorrect",0)
                localStorage.getItem("incorrect")
            }
            Q++;
            if(Q===questions.length){
                endGame()
            }
            else{
                askQuestion()
            }
        }
        choicesUl.appendChild(liEl)
    })
    
}
function endGame(){ 
        document.querySelector('.quiz').classList.add('hide')
}

function viewYourScore(){
   document.querySelector('.yourScore').classList.remove('hide')
}
function clockTick(){
    timeLeft--;
    timerEl.textContent = timeLeft
    if(timeLeft<=0){
        timeLeft = 0
        timerEl.textContent = timeLeft
        endGame();
        viewYourScore();
    }
    
}
startBtn.addEventListener('click', function(){
    document.querySelector('.start').classList.add('hide')
    document.querySelector('.quiz').classList.remove('hide')
    timeInterval = setInterval(clockTick, 1000)
    askQuestion();
})


