$(function() {
  $("audio").prop('muted', false);

  $("#sound-toggle").click( function (){
    if( $("audio").prop('muted') ) {
      $("#sound-toggle").removeClass('sound-off');
      $("audio").prop('muted', false);
      $("#toggler-sound")[0].play();
    } else {
      $("#sound-toggle").addClass('sound-off');
      $("audio").prop('muted', true);
    }
  });
});