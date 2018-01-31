/**********************************************

DART 450, Winter 2018
Title of Project
Author

Description of what the script does...

**********************************************/

$(document).ready(function () {

  $('.divs').hide();
  // Insert jQuery code here to run when the page is loaded

  setTimeout(function () { 
  $('#first').fadeIn();

  // setInterval(function () {
  //   $('body').append('<div class="divs">Test!</div>');
  //   setTimeout(function () {
  //     $('body').append('<div class="divs">Test 2!</div>');
  //   },2000);
  // },4000);

   },1000);

  setTimeout(function () { 
  $('#second').fadeIn();
   },3000);

  setTimeout(function () { 
  $('#third').fadeIn();
   },5000);

  setTimeout(function () { 
  $('#fourth').fadeIn();
   },7000);

  setTimeout(function () { 
  $('#fifth').fadeIn();
   },9000);

  setTimeout(function () { 
  $('#sixth').fadeIn();
   },12000);

  setTimeout(function () { 
  $('#seventh').fadeIn();
   },14000);

  setTimeout(function () { 
  $('#eighth').fadeIn();
   },16000);

  setTimeout(function () { 
  $('#ninth').fadeIn();
   },18000);

  setTimeout(function () { 
  $('#tenth').fadeIn();
   },20000);

  setTimeout(function () { 
  $('#eleventh').fadeIn();

  setInterval(function () {
    $('body').append(document.getElementById( "fifth" ));
    setTimeout(function () {
    //   $('body').append('sixth');
    // },2000);
    // setTimeout(function () {
    //   $('body').append('seventh');
    // },4000);
    // setTimeout(function () {
    //   $('body').append('eighth');
    // },6000);
    // setTimeout(function () {
    //   $('body').append('ninth');
    // },8000);
    // setTimeout(function () {
    //   $('body').append('tenth');
    // },10000);
    // setTimeout(function () {
    //   $('body').append('eleventh');
    // },12000);
  },5000);

   },22000);




});
