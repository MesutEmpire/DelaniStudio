$(document).ready(function () {
  $("#design-img").click(function () {
    $("#design-info").fadeToggle("slow");
    $("#design-img").hide();
  });
  $("#development-img").click(function () {
    $("#development-info").fadeToggle("slow");
    $("#development-img").hide();
  });
  $("#product-img").click(function () {
    $("#product-info").fadeToggle("slow");
    $("#product-img").hide();
  });
  $("#design-info").click(function () {
    $("#design-img").show();
    $("#design-info").hide();
  });
  $("#development-info").click(function () {
    $("#development-img").show();
    $("#development-info").hide();
  });
  $("#product-info").click(function () {
    $("#product-img").show();
    $("#product-info").hide();
  });

});
