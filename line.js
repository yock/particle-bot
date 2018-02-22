import Five from 'johnny-five';
import Particle from 'particle-io';

import board from './board';

board.on("ready", function() {
  console.log('board ready');

  const eyes = new Five.IR.Reflect.Array({
    emitter: 0,
    pins: ['A0', 'A1', 'A2', 'A3', 'A4', 'A5']
  });

  eyes.on('data', function() {
    console.log(this.raw);
  });

  eyes.enable();
});
