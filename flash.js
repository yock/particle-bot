const spawn = require('child_process').spawn;
const particleCLI = spawn('particle', ['flash', process.env.PARTICLE_DEVICE_NAME, 'lib/voodoospark.cpp']);

particleCLI.stdout.on('data', (data) => {
  console.log(`${data}`);
});

particleCLI.stderr.on('data', (data) => {
  console.log(`error: ${data}`);
});
