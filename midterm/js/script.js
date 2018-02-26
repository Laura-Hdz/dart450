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
    $('#sadBlob').append('WHY DOES THIS HAPPEN TO MEEEE ');
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

  //Input why you're worried or not worried at all; a different blob will greet you depending on what you enter
  var notWorried = "i'm not worried";
  var neverWorried = "i never worry";

  $('#cheerBlob').hide();
  $('#bounceBlob').hide();

  $('#worriedButton').on('click',function () {
    if (worriedInput === notWorried) {
     $('#cheerBlob').show();
    }
    else {
      $('#bounceBlob').show();
    }
  });

});
