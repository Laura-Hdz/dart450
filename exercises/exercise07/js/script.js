/**********************************************

DART 450, Winter 2018
Exercise 07
Laura Hernandez

Fremmy talking through annyang

**********************************************/

$(document).ready(function() {

  if (annyang) {
    console.log("annyang is available.");

    var commands = {
      'good': goodDay,
      'bad': badDay,
      'I dont want to talk about it': sadBob,
      };
    annyang.addCommands(commands);
    annyang.start();
    }

// });

function goodDay () {
  $('#over').show();
  $('#good').show();
  $('#bad').hide();
  $('#talktome').hide();
}

function badDay () {
  $('#over').show();
  $('#hide').show();
  $('#show').hide();
  $('#talktome').hide();
}

function sadBob () {
  $('#over').show();
  $('#good').hide();
  $('#bad').hide();
  $('#talktome').show();
}

});
