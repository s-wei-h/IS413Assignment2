$("#submitButton").click( function () {
    var assignmentPoints = parseFloat($('assignmentNum').value);
    var projectPoints = parseFloat($('projectNum').value);
    var quizPoints = parseFloat($('quizNum').value);
    var examPoints = parseFloat($('examNum').value);
    var intexPoints = parseFloat($('intexNum').value);
    var total = (assignmentPoints * 0.5) +
        (projectPoints * 0.1) +
        (quizPoints * 0.1) +
        (examPoints * 0.2) +
        (intexPoints * 0.1);
    var letterGrade;

    if (total >= 90) {
        letterGrade = 'A';
    }
    else if (total >= 80) {
        letterGrade = 'B'
    }
    else if (total >= 70) {
        letterGrade = 'C'
    }
    else if (total >= 60) {
        letterGrade = 'D'
    }
    else {
        letterGrade = 'F'
    }

    alert("Your total grade is: " + total.toString() + ". You recieved an " + letterGrade + " in this class");
});