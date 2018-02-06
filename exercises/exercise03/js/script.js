/**********************************************

DART 450, Winter 2018
Exercise 03
Laura Hernandez

Endless story that never actually gets anywhere

**********************************************/

$(document).ready(function () {

  $('.divs').hide();
  // Insert jQuery code here to run when the page is loaded

  setInterval(function () { 
  $('#1').fadeIn();
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
  },22000);

  setInterval(function () {

      setTimeout(function (){
      $('#fifth').clone().appendTo('body');
      }, 1000);

      setTimeout(function (){
      $('#sixth').clone().appendTo('body');
      }, 3000);

      setTimeout(function (){
      $('#seventh').clone().appendTo('body');
      }, 5000);

      setTimeout(function (){
      $('#eighth').clone().appendTo('body');
      }, 7000);

      setTimeout(function (){
      $('#ninth').clone().appendTo('body');
      }, 9000);

      setTimeout(function (){
      $('#tenth').clone().appendTo('body');
      }, 11000);

      setTimeout(function (){
      $('#eleventh').clone().appendTo('body');
      }, 13000);

  },24000);

});
