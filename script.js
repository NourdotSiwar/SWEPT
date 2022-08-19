 $( ".centered3" ).click(function() {
    var x = $(window).scrollTop();
     $('html, body').animate({ scrollTop: x + 500 }) 
  });






// ------------------------- Project JS --------------------
var button = $('.generate');
var div = $('.ideas');

var ideas = ['Website Re-Design', 'Weather App', 'To-Do List', 'Fitness Tracker', 'Budgeting App','Quiz your Knowledge', 'Track your Goals'];
var randomIdeas = Math.round(Math.random()*(ideas.length-1));

button.on('click', showIdea);

function showIdea(){
  div.append(`<p> ${ideas[randomIdeas]} </p>`);
}
// -------------------------------------------------------