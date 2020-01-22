const { Command } = require('ecstar');

module.exports = class extends Command {
  constructor(client) {
    super(client, {
      name: 'ping',
    });
  }

  run(message) {
    return message.channel.send(`${this.client.ping}ms`);
  }
};
