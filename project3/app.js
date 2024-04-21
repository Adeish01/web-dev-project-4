var main = function() {
  var volume;

  // Code for the "Play" button
  $('#play').click(function(){
    $('#message').text("Playing track");
    $('#player').trigger("play");
  });

  // Code for the "Stop" button
  $('#stop').click(function(){
    $('#message').text("Stopping track");
    $('#player').trigger("pause");
    $('#player')[0].currentTime = 0;
  });

  // Code for the "Pause" button
  $('#pause').click(function(){
    $('#message').text("Pausing track");
    $('#player').trigger("pause");
  });

  // Code for the "Mute" button
  $('#mute').click(function(){
    $('#message').text("Muting");
    $('#player').prop("muted", true);
  });

  // Code for the "Unmute" button
  $('#unmute').click(function(){
    $('#message').text("Unmuting");
    $('#player').prop("muted", false);
  });

  // Code for the "Volume Up" button
  $('#volume-up').click(function(){
    $('#message').text("Volume Up");
    var currentVolume = $('#player')[0].volume;
    if (currentVolume < 1) {
      $('#player')[0].volume = currentVolume + 0.1;
    }
  });

  // Code for the "Volume Down" button
  $('#volume-down').click(function(){
    $('#message').text("Volume Down");
    var currentVolume = $('#player')[0].volume;
    if (currentVolume > 0) {
      $('#player')[0].volume = currentVolume - 0.1;
    }
  });

}

$(document).ready(main);

