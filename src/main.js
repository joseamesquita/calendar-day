


$(document).ready(function () {
  $("#date-form").submit(function (event) {
    event.preventDefault();
    let test = $("input#goal").val();
    $("#solution").text(test);
  });
});