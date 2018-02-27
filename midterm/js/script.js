/**********************************************

DART 450, Winter 2018
Midterm / The Blobs
Laura Hernandez

Online communication has become a big part of what the Internet is. And what better way to communicate than through Blobs!



**********************************************/

$(document).ready(function () {
// Insert jQuery code here to run when the page is loaded

  //Welcome window alert popup when page loads
  // window.alert("Welcome to Blob chat! Enjoy your stay and Blob away!")

  //Start the chat by hiding the text by clicking on it and sending in the three blobs to start the convo
  $('#startChatting').on('click',function () {
    $('#startChatting').fadeToggle();
    $('#hiBlob').fadeIn().css({
      top: '50%'
    });
    $('#sadBlob').fadeIn().css({
      top: '50%'
    });
    $('#worriedBlob').fadeIn().css({
      top: '50%'
    });
  });


  //Find out what the Blobs mean by hovering over them and appending their respective text

  $('#hiBlob').on('mouseover',function () {
    $('#hiBlob').append('Hi! ');
  });

  $('#sadBlob').on('mouseover',function () {
    $('#sadBlob').append('WAAAAAA ');
  });

  $('#worriedBlob').on('mouseover',function () {
    $('#worriedBlob').append('oh god ');
  });


  //Decide where the conversation goes depending on which blob you click on

  $('#hiBlob').on('click', function () {
    document.getElementById('mainBlob').src='images/ablobgrin.gif';
    $('#hiBlob').fadeToggle();
    $('#sadBlob').fadeToggle();
    $('#worriedBlob').fadeToggle();
    setInterval(function () { 
      $('#giftBlob').fadeIn();
      $('#winkBlob').fadeIn();
     },1000);
  });

  $('#sadBlob').on('click', function () {
    document.getElementById('mainBlob').src='images/ablobnervous.gif';
    $('#hiBlob').fadeToggle();
    $('#sadBlob').fadeToggle();
    $('#worriedBlob').fadeToggle();
    setInterval(function () { 
      $('#sadCloudBlob').fadeIn();
      $('#dizzyBlob').fadeIn();
     },1000);
  });

  $('#worriedBlob').on('click', function () {
    document.getElementById('mainBlob').src='images/ablobeyes.gif';
    $('#hiBlob').fadeToggle();
    $('#sadBlob').fadeToggle();
    $('#worriedBlob').fadeToggle();
    setInterval(function () { 
      $('#worriedInput').fadeIn();
      $('#worriedLabel').fadeIn();
      $('#worriedButton').fadeIn();
     },1000);
  });

  //If you clicked on Hi! Blob then have a present! Make the gift appear at random points continuously
  $('#giftBlob').on('click', function () {
    setInterval(function() {
      $('#giftDiv').each(function () {
      var topPos = Math.random() * 800;
      var leftPos = Math.random() * 1500;
        $(this).css({
            display: 'block',
            position: 'absolute',
            top: topPos,
            left: leftPos
            });
        });
      },500);
  });

  //What, you didn't want a gift? Make the text appear
  $('#winkBlob').on('mouseover', function () {
    $('#winkDiv').show().addClass('winkClass');
  });

  //If you clicked on the sad Blob! Don't cry, that's way too much water... Make the water animate in and out!
  $('#sadCloudBlob').on('click', function () {
    $('#river').animate({bottom: '0'},3000);
  });

  $('#river').on('click', function () {
    $('#river').effect("pulsate", 500);
    $('#river').animate({bottom: '-50%'},3000);
  });

  //That was way too much water... Dizzy blob is now even more dizzy... please stooooooooooooop.
  $('#dizzyBlob').on('mouseover', function () {
    $('#dizzyDiv').animate({left: '100%'},1500);
    $('#dizzyDiv').animate({left: '-100%'},1500);
    $('#dizzyBlob').effect("shake", {direction:"left", times:20}, 3000);
  });


  //If you clicked on the worried Blob! Input why you're worried or not worried at all; a different blob will greet you depending on what you enter
  var notWorried = "i'm not worried";
  var neverWorried = "i never worry";
  var grimaceDiv = $("<div id='grimaceDiv'>Oh... Well... Don't know what to say here...</div>")

  $('#worriedButton').on('click',function () {
    if ($('#worriedInput').val() === notWorried) {
      $('#bounceBlob').hide();
      $('#grimaceBlob').hide();
      $('#grimaceDiv').hide();
      $('#cheerBlob').show();
    }
    else if ($('#worriedInput').val() === neverWorried) {
      $('#cheerBlob').hide();
      $('#grimaceBlob').hide();
      $('#grimaceDiv').hide();
      $('#bounceBlob').show();
    }
    else {
      $('#cheerBlob').hide();
      $('#bounceBlob').hide();
      $('#grimaceBlob').show();
      $('#grimaceBlob').append(grimaceDiv);
    }
  });

});
