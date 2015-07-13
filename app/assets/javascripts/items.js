$(function() {
  $("audio").prop('muted', false);

  $("#sound-toggle").click(function (){
    if( $("audio").prop('muted') ) {
      $("#sound-toggle").removeClass('sound-off');
      $("audio").prop('muted', false);
      $("#toggler-sound")[0].play();
    } else {
      $("#sound-toggle").addClass('sound-off');
      $("audio").prop('muted', true);
    }
  });

  $('.items-list').on("click", ".item", function() {
    if (myApp.marking === 1) {
      return false; 
    }
    myApp.marking = 1;
    $('#done-sound')[0].play();

    var url = $(this).find('a').attr('href');
    $.ajax({
      url: url,
      type: 'PUT',
      data: null,
      success: function() {}
    });

    var item = this;
    var items = document.querySelectorAll('.item');
    var itemIndex = $('.item').index(item);

    dynamics.animate(item, {
      translateX: 1000
    }, {
      type: dynamics.spring,
      duration: 400,
      frequency: 58,
      friction: 114,
      anticipationSize: 505,
      anticipationStrength: 93,
      complete: function() {
          for(var i=itemIndex+1; i < items.length; i++) {
              dynamics.animate(items[i], {
                translateY: -69
              }, {
                type: dynamics.spring,
                frequency: 200,
                friction: 200,
                duration: 500,
                delay: 50*i
              });  
          }
          
      }
    });
    
    dynamics.setTimeout(function() {
      dynamics.stop(items);
      dynamics.css(items, { translateY: 0 });
      $(item).remove();
      myApp.marking = null;
    }, 1000);

    return false;
  });
});