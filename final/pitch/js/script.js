/**********************************************

DART 450, Winter 2018
Title of Project
Author

Description of what the script does...

**********************************************/

$(document).ready(function() {

  if (annyang) {
    console.log("annyang is available.");

    var commands = {
      'yes': ateLunch,
      'no': noLunch,
      'I dont want to talk about it': sadBob,
      };
    annyang.addCommands(commands);
    annyang.start();
    }

// });

function ateLunch () {
  $('#status').text('Woo! Ate a great lunch today.');
  $('#no').hide();
  $('#yes').show();
}

function noLunch () {
  $('#status').text('Man, starving right now.')
  $('#yes').hide();
  $('#no').show();
}

function sadBob () {
  $('#status').text('Feeling down right now...')
  $('#yes').hide();
  $('#no').hide();
  $('#talktome').show();
}

});
