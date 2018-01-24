/**********************************************

DART 450, Winter 2018
Exercise 02 (Jan 16)
Laura Hernandez

js for the second exercise of the semester.

**********************************************/

$(document).ready(function () {

  // Insert jQuery code here to run when the page is loaded
  $('#esports').on('click',function () {
  $('#wrapper').animate({backgroundColor:'#450881'},500);
  $('#esports').fadeToggle();
  $('#quote').fadeIn();
  });

  $('.click').on('mouseover',function () {
  $('#source').fadeIn();
  });

  $('#source').on('click', function () {
  $('#whyContainer').addClass("whyClass", 500, "easeInBack").toggle("drop");
  $('#why').delay(1000).fadeToggle();
  $('#reset').delay(1000).fadeToggle();
  });

  $('#reset').on('click', function () {
    location.reload();
  });

});
