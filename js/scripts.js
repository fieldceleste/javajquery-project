$(document).ready(function () {
    $("#questionsform").submit(function() {
        var company = parseInt($('input[name = "company"]:checked').val());
        var language = parseInt($('input[name = "language"]:checked').val());
        var school = parseInt($("#school").val());
        var color = parseInt($("#color").val());
        var experience = parseInt($("#experience").val());
        console.log(experience)
        

var result = company +  language + school + color + experience;

        if (result <= 5) {
        $("#answer").text("Ruby");
         } else if (result <= 11 ) {
        $("#answer").text("Python");
          } else if (result <= 16) {
        $("#answer").text("Javascript");
        }
event.preventDefault();
    });
});