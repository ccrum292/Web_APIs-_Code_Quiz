var body = document.body;

var h2El = document.createElement("h2");
h2El.textContent = "JavaScript Quiz";
body.appendChild(h2El);
h2El.setAttribute("style", "padding-left: 30px")

var pEl = document.createElement("p");
pEl.textContent = "Please press start to begin a timed quiz, wherein the fastest finishing time is the objective.  Be careful, If you answer a question incorrectly, 5 seconds will be taken off the clock."
body.appendChild(pEl);
pEl.setAttribute("style", "margin-right:30px")
pEl.setAttribute("style", "margin-left: 30px")


var startButton = document.createElement("button")
startButton.textContent = "START"
startButton.setAttribute("style", "margin-left:30px");
document.body.appendChild(startButton);
startButton.addEventListener("click", begin)


var mainEl = document.querySelector("main")
mainEl.style.display = "none";
mainEl.style.position = "relative";


var timerEl = document.createElement("p");
timerEl.textContent = "";
body.appendChild(timerEl);
timerEl.style.position = "fixed";
timerEl.style.bottom = "5px"
timerEl.style.left = "42.5%"


var highScoresA = document.createElement("button")
highScoresA.textContent = "Hight Scores"
body.appendChild(highScoresA);
highScoresA.style.position = "fixed"
highScoresA.style.bottom = "20px"
highScoresA.style.right = "30px"
highScoresA.addEventListener("click", movePage)

function movePage (){
  window.location.replace("./highscore.html")
}


var clock = 50;
var clockStop;

function clockF() {
    // clock.value = "";

    intervalId = setInterval(function() {
        timerEl.textContent = "Time " + clock;
        clock--;

        if (clock === 0 || clock < 0 ){
            timerEl.textContent = "";
            clearInterval(intervalId);
            mainEl.innerHTML = ""
            addInitials();
        }
    }, 1000)
    
}

function begin(){
    mainEl.style.display = "block";
    clockF();
    startButton.style.display = "none";
    h2El.style.display = "none";
    pEl.style.display = "none";
    display();
}




var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Arrays in JavaScript can be used to store ____.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
      ],
      answer: "all of the above"
    },
    {
      title:
        "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "quotes"
    },
    {
      title:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      answer: "console.log"
    }
  ];

var questionNumber=0;
//   console.log(questions[0].choices.length)
// console.log(questions[0])
// console.log(questions.length)

var response;


function display(){
    if (questionNumber<questions.length){
    
    // mainEl.innerHTML = "";
    // response.innerHTML = "";
    var questionHeading = document.createElement("h2");
    mainEl.appendChild(questionHeading);
    questionHeading.textContent = questions[questionNumber].title


    var olEl = document.createElement("ol");
        mainEl.appendChild(olEl);

    response = document.createElement("p")
    body.appendChild(response);
    response.style.position = "fixed"
    response.style.bottom = "10px"
    response.style.left = "30px"

    for (var i = 0; i < questions[questionNumber].choices.length; i++){
        var qu = questions[questionNumber].choices[i];
        var liEl = document.createElement("li");
        olEl.appendChild(liEl);
        var button = document.createElement("button");
        liEl.appendChild(button);
        button.textContent = qu;
        button.addEventListener("click", click)
        // console.log(qu)
        // console.log(questions[questionNumber].answer)     
}


}else {
  // clearInterval(intervalId);
  // clockStop = 1
  addInitials();
  // locals.push(prompt("Your quiz has finished. Please enter your Initials below.") + clock)
  // end();
}
}

// button.addEventListener("click",)

