import { Days } from "./date";
let day = new Days(); 

$(document).ready(function () {
  $("#date-form").submit(function (event) {
    event.preventDefault();
    const day1 = new Date($("input#goal").val());
    let d = day1.getDay();

    $("#solution").text(day.findDay(d));
  });
});