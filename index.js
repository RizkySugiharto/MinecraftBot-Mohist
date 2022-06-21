const mineflayer = require('mineflayer');
const mpf = require('minecraft-protocol-forge');
const config = require('./config.json');

let bot = mineflayer.createBot({
  host: config["ip"],
  username: config["username"],
  port: config["port"],
  version: false
});

bot.on('login', () => {
  console.log('Successfully logging in');
});

bot.on('time', () => {
  let nearestPlr = bot.nearestEntity((entity) => entity.type === 'player');

  if (nearestPlr) {
    bot.look(nearestPlr.yaw, nearestPlr.pitch, false);
    bot.lookAt(nearestPlr.position);
  } else {
    console.log('There are no nearby player')
  }

  let controlKey = ['forward', 'left', 'back', 'right', 'jump'];
  let randomTime = Math.floor(Math.random() * 20 * 1000);

  setTimeout(() => {
    let action = controlKey[Math.floor(Math.random() * controlKey.length)];
    bot.setControlState(action, true);
  }, randomTime);
  bot.clearControlStates();
});

mpf.autoVersionForge(bot._client);

bot.on('death', () => {
  bot.emit('respawn')
});
