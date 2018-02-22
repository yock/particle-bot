/*
With much credit to @BrianGenisio, this code is almost entirely his.
https://github.com/CareEvolution/nodebots-unleashed-codemash-docs/blob/master/examples/base-sumobot.js
*/

import Five from 'johnny-five';
import board from './board';

board.on("ready", function() {
  console.log('ready');

  var leftWheelSpeedPin = 'D2';
  var leftWheelDirPin = 'D0';
  var rightWheelSpeedPin = 'D1';
  var rightWheelDirPin = 'D3';

  var rightWheel = new Five.Motor({
    pins: { pwm: rightWheelSpeedPin, dir: rightWheelDirPin },
    invertPWM: true
  });

  var leftWheel = new Five.Motor({
    pins: { pwm: leftWheelSpeedPin, dir: leftWheelDirPin },
    invertPWM: true
  });

  var speed = 255;

  function reverse() {
    leftWheel.rev(speed);
    rightWheel.rev(speed);
  }

  function forward() {
    leftWheel.fwd(speed);
    rightWheel.fwd(speed);
  }

  function stop() {
    leftWheel.stop();
    rightWheel.stop();
  }

  function left() {
    leftWheel.rev(speed);
    rightWheel.fwd(speed);
  }

  function right() {
    leftWheel.fwd(speed);
    rightWheel.rev(speed);
  }

  function exit() {
    leftWheel.rev(0);
    rightWheel.rev(0);
    setTimeout(process.exit, 1000);
  }

  var keyMap = {
    'up': forward,
    'down': reverse,
    'left': left,
    'right': right,
    'space': stop,
    'q': exit
  };

  var stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.resume();

  stdin.on("keypress", function(chunk, key) {
      if (!key || !keyMap[key.name]) return;

      keyMap[key.name]();
  });
});
