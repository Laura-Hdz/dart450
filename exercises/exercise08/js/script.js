/**********************************************

DART 450, Winter 2018
Fremmies / Exercise 08
Laura Hernandez

// // Get the text in the div on our page
// var divText = $('div').text();
//
// // Say it!
// responsiveVoice.speak(divText);


Exercise 08 / chat for final project using responsivevoice

**********************************************/

var voice = 'UK English Male';

var voiceParameters = {
    volume: 0.5
}

var smithText = $('#smith').text();

$(document).ready(function () {
  
  $('#start').on('click',function () {
    // say() is a function defined below
    say(smithText);
    $('#smith').fadeIn();
    $('#start').fadeToggle();
    $('#me').delay(1800).fadeIn();
  });

  $('#me').on('click',function () {
    if ($('#worriedInput').val() === notWorried) {
      $('#bounceBlob').hide();
      $('#grimaceBlob').hide();
      $('#grimaceDiv').hide();
      $('#cheerBlob').show();
    }

});

function say (text) {
  responsiveVoice.speak(text,voice,voiceParameters);
}
