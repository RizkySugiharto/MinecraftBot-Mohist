let mineflayer = require('mineflayer');
let mpf = require('minecraft-protocol-forge');
let config = require('./config.json')

let bot = mineflayer.createBot({
  host: config["ip"],
  username: config["username"],
  port: config["port"],
  version: false
});

bot.on('login', () =>{
  console.log('Successfully logging in');
});

mpf.autoVersionForge(bot._client);

// mpf.forgeHandshake(bot._client, {forgeMods:[
//   { modid: 'aj', version: '1.0.0' },
//   { modid: 'minecraft', version: '1.12.2' },
//   { modid: 'mcp', version: '9.42' },
//   { modid: 'mohist', version: '1.12.2-321' },
//   { modid: 'FML', version: '8.0.99.99' },
//   { modid: 'forge', version: '14.23.5.2860' },
//   { modid: 'obfuscate', version: '0.4.2' },
//   { modid: 'aether_legacy', version: '1.5.3.2' },
//   { modid: 'thedragonlib', version: '1.12.2-5.3.0' },
//   { modid: 'armorplus', version: '1.12.2-11.28.0.69' },
//   { modid: 'customspawner', version: '3.11.4' },
//   { modid: 'mocreatures', version: '12.0.5' },
//   { modid: 'forgelin', version: '1.8.4' },
//   { modid: 'cfm', version: '6.3.1' },
//   { modid: 'ironchest', version: '1.12.2-7.0.67.844' },
//   { modid: 'jei', version: '4.16.1.302' },
//   { modid: 'vehicle', version: '0.44.1' },
//   { modid: 'jev', version: '2.0.0' },
//   { modid: 'journeymap', version: '1.12.2-5.7.1' },
//   { modid: 'mutantbeasts', version: '1.12.2-1.0.2' }
// ]});

bot.on('chat', (username, message) => {
  if (username === bot.username) return
  bot.chat(message)
});
