$(document).ready(function () {
  console.log('ready ...');
  // var timer;
  // var pause = true;
  // var $session_number = $('.session-number');
  // var $break_number = $('.break-number');
  // $('#plus-session').click(function () {
  //   if (pause) {
  //     $('#session-number').text(1 + parseInt($session_number.text()));
  //   }
  // });
  // $('#plus-break').click(function () {
  //   if (pause) {
  //     $('#break-number').text(1 + parseInt($break_number.text()));
  //   }
  // });
  // $('#minus-session').click(function () {
  //   if (pause) {
  //     if (parseInt($session_number.text()) == 1) return;
  //     $('#session-number').text(parseInt($session_number.text()) - 1);
  //   }
  // });
  // $('#minus-break').click(function () {
  //   if (pause) {
  //     if (parseInt($break_number.text()) == 1) return;
  //     $('#break-number').text(parseInt($break_number.text()) - 1);
  //   }
  // });
  // $('#pause').click(function () {
  //   pause = !pause;
  //   clearInterval(updateTime);
  //   $('#play').removeClass('hidden');
  //   $('#pause').addClass('hidden');
  //   console.log('not working...');
  //   clearInterval(timer);
  // });
  // $('#play').click(function () {
  //   pause = !pause;
  //   $('#pause').removeClass('hidden');
  //   $('#play').addClass('hidden');
  //   timer = window.setInterval(updateTime, 1000);
  // });

  // function updateTime() {
  //   console.log('working...');
  //   var currMinute = parseInt($('#minutes').text());
  //   var currSec = parseInt($('#seconds').text());
  //   $session_number = $('.session-number');
  //   var currentTimer = parseInt($session_number.text()) * 60;
  //   if (currMinute == 0){

  //   }
  //   else if (currSec == 0 || currSec == 59){
  //     $('#minutes').text(parseInt($('#minutes').text()) - 1);
  //     $('#seconds').text('0' + '1');
  //   } else {
  //     if (currSec < 9) {
  //       $('#seconds').text('0' + (currSec + 1));
  //     } else {
  //       $('#seconds').text(currSec + 1);
  //     }
  //   }
  // }
  // $('#minutes').text(currMinute);
  // $('#seconds').text(currSec);



  var pausedFlag = false;
  var starterFlag = true;
  var timer;
  var pause = true;
  var startedTime;
  var minutes;
  var seconds;
  var currMinute;
  var currSec;
  var $session_number = $('.session-number');
  var $break_number = $('.break-number');
  var breakout;
  var breakTime = false;
  if (starterFlag) {
    minutes = parseInt($('#session-number').text());
    seconds = minutes * 60;
    console.log(seconds);
    timer = window.setInterval(handlingTimer, 1000);
  } else if (pausedFlag) {

  }
  $('#pause').click(function () {
    pause = !pause;
    clearInterval(timer);
    $('#play').removeClass('hidden');
    $('#pause').addClass('hidden');
    console.log('not working...');
  });
  $('#play').click(function () {
    pause = !pause;
    $('#pause').removeClass('hidden');
    $('#play').addClass('hidden');
    timer = window.setInterval(handlingTimer, 1000);
  });

  function workoutSession() {
    if (pause == true) {
      if (seconds == 00 && minutes == 00) {
        console.log('this should be finished');
        clearInterval(timer);
        breakTime = true;
        breakout = setInterval(breakoutHandler, 1000);
        console.log('finihsed');
      } else if (seconds == 00) {
        minutes--;
        seconds = 60;
      } else {
        seconds--;
      }
      if (seconds < 10) {
        $('#seconds').text('0' + seconds);
      } else {
        $('#seconds').text(seconds);
      }
      $('#minutes').text(minutes);
    }
  }

  function breakoutHandler() {
    minutes = parseInt($('#break-number').text());
    seconds = parseInt($('#seconds').text());
    if (pause == true) {
      if (breakTime) {
        console.log('this should be finished');
        clearInterval(breakout);
        timer = setInterval(handlingTimer, 1000);
        breakTime = false;
        console.log('finihsed');
      } else if (seconds == 00) {
        minutes--;
        seconds = 60;
      } else {
        seconds--;
      }
      if (seconds < 10) {
        $('#seconds').text('0' + seconds);
      } else {
        $('#seconds').text(seconds);
      }
      $('#minutes').text(minutes);
    }
  }

  function handlingTimer() {
    minutes = parseInt($('#minutes').text());
    seconds = parseInt($('#seconds').text());
    workoutSession();
  }

  $('#plus-session').click(function () {
    if (pause) {
      $('#session-number').text(1 + parseInt($session_number.text()));
    }
  });
  $('#plus-break').click(function () {
    if (pause) {
      $('#break-number').text(1 + parseInt($break_number.text()));
    }
  });
  $('#minus-session').click(function () {
    if (pause) {
      if (parseInt($session_number.text()) == 1) return;
      $('#session-number').text(parseInt($session_number.text()) - 1);
    }
  });
  $('#minus-break').click(function () {
    if (pause) {
      if (parseInt($break_number.text()) == 1) return;
      $('#break-number').text(parseInt($break_number.text()) - 1);
    }
  });
});