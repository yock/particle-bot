import Five from 'johnny-five';
import Particle from 'particle-io';
import dotenv from 'dotenv';

dotenv.config()

const board = new Five.Board({
  io: new Particle({
    token: process.env.PARTICLE_TOKEN,
    deviceName: 'Yockbot'
  })
});

export default board;
