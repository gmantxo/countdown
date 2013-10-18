$(function() {
  var currentDate = new Date();
  $('.countdown-container').countdown('2014/04/30 19:00:00', function(event) {
    $this = $(this);
    switch(event.type) {
      case "seconds":
      case "minutes":
      case "hours":
      case "days":
      case "weeks":
      case "daysLeft":
        $this.find('span.'+event.type+">span").html(event.value);
        break;
      case "finished":
        $this.fadeTo('slow', .5);
        break;
    }
  });
});