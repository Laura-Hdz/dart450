/**********************************************

DART 450, Winter 2018
Fremmy / Final
Laura Hernandez

js file for Fremmy, the worst friend you'll ever have.

**********************************************/

// settings for responsivevoice
var speechReady = false;
var voice = 'UK English Female';
var voiceParameters = {
    volume: 0.5
}

//  Google API key for location to use later
var geocodeAPIKey = "AIzaSyDxB9w9mK3NvTs8C35K5CAn9Rad_F_JMSI";
// The base URL to give back JSON data about user's location
var geocodeURL = "https://maps.googleapis.com/maps/api/geocode/json";

$(document).ready(function () {

//JS FOR THE WELCOME ("SIGN UP") PAGE

  //hiding the divs for the the initial questions
  $('#nameStuff').hide();
  $('#ageStuff').hide();
  $('#foodStuff').hide();

  // Fetching a saved name (if there is one)
  var myName = localStorage.getItem('myName');

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
      var mySavedName = $('#nameInput').val(); // your name is saved in the myName variable
      localStorage.setItem('myName',mySavedName); // your name is saved to the browser
      console.log(mySavedName);//just checking to see if it saved correctly
    //Fremmy knows your name now, so it says hi after we set the text to the div "fremmyTalks"
      $('#fremmyTalks').text("Hi " + mySavedName + ", it's nice to meet you!");
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
      var mySavedFood = $('#foodInput').val(); // your food choice is saved in the myFood variable
      localStorage.setItem('myFood',mySavedFood); // your food choice is saved to localStorage
      if ($('#foodInput').val() === 'pizza') {
        //Fremy continues talking according to the text in fremmyTalks
        $('#fremmyTalks').text("I love Pizza!");
        say($('#fremmyTalks').text());
        $('#fremmyTalks').append('<div id="dashboard"></div>')
        $('#dashboard').text('Go to my Dash')
        //linking the new div to go to the dashboard
        $('#dashboard').on('click',function(){
          window.location.href = "html/dashboard.html";
        });
        // we hide the food question because we asked it
        $('#foodStuff').hide();
      }
      //if you pick lasagna
      else if ($('#foodInput').val() === 'lasagna') {
        //Fremy continues talking according to the text in fremmyTalks
        $('#fremmyTalks').text("I love lasagna!");
        say($('#fremmyTalks').text());
        $('#fremmyTalks').append('<div id="dashboard"></div>')
        $('#dashboard').text('Go to my Dash')
        //linking the new div to go to the dashboard
        $('#dashboard').on('click',function(){
          window.location.href = "html/dashboard.html";
        });
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
    $('#sayingHi').text('Welcome back, ' + myName);
    //creating a new div to go to the dashboard
    $('#sayingHi').append('<div id="dashboard"></div>')
    $('#dashboard').text('Go to my Dash')
    //linking the new div to go to the dashboard
    $('#dashboard').on('click',function(){
      window.location.href = "html/dashboard.html";
    });
  }

//JS FOR THE DASHBOARD PAGE

  //Fremmy welcomes you once again
  $('#fremmyStatus').text("Hi again " + myName + ", how are you feeling today? Good? Bad?");
  say($('#fremmyStatus').text());

  //time to use annyang!
  if (annyang) {
    console.log("annyang is a-okay!");
    // commands (what to say) to Fremmy (annyang)
    var commands = {
      'good': goodDay,
      'bad': badDay,
      'not talking': sadDay,
      'talk about something else': talkElse,
      'where i am': whereI,
      'food': foodI,
      };
    // adding the commands
    annyang.addCommands(commands);
    // start annyang
    annyang.start();
  }

  //we want to add Dates to your status, so here's a var for it
  var date = new Date();
  //how you feelin status - depending on what you answer, a new status will appear!
  function goodDay () {
    // adding a class to the div so it shows
    $('#goodStatus').addClass("myStatus");
    //adding the text to the div witht the Date
    $('#goodStatus').html(date + "<br/> Feeling good today!");
  }
  function badDay () {
    // adding a class to the div so it shows
    $('#badStatus').addClass("myStatus");
    //adding the text to the div witht the Date
    $('#badStatus').html(date + "<br/> Not feeling so hot today!");
  }
  function sadDay () {
    // adding a class to the div so it shows
    $('#sadStatus').addClass("myStatus");
    //adding the text to the div witht the Date
    $('#sadStatus').html(date + "<br/> What a day... don't feel like talking to anyone anymore");
  }

  //alright you want to talk about something else, you have 2 options.
  function talkElse () {
    $('#fremmyStatus').text("Okay, what do you want to talk about?");
    say($('#fremmyStatus').text());
    //append a div for the option to talk about where you are
    $('#fremmyStatus').append('<div id="where">Where I am</div>')
    //append a div for the option to talk about food
    $('#fremmyStatus').append('<div id="eat">Probably food</div>')
  }

  function whereI () {
    //depending on where you are, Fremmy will say something different
    //GETTING YOUR LOCATION
    console.log('Location sometimes takes a while, please be patient')
    //based on code shown in class; calls getCurrentPosition
    navigator.geolocation.getCurrentPosition(gotCoordinatesData);
    //GETTING YOUR LOCATION
      //based on code shown in class
      //function for LOCATION
      // gotCoordinatesData (data)
      function gotCoordinatesData (data) {
        console.log("Got coordinates.");

        //User's coordinates in a string
        var coords = data.coords.latitude + ',' + data.coords.longitude;

        // The result type we want is a street address
        var resultType = 'street_address';

        // Querying URL out of the base URL and extra parameters we're using and looking for
        var url = geocodeURL + '?latlng=' + coords + '&result_type=' + resultType + '&key=' + geocodeAPIKey;

        // Use getJSON to request geocoding data from Google
        $.getJSON(url, gotGeocodeData);
      };

      // gotGeocodeData (data)
      // Called by getJSON when Google has responded with geocoding data argument contains the geocoding data
      function gotGeocodeData (data) {
        console.log("Got geocoding data.");

        // Pull out the user's formatted address (a string)
        var address = data.results[0].formatted_address;
        console.log(address);

        if (address.indexOf("Montreal") != -1) {
          $('#fremmyStatus').text("Montreal is great isn't it?");
          say($('#fremmyStatus').text());
          $('#montreal').addClass("myStatus");
          $('#montreal').html(date + "<br/> Currently in Montreal and it's great!");
        }
        else {
          $('#fremmyStatus').text("Are you on vacation?");
          say($('#fremmyStatus').text());
          $('#away').addClass("myStatus");
          $('#away').html(date + "<br/> Not exactly in Montreal right now. Let me know if you need me!");
        }
      };
  }

  function foodI () {
    var myFood = localStorage.getItem('myFood');
    console.log(myFood)
    $('#fremmyStatus').text("You love " + myFood + ", why not order some right now?");
    say($('#fremmyStatus').text());
    window.open("https://www.pizzahut.ca/", "_blank");
    $('#order').addClass("myStatus");
    $('#order').html(date + "<br/> Ordering some food!");
  }


});

// settings for responsivevoice
function say (text) {
  responsiveVoice.speak(text,voice,voiceParameters);
};
