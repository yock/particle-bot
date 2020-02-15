var five = require("johnny-five");
var Particle = require("particle-io");
var board = new five.Board({
  io: new Particle({
    token: process.env.PARTICLE_TOKEN,
    deviceName: process.env.PARTICLE_DEVICE_NAME
  })
});

board.on("ready", function() {
  console.log("Device Ready..");
  var led = new five.Led("D7");
  led.blink();
});
