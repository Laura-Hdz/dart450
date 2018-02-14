/**********************************************

DART 450, Winter 2018
Title of Project
Author

Description of what the script does...

**********************************************/
var firstAnswer = 2+3+6+7+234+90-57+567+3+3245+66+192-8+1+1+1+4-123+567+7+4-786+0+0+6+2+3+6+7+234+90-57+567+3+3245+66+192-8+1+1+1+4-123+567+7+4-786+0;
var secondAnswer = 2343+90-57+567+3+3245+66+192-8+1+1+1+4-123+2+39+61+73+2374+905-571+5678+34+32457+661+1925-86+19+13+15+46-1232+5677+79+41-7860+20+50+76+29+323+66+78+567+7+4-786+0;
var thirdAnswer = 4-123+567+7+4-786+0+0+6+2+3+6+7+234+90-57+34+32457+661+1925-86+19+13+15+46-1232+5677+79+234+90-57+567+4-786+0+0+6+3+3245+66+192-8+1+1+1+4-123+567;
var fourthAnswer = 567+7+4-786+0+0+6+2+3+6+7+234+90-57+567-2+3+6+7+234+90-57+567+3+3245+66+192-8+1+1+1+4-123+567+7+4-786+0+0+6+2+3+6+7+234+90-57+567;
var fifthAnswer = 90-57+567+3+3245+66+192-8+1+1+1+4-123+567+7+4-786+0+0+6+2+3+6+7+234+90-57+567+3+3245+66+192-8+1+1+1+4-123+567+7+4-786+1+57+32+2+3+6;
var sixthAnswer = 1+4-123+567+7+4-786+0+0+6+2+3+6+7+234+90-57+567+3+3245+66+192-8+1+1+1+4-123+567+7+4-786+0+0+62+3+6+7+234+90-57+567+3+3245+66+192-8+1;

$(document).ready(function () {


  $('input').click(function () {
  var bottom = Math.random() * 600;
  var left = Math.random() * 600;
  $(this).css({
      position: 'absolute',
      bottom: bottom,
      left: left,
      fontSize: '4px',
      color: 'yellow'
      });
  });

  $('#correct').hide();
  $('#wrong').hide();

  $('#enterQ1').on('click',function () {
    if (inputQ1 === firstAnswer) {
    $('#correct').show();
    }
    else {
    $('#wrong').show();
    }
 });

   $('#enterQ2').on('click',function () {
     if (inputQ2 === secondAnswer) {
      $('#correct').show();
     }
     else {
       $('#wrong').show();
     }
  });

  $('#enterQ3').on('click',function () {
    if (inputQ3 === thirdAnswer) {
     $('#correct').show();
    }
    else {
      $('#wrong').show();
    }
  });

  $('#enterQ4').on('click',function () {
    if (inputQ4 === fourthAnswer) {
     $('#correct').show();
    }
    else {
      $('#wrong').show();
    }
  });

  $('#enterQ5').on('click',function () {
    if (inputQ5 === fifthAnswer) {
     $('#correct').show();
    }
    else {
      $('#wrong').show();
    }
  });

  $('#enterQ6').on('click',function () {
    if (inputQ6 === sixthAnswer) {
     $('#correct').show();
    }
    else {
      $('#wrong').show();
    }
  });


});
