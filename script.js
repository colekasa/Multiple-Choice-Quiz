var startBtn = document.getElementById('start-btn');
var scoreBtn = document.getElementById('addScore');
var timerEl = document.getElementById('timer');
var answerEl = document.getElementById('determination');
var highScores = document.querySelector('.scoreLi')
var playBtn = document.querySelector('.againBtn')
var timeLeft = 6;
var timeInterval;
var score = 1;
var nameInput = document.querySelector('.name')
var questions = [
    {
        text:'In web design, what does CSS stand for?',
        choices: ['Counter Strike: Source','Cascading Style Sheet','Corrective Style Sheet','Computer Style Sheet'],
        correct: 'Cascading Style Sheet',
    },
    {
        text:'What does CPU stand for?',
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
];

var Q = 0
function askQuestion(){
    document.querySelector('.question').textContent = questions[Q].text
    var choicesUl = document.querySelector('.choices');
    choicesUl.innerHTML = '';
    questions[Q].choices.forEach(function(choice){
        var liEl = document.createElement('button');
        liEl.textContent = choice;
        liEl.setAttribute('value', choice);
        liEl.onclick = function(event){
            var selected = event.target.value;
            if(selected===questions[Q].correct){
                document.querySelector('.determination').textContent = 'Correct!';
                localStorage.setItem("correct",score++*12);
                localStorage.getItem("correct");
            }
            else{
                document.querySelector('.determination').textContent = 'Incorrect!';
                localStorage.setItem("incorrect",score);
                localStorage.getItem("incorrect");
            }
            Q++;
            if(Q===questions.length){
                endGame();
                viewYourScore();
                clearInterval(timeInterval);
            }
            else{
                askQuestion();
            }
        }
        choicesUl.appendChild(liEl);
    })
    
}
function endGame(){ 
        document.querySelector('.quiz').classList.add('hide');
}

function viewYourScore(){
   document.querySelector('.yourScore').classList.remove('hide');
   var myScore = localStorage.getItem("correct")
   var showScore = document.getElementById('score')
   showScore.textContent = 'Your Score = ' + myScore
   
   scoreBtn.addEventListener('click', function () {
    nameInput.value;
    if (nameInput.value === ''){
        alert('Please enter a name so we can add your score to the Highscores!');
        return;
    }
    localStorage.setItem('name', nameInput.value)
    viewHighScores();
    })
}

function viewHighScores(){
    clearInterval(timeInterval);
    document.querySelector('.yourScore').classList.add('hide')
    document.querySelector('.scoreView').classList.remove('hide')

    playBtn.addEventListener('click', function(){
        document.querySelector('.scoreView').classList.add('hide')
        document.querySelector('.start').classList.remove('hide')
    })

}

function clockTick(){
    timeLeft--;
    timerEl.textContent = timeLeft;
    if(timeLeft<=0){
        timeLeft = 0;
        timerEl.textContent = timeLeft;
        endGame();
        viewYourScore();
    }
    
}
startBtn.addEventListener('click', function(){
    document.querySelector('.start').classList.add('hide');
    document.querySelector('.quiz').classList.remove('hide');
    timeInterval = setInterval(clockTick, 1000);
    askQuestion();
})