function click(event){
  event.preventDefault();
  // console.log(this.textContent)
  // var target = event.target.
  // console.log(olEl.liEl.button.textContent)
  // console.log(button.textContent)
  // console.log(questions[questionNumber].answer)

  // console.log(toString(event.target))
  // console.log("<button>"+ questions[questionNumber].answer + "</button>")
  if(this.textContent === questions[questionNumber].answer){
      response.textContent = "";
      response.textContent = "Correct"
      questionNumber = questionNumber + 1;
      mainEl.innerHTML = "";
      display();
  }else{
      response.textContent = "";
      response.textContent = "Incorrect"
      questionNumber = questionNumber + 1;
      mainEl.innerHTML = "";
      clock = clock -5;
      display();
  };
}



// var localS = [];

// function end(){
//   mainEl.innerHTML = "";
  

//   var highScoresHeading = document.createElement("h2");
//   mainEl.appendChild(highScoresHeading);
//   highScoresHeading.textContent = "High Scores";

//   var olEl = document.createElement("ol");
//   mainEl.appendChild(olEl);

//   for (var i = 0; i < localS.length; i++){

//     var liEl = document.createElement("li");
//     olEl.appendChild(liEl);
//     liEl.textContent = localStoragestuff

//   }

// }

function getLocal(event){
  // var storedLocals = JSON.parse(localStorage.getItem("locals"));

  // if (storedLocals !== null) {
  // locals = storedLocals;
  // }

  console.log(1)
  
  // if (!highScore)highScore = [];
  // var tempObj = {intials: intials, score: score}
  // highScoresA.push(tempObj)
  // localStorage.setItem(JSON.stringify(highScore))
  event.preventDefault();
  var intials = document.getElementById("intials");
  console.log(intials)
  var highScore = JSON.parse(localStorage.getItem("highScore"))
  if (!highScore){highScore = []};
  var tempObj = {intials: intials.value, score:clock}
  console.log(tempObj)    
  highScore.push(tempObj);
      localStorage.setItem("highScore", JSON.stringify(highScore))
      window.location.replace("./highscore.html")
      console.log(intials)
}

var submitButton = document.getElementById("Submit")

function addInitials (){
  var initialsHeading = document.createElement("h2");
  mainEl.appendChild(initialsHeading);
  initialsHeading.textContent = "Your quiz has finished. Please type your Initials below and press Submit."
  var formEl = document.createElement("form")
  mainEl.appendChild(formEl);
  var inputEl = document.createElement("input")
  formEl.appendChild(inputEl);
  var button = document.createElement("button")
  mainEl.appendChild(button)
  inputEl.setAttribute("type", "text")
  inputEl.id = "intials"
  inputEl.style.marginLeft = "30px"
  button.textContent = "Submit"
  button.id = "Submit"
  button.style.marginLeft = "30px"
  button.style.marginTop = "10px"
  inputEl = inputEl.value 
  button.addEventListener("click", getLocal)
 
  console.log(inputEl)
  console.log(button)
}


// function addLocal(){
//   localStorage.setItem("locals", JSON.stringify(locals));
// }


// var highScore = localStorage.getItem("highScore");

  // if (!highScore)highScore = [];
  // var tempObj = {intials: intials, score: score}
  // highScoresA.push(tempObj)
  // localStorage.setItem(JSON.stringify(highScore))




// function correct(){
//     correctArray.push("Correct");
//     var correctOrIncorrect = document.getElementById("correctOrIncorrect"); 
//     correctOrIncorrect.textContent = "Correct"
// }

// function incorrect(){
//     incorrectArray.push("inCorrect");
//     var correctOrIncorrect = document.getElementById("correctOrIncorrect"); 
//     correctOrIncorrect.textContent = "Incorrect"
//     // modifyClock();
//     clock = clock - 1;
//     console.log(clock)
// }




// function question1 () {
//     var qPage1 = document.getElementById("questionHeading");
//     qPage1.textContent = "Commonly used data types include all of the following except... ";
    

//     var a1 = document.getElementById("1a")
//     a1.textContent = "String"
//     a1.addEventListener("click", moveI2)


//     var a2 = document.getElementById("2a")
//     a2.textContent = "Number"
//     a2.addEventListener("click", moveI2)


