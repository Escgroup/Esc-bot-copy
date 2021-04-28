import { event } from 'ecstar';
import { GuildMember, MessageEmbed, TextChannel } from 'discord.js';

const memberlogChanneliD = '620149019896840192';

export default event(() => ({
  name: 'guildMemberRemove',
  run({ client, callback: [member] }) {
    const memberlogChannel = client.channels.cache.get(
      memberlogChanneliD
    ) as TextChannel;

    if (member instanceof GuildMember) {
      memberlogChannel.send(
        new MessageEmbed()
          .setAuthor(member.guild.name, member.guild.iconURL() || '')
          .setThumbnail(member.user.avatarURL() || '')
          .addField('Name', member.user.username, true)
          .addField('ID', member.id, true)
          .addField('Member Count', member.guild.members.cache.size)
          .setFooter('退出/Exit', member.user.avatarURL() || '')
          .setColor(0xd0021b)
      );
    }
  },
}));
