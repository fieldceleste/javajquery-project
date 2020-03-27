$(document).ready(function () {
    $("#questionsform").submit(function () {
        var nameInput = $("input#name").val();
        var company = parseInt($('input[name = "company"]:checked').val());
        var language = parseInt($('input[name = "language"]:checked').val());
        var school = parseInt($("#school").val());
        var color = parseInt($("#color").val());
        var experience = parseInt($("#experience").val());
        


        var result = company + language + school + color + experience;

        $(".name").text(nameInput);
        if (result <= 4) {
            $("#answer").text("Ruby, so you can build web applicaions, desktop games, and mobile apps!");
        } else if (result <= 11) {
            $("#answer").text("Python, so you can do data analysis, software application, and build beautiful websites!");
        } else if (result <= 16) {
            $("#answer").text("Javascript, so you can learn how to make mobile apps for Android!");
        }
        event.preventDefault();
    });
});