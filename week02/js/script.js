$(document).ready(function () {
  // Generally we want the code to happen only once the whole page is loaded; that's why the code is added inside the ready function

  // $('#exampleDiv').text('Disaster!');
  // $('.exampleClass').text('Disaster!');

  // $('.exampleClass').css({
  // color: 'red',
  // fontSize: '10em',
  // backgroundColor: 'yellow'
  // });

  // Because it's a set of things they have to be written inside of curly brackets; each set is separated by commas; each element is written between single quote marks; css elements like fontSize are written without the hyphen and the second word is capitalized UNLESS it’s written between quote marks, then it can be ‘font-size’

  // $('.exampleClass').addClass('red');

  // in addClass() you don't use the period in front of the class name like you would for a selector - it's red not .red

  // $('.exampleClass').removeClass('bold');
  // $('.exampleClass').toggleClass('bold');

  // You can use either removeClass or toggleClass to change the classes as well

  // We can use val() to set the text inside an input field like this

  // $('#exampleInput').val('Hello, World!');

  // $('.exampleClass').on('click',function () {
  // $('.exampleClass').css({
  //   color: 'red'
  // })
  // });

  // $('.exampleClass').on('click',function () {
  // $(this).css({
  //   color: 'red'
  // })
  // });

  // we can use 'this' so that within all the divs with the same class, even if the js is applied to everything with the class, only THIS thing we clicked will change

  // $('#exampleButton').on('click',function() {
  // $('#exampleDiv').text($('#exampleInput').val());
  // });

  // we're saying "When I click the button, take the result of $('#exampleInput').val() and put it in the text of #exampleDiv"
  // $('#exampleInput').val() is saying take the value from the input field

  //some other functions

  // $('.exampleClass').on('click',function () {
  // $('.exampleClass').hide();
  // });

  // $('#exampleButton').on('click',function () {
  // $('.exampleClass').show();
  // });

  // $('#exampleButton').on('click',function () {
  // $('.exampleClass').toggle();
  // });

  // $('.exampleClass').on('click',function () {
  // $('.exampleClass').slideUp();
  // });

  // $('#exampleButton').on('click',function () {
  // $('.exampleClass').slideDown();
  // });

  // $('#exampleButton').on('click',function () {
  // $('.exampleClass').fadeToggle();
  // });

  // $('#exampleButton').on('click',function () {
  // $('.exampleClass').animate({
  //   fontSize: '10em'
  // },1000);
  // });

  // First we write the CSS properties in curly brackets (in this case we want the font size to become 10em)
  // Then after a comma we write how many milliseconds it should take (in this case 1000 milliseconds or one second)

  // To animate using colour we need to add jQuey UI library

  // $('#exampleButton').on('click',function () {
  // $('.exampleClass').animate({
  //   color: 'red', fontSize: '+=1em'
  // },1000);
  // });

  //So we use += and then the amount to add by animation (this works for any number)
  //(We can use -= if we want it to get smaller by that amount)

  //If we put the folowing into our script.js and look at the JavaScript Console we see
  //Uncaught TypeError: $(...).anamate is not a function

  // $('#exampleButton').on('click',function () {
  // $('.exampleClass').anamate({
  //   fontSize: '+=1em'
  // },1000);
  // });

  // To check up and see where the error is go to javascript console on google chrome
  // once you click, it will show the error

  $('#exampleButton').on('click',function () {
    $('.exampleClass').animate({
      fontSize: '+=1em'
    },1000);
  );

});
