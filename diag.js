import Five from 'johnny-five';
import board from './board';

board.on("ready", function() {
  console.log("Device Ready..");
  var led = new Five.Led("D7");
  led.blink();
});
