function rightAnswer() {
    "use strict";
   document.getElementById("answerSpaceOne").innerHTML = "That's right! Nice job.";
}

function rightAnswerTwo() {
    "use strict";
   document.getElementById("answerSpaceTwo").innerHTML = "That's right! Nice job.";
}

function rightAnswerThree() {
    "use strict";
   document.getElementById("answerSpaceThree").innerHTML = "That's right! Nice job.";
}

function wrongAnswerOne() {
    "use strict";
    document.getElementById("answerSpaceOne").innerHTML = "Nope. Remember, cos^2(x) + sin^2(x) = 1 !";
}

function wrongAnswerTwo() {
    "use strict";
    document.getElementById("answerSpaceTwo").innerHTML = "Nope. Remember, the interior angles of a quadrilateral sum to 360!";
}

function wrongAnswerThree() {
    "use strict";
    document.getElementById("answerSpaceThree").innerHTML = "Nope. Think about midpoints! What do we know about lines BC, EF, and AD?";
}

function getQuestionOne() {
    "use strict";
    document.getElementById("questionOne").style.display = "block";
    document.getElementById("questionTwo").style.display = "none";
    document.getElementById("questionThree").style.display = "none";
}

function getQuestionTwo() {
    "use strict";
    document.getElementById("questionOne").style.display = "none";
    document.getElementById("questionTwo").style.display = "block";
    document.getElementById("questionThree").style.display = "none";
}

function getQuestionThree() {
    "use strict";
    document.getElementById("questionOne").style.display = "none";
    document.getElementById("questionTwo").style.display = "none";
    document.getElementById("questionThree").style.display = "block";
}