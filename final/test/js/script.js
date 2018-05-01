/**********************************************

DART 450, Winter 2018
Fremmies / test
Laura Hernandez


**********************************************/
// settings for responsivevoice
var speechReady = false;
var voice = 'UK English Female';
var voiceParameters = {
    volume: 0.5
}

$(document).ready(function () {

//JS FOR THE WELCOME ("SIGN UP") PAGE

  //hiding the divs for the the initial questions
  $('#nameStuff').hide();
  $('#ageStuff').hide();
  $('#foodStuff').hide();

  // Fetching a saved name (if there is one)
  var myName = localStorage.getItem('myName');
  // Fetching a saved food choice
  var myFood = localStorage.getItem('myFood');

  // If statement to check if there's anything there for the name (null means there isn't anything)
  if (myName == null) {
  // If there's nothing, Fremmy will ask a set of questions to welcome you
    //Fremmy welcomes you
    say($('#sayingHi').text());
    // The div for questions about your name is unhidden
    $('#nameStuff').show();
    // Fremmy asks your name
    say($('#nameLabel').text());
    // Inputting your name and clicking on the button will save it for when you come back
    $('#nameButton').on('click',function() {
      var myName = $('#nameInput').val(); // your name is saved in the myName variable
      localStorage.setItem('mySavedName',myName); // your name is saved to the browser
    //Fremmy knows your name now, so it says hi after we set the text to the div "fremmyTalks"
      $('#fremmyTalks').text("Hi " + myName + ", it's nice to meet you!");
        say($('#fremmyTalks').text());
        //We hide divs "sayingHi" and "nameStuff" since it already said hi and already knows your name
        $('#sayingHi').hide();
        $('#nameStuff').hide();
        //Now it's time to ask about your age
        $('#ageStuff').show();
        say($('#ageLabel').text());
    });
    //when you enter your age, Fremmy will answer and then ask about your food preferences
    $('#ageButton').on('click',function() {
      $('#fremmyTalks').text("Only " + $('#ageInput').val() + "? Still so young!");
      //again, fremmy says stuff after setting the text of "#fremmyTalks"
      say($('#fremmyTalks').text());
      //we hide the age stuff because we don't need it anymore
      $('#ageStuff').hide();
      $('#foodStuff').show();
      //time for the food stuff
      say($('#foodLabel').text());
    });
    //Fremmy gives you two options: pizza or lasagna, and will answer according to what you pick once you click the button
    $('#foodButton').on('click',function() {
      //if you pick pizza
      if ($('#foodInput').val() === 'pizza') {
        var myFood = $('#foodInput').val(); // pizza choice is saved in the myFood variable
        localStorage.setItem('mySavedFood',myFood); // your food choice is saved to localStorage
        //Fremy continues talking according to the text in fremmyTalks
        $('#fremmyTalks').text("I love Pizza!");
        say($('#fremmyTalks').text());
        // we hide the food question because we asked it
        $('#foodStuff').hide();
      }
      //if you pick lasagna
      else if ($('#foodInput').val() === 'lasagna') {
        var myFood = $('#foodInput').val(); // lasagna choice is saved in the myFood variable
        localStorage.setItem('mySavedFood',myFood); // your food choice is saved to localStorage
        //Fremy continues talking according to the text in fremmyTalks
        $('#fremmyTalks').text("I love lasagna!");
        say($('#fremmyTalks').text());
        // we hide the food question because we asked it
        $('#foodStuff').hide();
      }
      //you have to pick one of the two
      else
      {$('#fremmyTalks').text("Well, I'm sure you do but that wasn't part of the question...");}
      say($('#fremmyTalks').text());
    });
  }
  //now we go back to what happens if you had already entered your name and all those questions
  else {
  // ELSE your name is already saved, so we can move on to the website since it doesn't need to ask questions
  $('#sayingHi').text('Welcome back, ' + userName);
  $('#goToDash').append('#sayingHi');
  $('#goToDash').text('go to my dashboard');
  }


});


function say (text) {
  responsiveVoice.speak(text,voice,voiceParameters);
}
