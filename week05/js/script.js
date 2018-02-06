/**********************************************

DART 450, Winter 2018
Week 05
Laura Hernandez

Week 05 lecture

**********************************************/

// A database of people with names, ages, and job titles

var database = [
  {
    name: 'Don Quixote',
    age: 88,
    job: 'Knight'
  },
  {
    name: 'T-1000',
    age: -11,
    job: 'Terminator'
  },
  {
    name: 'Alicia Keys',
    age: 37,
    job: 'Musician'
  },
  {
    name: 'Artemis',
    age: NaN,
    job: 'Godess of the Hunt'
  }
];

$(document).ready(function () {

  // Run through our database array and add each entry to our page
  for (var i = 0; i < database.length; i++) {
    // Create a p element for each field in the current entry
    $name = $('<p></p>').text('Name: ' + database[i].name);
    $age = $('<p></p>').text('Age: ' + database[i].age);
    $job = $('<p></p>').text('Job: ' + database[i].job);
    // Create a div for the overall entry
    $entry = $('<div></div>');
    // Append each p element to the div
    $entry.append($name);
    $entry.append($age);
    $entry.append($job);
    // Add the entry to the page itself in the body
    $('body').append($entry);
  }

});

// $(document).ready(function () {

//The Grid example looped with jQuery; while loops happen all at once (all the divs will appear at the same time when the page loads)

  // Set how many divs we want to add
  // var totalDivsToAdd = 100; 
  // // Keep track of how many we've added in the loop
  // var divsAdded = 0; 

  // // Keep running the while loop until we've added enough divs
  // while (divsAdded < totalDivsToAdd) { 
  //   // Create the div
  //   var $div = $('<div></div>');
  //   // Add it to the page
  //   $('body').append($div);
  //   // Make a note that we've added one (so the loop will end at the right time)
  //   divsAdded = divsAdded + 1; 
  // }

//The Grid example looped with jQuery & with a set interval so that they don't appear all at the same time

  // var timer = setInterval(function () {
  //   var $div = $('<div></div>');
  //   $('body').append($div);
  //   divsAdded = divsAdded + 1;
  //
  //   if (divsAdded >= totalDivsToAdd) {
  //     clearInterval(timer);
  //   }
  // },500);

  // var currentDivTop = 0; 
  // var targetDivTop = 1000;
  //
  // $('div').css('position','absolute'); 
  // while (currentDivTop < targetDivTop) { 
  //   $('div').css({ 
  //     top: currentDivTop + 'px'
  //   }); 
  //   currentDivTop += 10; 
  // } 

  // var currentDivTop = 0; 
  // var targetDivTop = 1000;
  //
  // $('div').css('position','absolute'); 
  // while (true) { 
  //   $('div').css({ 
  //     top: currentDivTop + 'px'
  //   }); 
  //   currentDivTop += 10; 
  // } 

//   for (var i = 0; i < 10; i++)  { 
//   console.log("i is ",i); 
// }

// var totalDivsToAdd = 10; 
// for (var i = 0; i < totalDivsToAdd; i++) {
// var $div = $('<div>' + (i+1) + '</div>');
// $('body').append($div);
// }

// var people = [{name: 'John',age: 32},{name: 'Jane',age: 26},{name: 'June',age: 88}];
// for (var i = 0; i < people.length; i++) {
//   $div = $('<div></div>');
//   var textToAdd = people[i].name + ": " + people[i].age;
//   $div.text(textToAdd);
//   $('body').append($div);
// }
//
// });
