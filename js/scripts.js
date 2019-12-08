$(document).ready(function () {
    $("#questionsform").submit(function () {
        var company = parseInt($('input[name = "company"]:checked').val());
        var language = parseInt($('input[name = "language"]:checked').val());
        var school = $("#school").val();
        var color = $("#color").val();
        var experience = parseInt($('input[name="experience"]').val());
        var otherText = parseInt($('input[id="otherValue"]').val());
        otherText.style.visibility = 'hidden';

        










var result = company +  language + school + color + expereince;

        if (result <= 6) {
            $("#result").text("Ruby");
        } else if (result <= 11 ) {
            $("#result").text("Python");
        } else if (result <= 16) {
            $("#result").text("Javascript");
        }
        

        event.preventDefault();
    });
});