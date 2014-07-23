function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(-34.397, 150.644),
    zoom: 8
  };
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);
$(function() {
  $('.menu-toggle').click(function(event) {
    event.stopPropagation()
    $(this).closest('ul').toggleClass('open')
  });

  $(document).click(function() {
    $('.menu-toggle').closest('ul').removeClass('open')
  });
});
