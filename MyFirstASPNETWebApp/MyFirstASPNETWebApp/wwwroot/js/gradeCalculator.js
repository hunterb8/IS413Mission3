$("#buttonCalc").click(function () {
    alert("Final Grade: "($("#assignmentGrade").val() * 0.55 +
    $("#projectGrade").val() * 0.05 + 
    $("#quizGrade").val() * 0.1 +
    $("#examGrade").val() * 0.20 +
    $("#intexGrade").val() * 0.1).toFixed(2) + "%");
})