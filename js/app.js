playRyuIntro();
streetFighter();
$('#ryu-cool-sound')[0].load();

// Begin Intro animation

$.globalQueue = {
    queue: function(anim) {
        $('body')
        .queue(function(dequeue) {
            anim()
            .queue(function(innerDequeue) {
                dequeue();
                innerDequeue();
            });
        });
            
            return this;
    }
};

// End Intro animation

function streetFighter() {
  $('.ryu').mouseenter(function() {
      $('.ryu-hidden').hide();
      $('.ryu-ready').show();
    })
    .mouseleave(function() {
      $('.ryu-hidden').hide();
      $('.ryu-still').show();
    })
    .mousedown(function() {
      playHadouken();
      $('.ryu-hidden').hide();
      $('.ryu-throwing').show();
      $('.hadouken').finish().show().animate(
        {'left': '1020px'}, 
        500,
        function() {
          $('.hadouken').hide();
          $('.hadouken').css('left', '520px');
        }
      );
    })
    .mouseup(function() {
      $('.ryu-hidden').hide();
      $('.ryu-ready').show();
  });
  $(document).keydown(function(event) {
    if(event.which === 88) {
      playRyuCool ();
      $('#ryu-intro-sound')[0].load();
      $('.ryu-hidden').hide();
      $('.ryu-cool').show(); 
    }
  }).keyup(function(event) {
      if(event.which === 88) {
        $('#ryu-cool-sound')[0].pause();
        $('#ryu-cool-sound')[0].load();
        $('#ryu-intro-sound')[0].play();
        $('.ryu-hidden').hide();
        $('.ryu-still').show();
      }
  });
}


function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.1;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
};
function playRyuCool () {
  if (playHadouken) {
    $('#ryu-intro-sound')[0].pause();
    $('#ryu-cool-sound')[0].volume = 0.1;
    $('#ryu-cool-sound')[0].play();
  }
};
function playRyuIntro () {
  $('#ryu-intro-sound')[0].volume = 0.1;
  $('#ryu-intro-sound')[0].load();
  $('#ryu-intro-sound')[0].play();
}; 

// Intro Animation Function

$( document ).ready(function() {
    $.globalQueue
    .queue(function() {
        return $('.streetFighterLogo').fadeIn(2000);
    }).queue(function() {
        return $('.streetFighterLogo').fadeOut(3000);
    }).queue(function() {
        return $(".broughtBy").fadeIn(2000);
    }).queue(function() {
        return $('.wesBrown').fadeIn(2000);
    }).queue(function() {
        return $(".broughtBy").fadeOut(2000); }).queue(function() {
        return $('.wesBrown').fadeOut(2000);
    }).queue(function() {
        return $(".howTo").fadeIn(2000);
    });
});
