/**********************************************

DART 450, Winter 2018
Title of Project
Author

Description of what the script does...

**********************************************/

$(document).ready(function () {
  // window.requestAnimationFrame(update);
// });

// function update() {
//   $('div').css({
//     position: 'absolute',
//     left: '+=1'
//   });
//   window.requestAnimationFrame(update);
// }

// function update() {
//   if ($(window).width() < 500) {
//   $('body').css({ backgroundColor: 'red' });
// }
//
// else {
//   $('body').css({ backgroundColor: 'yellow' });
// }
//   window.requestAnimationFrame(update);
// }

// $(window).resize(function () {

  // if ($(window).width() < 500) {
  // $('body').css({ backgroundColor: 'red' });
  // }
  // else if ($(window).width() < 600) {
  // $('body').css({ backgroundColor: 'green' });
  // }
  // else {
  // $('body').css({ backgroundColor: 'yellow' });
  // }

  // if ($(window).width() < 500) {
  //   if ($(window).height() < 500) {
  //     $('body').css({ backgroundColor: '#f00' });
  //   }
  // }
  // });

  // if ($(window).width() < 500 && $(window).height() < 500) {
  // $('body').css({ backgroundColor: '#f00' });
  // }
  // });

  // if ($(window).width() > 500 || $(window).height() > 500) {
  // $('body').hide();
  // }
  // else {
  //   $('body').show();
  // }
  // });

  // $('#input').keypress(function (event) {
  //
  //   console.log(event.which);
  //
  //   if (event.which == 115) {
  //     var newTopOffset = $('#input').offset().top + 10;
  //     $('#input').offset({
  //       top: newTopOffset
  //     });
  //   }
  // });

  console.log(Math.random());
  // $('div').each(function () {
  // var randomX = Math.random() * $(window).width();
  // var randomY = Math.random() * $(window).height();
  // $(this).css({
  //     position: 'absolute',
  //     top: randomY,
  //     left: randomX
  // });
  // });

  // $('div').each(function () {
  // var randomX = Math.random() * $(window).width();
  // var randomY = Math.random() * $(window).height();
  // $(this).css({
  //     position: 'absolute',
  //     top: randomY,
  //     left: randomX
  // });
  // });

  var probability = Math.random();
  if (probability < 0.1) {
    $('body').text("You win!!!");
  }
  else {
    $('body').text("You lose.");
  }

});
