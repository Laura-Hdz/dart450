/**********************************************

DART 450, Winter 2018
Exercise 04
Laura Hernandez

Bobbles everywhere.

**********************************************/

$(document).ready(function () {

  // Insert jQuery code here to run when the page is loaded

  setInterval(function() {
  $('img').each(function () {
  var topPos = Math.random() * 650;
  var leftPos = Math.random() * 650;
  $(this).css({
      position: 'absolute',
      top: topPos,
      left: leftPos
      });
  });
},1000);

  $('.bobble').on('click', function () {
    location.reload();
  });

});
