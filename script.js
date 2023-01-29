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
var scoreOutput = {
    name: localStorage.getItem('name'),
    correct: localStorage.getItem('correct')
}
var questions = [
    {
        text:'In web design, what does CSS stand for?',
        choices: ['Counter Strike: Source','Cascading Style Sheet','Corrective Style Sheet','Computer Style Sheet'],
        correct: 'Cascading Style Sheet',
    },
    {
        text:'What is the difference between let and var in Javascript?',
        choices: ['let is block-scoped while var is function-scoped',
        'var is block-scoped while let is function-scoped',
        'Both let and var aer block-scoped',
        'Both let and var are funtion-scoped'],
        correct: 'let is block-scoped while var is function-scoped',
    },
    {
        text:'Question What is the purpose of the switch statement in Javascript',
        choices: ['to replace if...else statements',
        'to evaluate multiple expressions with one switch statement',
        'to execute a block of code based on multiple cases',
        't perform mathematical operations'],
        correct: 'to execute a block of code based on multiple cases',
    },
    {
        text:'What is the correct syntax for a function declaration in Javascript?',
        choices: ['function: myFunction()',
        'function = myFunction()',
        'function myFunction()',
        'myFunction = function()'],
        correct: 'function myFunction()',
    },
    {
        text:'What is a programming language?',
        choices: ['A tool used to create digital music',
        'A way to communicate with computers',
        'A type of software',
        'A form of digital art'],
        correct: 'A way to communicate with computers',
    },
    {
        text:'What does HTML stand for?',
        choices: ['Hyperlinks and Text Markup Language','Hyper Text Markup Language',
        'Hyper Text and Markup Language','None of the above'],
        correct: 'Hyper Text Markup Language',
    },
    {
        text:' What is the purpose of CSS in web development?',
        choices: ['To determine the layout of a website','To create responsive design',
        'To add style and formatting to HTML documents','All of the above'],
        correct: 'To add style and formatting to HTML documents',
    },
    {
        text:'What is a variable in programming?',
        choices: ['A value that changes frequently','A container for storing data values',
        'A function','A loop'],
        correct: 'A container for storing data values',
    },
    {
        text:'What is the purpose of a loop in programming?',
        choices: ['To repeat a specific block of code a specified number of times',
        'To create variables',
        'To define functions',
        'To control the flow of a program'],
        correct: 'To repeat a specific block of code a specified number of times',
    },
    {
        text:'What is a database?',
        choices: ['A programming language','A way to communicate with computers',
        'A type of software','A collection of data stored and organized in a specific manner'],
        correct: 'A collection of data stored and organized in a specific manner',
    },
    {
        text:'What is the purpose of a version control system like Git?',
        choices: ['To create and manage databases','To manage and keep track of changes to code',
        'To design user interfaces','To define variables'],
        correct: 'To manage and keep track of changes to code',
    },
    {
        text:'What is the purpose of the SQL language?',
        choices: ['To create websites','To design user interfaces',
        'To manipulate and manage data in a databaseC','To define variables'],
        correct: 'To manipulate and manage data in a database',
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
        Q=0;
        timeLeft = 6
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
    localStorage.setItem('highscore',scoreOutput.correct);
    viewHighScores();
    localStorage.setItem('highScored', JSON.stringify(scoreOutput));
})
}

function viewHighScores(){
    clearInterval(timeInterval);
    document.querySelector('.yourScore').classList.add('hide')
    document.querySelector('.scoreView').classList.remove('hide')
    
    playBtn.addEventListener('click', function(){
        document.querySelector('.scoreView').classList.add('hide')
        document.querySelector('.start').classList.remove('hide')
        score=1  
    })
    var scoreHigh = JSON.parse(localStorage.getItem('highscore'));
    var name = localStorage.getItem('name');
    highScores.textContent = name + ' ' + scoreHigh 

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

