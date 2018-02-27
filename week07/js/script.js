/**********************************************

DART 450, Winter 2018
Title of Project
Author

Description of what the script does...

**********************************************/

$(document).ready(function () {

  // Voice will say this once the page loads
  // responsiveVoice.speak("Hello World");

  // responsiveVoice.speak("hello world", "UK English Male", {pitch:0.3, rate: 1.5, volume: 0.2});

  //annyang commands
  // if (annyang) {
  // Let's define our first command. First the text we expect, and then the function it should call
  // var commands = {
  //   'hello': hello
  // };

  // Add our commands to annyang
  // annyang.addCommands(commands);

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  // annyang.start();
  // }
  //Create the function separately to kake things cleaner/
  // function hello() {
  //   $('body').css({
  //     backgroundColor:'black'
  //   });
  // }

  //playing sounds/music on your webiste
  // Create a variable to store the audio (based on a file)
  var muzak = new Audio('sounds/muzak.mp3');
  // Play it!
  muzak.play();

});
