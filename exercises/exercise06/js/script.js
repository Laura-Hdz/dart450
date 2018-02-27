/*

Blast.js Exercise
Laura Hernandez
Exercise 06

blast.js exercise


*/

$(document).ready(function() {

  var total = 0;
  $('#yourTotal').text(total + "/3");

  var poke1 = "Mudkip";
  var poke2 = "Litwick";
  var poke3 = "Toxapex";

  $('#buttonp1').on('click',function () {
    if ($('#inputp1').val() === poke1) {
      $('#options1').blast({
        search: "Mudkip",
        customClass: 'correct'
      });
      $('#options1').animate({color:'rgba(56, 56, 56, 0.5)'},800);
      $('#part2').fadeIn();
    	total++;
      $('#yourTotal').text(total + "/3");
    }
    else {
      $('#part1').blast({
        delimiter: "all",
        customClass: 'wrong'
      });
      $('.wrong').animate({color:'rgba(56, 56, 56, 0.5)'},800);
      $('#part2').fadeIn();
    }
  });

  $('#answer1').click(function () {
    $('#part1').blast({
      search: "Mudkip",
      customClass: 'blasted'
    });
  });

  $('#buttonp2').on('click',function () {
    if ($('#inputp2').val() === poke2) {
      $('#options2').blast({
        search: "Litwick",
        customClass: 'correct'
      });
      $('#options2').animate({color:'rgba(56, 56, 56, 0.5)'},800);
      $('#part3').fadeIn();
    }
    else {
      $('#part2').blast({
        delimiter: "all",
        customClass: 'wrong'
      });
      $('.wrong').animate({color:'rgba(56, 56, 56, 0.5)'},800);
      $('#part3').fadeIn();
    }
  });

  $('#answer2').click(function () {
    $('#part2').blast({
      search: "Litwick",
      customClass: 'blasted'
    });
  });

  $('#buttonp3').on('click',function () {
    if ($('#inputp3').val() === poke3) {
      $('#options3').blast({
        search: "Toxapex",
        customClass: 'correct'
      });
      $('#options3').animate({color:'rgba(56, 56, 56, 0.5)'},800);
    }
    else {
      $('#part3').blast({
        delimiter: "all",
        customClass: 'wrong'
      });
      $('.wrong').animate({color:'rgba(56, 56, 56, 0.5)'},800);
    }
  });

  $('#answer3').click(function () {
    $('#part3').blast({
      search: "Toxapex",
      customClass: 'blasted'
    });
  });

  $('#reload').on('click', function () {
    location.reload();
  });

});