//     var a3 = document.getElementById("3a")
//     a3.textContent = "Boolean"
//     a3.addEventListener("click", moveI2)


//     var a4 = document.getElementById("4a")
//     a4.textContent = "Cheeseburger"
//     a4.addEventListener("click", moveC2)

// }


// function moveI2(){
//     incorrect();
//     question2();
// }

// function moveC2(){
//     correct();
//     question2();
// }


// function question2 (){
//     var qPage1 = document.getElementById("questionHeading");
//     qPage1.textContent = "The following are all Conditionals except... ";
    

//     var a1 = document.getElementById("1a")
//     a1.textContent = "If"
//     a1.addEventListener("click", moveI3)


//     var a2 = document.getElementById("2a")
//     a2.textContent = "If else"
//     a2.addEventListener("click", moveI3)


//     var a3 = document.getElementById("3a")
//     a3.textContent = "else"
//     a3.addEventListener("click", moveI3)


//     var a4 = document.getElementById("4a")
//     a4.textContent = "Double Cheeseburger"
//     a4.addEventListener("click", moveC3)

// }

// function moveI3(){
//     incorrect();
//     question3();
// }

// function moveC3(){
//     correct();
//     question3();
// }

// function question3 (){
//     var qPage1 = document.getElementById("questionHeading");
//     qPage1.textContent = "Arrays in JavaScript can be used to store... ";
    

//     var a1 = document.getElementById("1a")
//     a1.textContent = "Numbers and Strings"
//     a1.addEventListener("click", moveI4)


//     var a2 = document.getElementById("2a")
//     a2.textContent = "Other Arrays"
//     a2.addEventListener("click", moveI4)


//     var a3 = document.getElementById("3a")
//     a3.textContent = "Booleans"
//     a3.addEventListener("click", moveI4)


//     var a4 = document.getElementById("4a")
//     a4.textContent = "All of the above"
//     a4.addEventListener("click", moveC4)

// }

// function moveI4(){
//     incorrect();
//     question4();
// }

// function moveC4(){
//     correct();
//     question4();
// }

// function question4 (){
//     var qPage1 = document.getElementById("questionHeading");
//     qPage1.textContent = "String values must be enclosed within ____ when being assigned to variables.";
    

//     var a1 = document.getElementById("1a")
//     a1.textContent = "Commas"
//     a1.addEventListener("click", moveI5)


//     var a2 = document.getElementById("2a")
//     a2.textContent = "Curly Brackets"
//     a2.addEventListener("click", moveI5)


//     var a3 = document.getElementById("3a")
//     a3.textContent = "Parentheses"
//     a3.addEventListener("click", moveI5)


//     var a4 = document.getElementById("4a")
//     a4.textContent = "Quotes"
//     a4.addEventListener("click", moveC5)

// }

// function moveI5(){
//     incorrect();
//     question5();
// }

// function moveC5(){
//     correct();
//     question5();
// }
// function question5 (){
//     var qPage1 = document.getElementById("questionHeading");
//     qPage1.textContent = 'What is the correct way to display "Feed me a Cheeseburger" in an alert box, using JavaScript ';
    

//     var a1 = document.getElementById("1a")
//     a1.textContent = 'confirm("Feed me a Cheeseburger")'
//     a1.addEventListener("click", moveI4)


//     var a2 = document.getElementById("2a")
//     a2.textContent = 'alertbox("Feed me a Cheeseburger")'
//     a2.addEventListener("click", moveI4)


//     var a3 = document.getElementById("3a")
//     a3.textContent = 'prompt("Feed me a Cheeseburger")'
//     a3.addEventListener("click", moveI4)


//     var a4 = document.getElementById("4a")
//     a4.textContent = 'alert("Feed me a Cheeseburger")'
//     a4.addEventListener("click", moveC4)

// }

// function end (){

// localStorage.setItem("Score", );
// }