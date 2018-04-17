/**********************************************

DART 450, Winter 2018
Fremmies / test
Laura Hernandez

// // Get the text in the div on our page
// var divText = $('div').text();
//
// // Say it!
// responsiveVoice.speak(divText);


Exercise 08 / chat for final project using responsivevoice

**********************************************/

var speechReady = false;

var voice = 'UK English Male';

var voiceParameters = {
    volume: 0.5
}

// var smith = $('#smith').text();

$(document).ready(function () {

  var smith = $('#smith').text();
  var me = $('#me').text();
  var answers = [document.getElementById('a1'), document.getElementById('a2'), document.getElementById('a3'), ]

  $('#start').on('click',function () {
    // say() is a function defined below
    say(smith);
    $('#smith').fadeIn();
    $('#start').fadeToggle();
    $('#talk').delay(3000).fadeIn();
  });

  $('#me').on('click',function () {
    $(answers).fadeIn();
    $('#talk').hide();
  });

});


function say (text) {
  responsiveVoice.speak(text,voice,voiceParameters);
}
