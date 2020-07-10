$(document).ready(function () {
  $("#bars").click(function () {
    $("#nav-second").css("display", "block");
    $("#bars").css("display", "none");
    $('#close').css("display", "block");
  });
  $("#close").click(function () {
    $("#nav-second").css("display", "none");
    $("#bars").css("display", "block");
    $('#close').css("display", "none");
  });
});
