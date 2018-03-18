$(document).ready(function() {
  $('#portfolio').hide();
  $('#contact').hide();
  $('#portfoliobutton').click(function() {
    $('#about').hide();
    $('#contact').hide();
    $('#portfolio').fadeIn('slow');
  });
  $('#aboutbutton').click(function() {
    $('#portfolio').hide();
    $('#contact').hide();
    $('#about').fadeIn('slow');
  });
  $('#contactbutton').click(function() {
    $('#portfolio').hide();
    $('#about').hide();
    $('#contact').fadeIn('slow');
  });
});
