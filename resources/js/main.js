$(document).ready(function() {
  $('#portfolio').hide();
  $('#portfoliobutton').click(function() {
    $('#portfolio').fadeIn('slow');
    $('#about').hide();
  });
  $('#aboutbutton').click(function() {
    $('#portfolio').hide();
    $('#about').fadeIn('slow');
  });
});
