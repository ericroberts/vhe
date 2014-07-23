$(function() {
  $('.menu-toggle').click(function(event) {
    event.stopPropagation()
    $(this).closest('ul').toggleClass('open')
  });

  $(document).click(function() {
    $('.menu-toggle').closest('ul').removeClass('open')
  });
});
