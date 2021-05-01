// - Örnekler bitti.
// - A ve G alfabetik işlemleri bitti.
const Discord = require('discord.js');
const client = new Discord.Client();
const { MessageAttachment, MessageEmbed } = require('discord.js');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if(msg.content === "help")
    {
        msg.channel.send("Hello My friends, wiki abouts or helpful request.");
        msg.channel.send("In fact, you don't need much help like you are texting in the classic way,");
        msg.channel.send("you enter the calls, you enter an active environment and hang out,");
        msg.channel.send("and just what happened was repeated day by day.");
    }
});

client.on('message', message => {
    if (message.content === 'myavatar') {
      message.reply(message.author.displayAvatarURL());
    }
  });

client.on('message', msg => {
    if(msg.content === "credits")
    {
        msg.channel.send("That Me made up Cool Taktak");
    }
});

client.on('message', message => {
  if (message.content === 'rip') {
    const attachment = new MessageAttachment('https://i.imgur.com/w3duR07.png');
    message.channel.send(attachment);
  }
});

client.on('message', async message => {
  if (!message.guild) return;

  if (message.content === 'voice join wiki bot') {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
});

client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('kick please')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            message.reply(`Successfully kicked ${user.tag}`);
          })
          .catch(err => {
            message.reply('I was unable to kick the member');
            console.error(err);
          });
      } else {
        message.reply("That user isn't in this guild!");
      }
    } else {
      message.reply("You didn't mention the user to kick!");
    }
  }
});

client.on('message', async message => {
  if (message.content === 'chat clear') {
    message.channel.bulkDelete(100);
  }
});

client.on('message', async message => {
  if (message.content === 'activity') {
        const embed = new MessageEmbed()
        .setTitle('Activity')
        .setColor(0x6699ff)
        .setDescription('Represents an activity that is part of a users presence.');
      message.channel.send(embed);
  }
});

client.on('message', async message => {
  if (message.content === 'activity flags') {
        const embed = new MessageEmbed()
        .setTitle('Activity Flags')
        .setColor(0x6699ff)
        .setDescription('Data structure that makes it easy to interact with an Activity#flags bitfield.');
      message.channel.send(embed);
  }
});

client.on('message', async message => {
  if (message.content === 'voice status') {
        const embed = new MessageEmbed()
        .setTitle('CONNECTED: 0\nCONNECTING: 1\nAUTHENTICATING: 2\nRECONNECTING: 3\nDISCONNECTED: 4')
        .setColor(0x6699ff)
        .setDescription('The current status of a voice connection. Here are the available statuses:');
      message.channel.send(embed);
  }
});

client.on('message', async message => {
  if (message.content === 'api message') {
        const embed = new MessageEmbed()
        .setTitle('APIMessage')
        .setColor(0x6699ff)
        .setDescription('Represents a message to be sent to the API.');
      message.channel.send(embed);
  }
});

client.on('message', async message => {
  if (message.content === 'application') {
        const embed = new MessageEmbed()
        .setTitle('Application')
        .setColor(0x6699ff)
        .setDescription('Represents an OAuth2 Application.');
      message.channel.send(embed);
  }
});

client.on('message', async message => {
  if (message.content === 'base') {
        const embed = new MessageEmbed()
        .setTitle('Base')
        .setColor(0x6699ff)
        .setDescription('Represents a data model that is identifiable by a Snowflake (i.e. Discord API data models).');
      message.channel.send(embed);
  }
});

client.on('message', async message => {
  if (message.content === 'base client') {
        const embed = new MessageEmbed()
        .setTitle('Base Client')
        .setColor(0x6699ff)
        .setDescription('The base class for all clients.');
      message.channel.send(embed);
  }
});

client.on('message', async message => {
  if (message.content === 'base guild emoji') {
        const embed = new MessageEmbed()
        .setTitle('BaseGuildEmoji')
        .setColor(0x6699ff)
        .setDescription('Parent class for GuildEmoji and GuildPreviewEmoji.');
      message.channel.send(embed);
  }
});

client.on('message', async message => {
  if (message.content === 'base manager') {
        const embed = new MessageEmbed()
        .setTitle('BaseManager')
        .setColor(0x6699ff)
        .setDescription('Manages the API methods of a data model and holds its cache.');
      message.channel.send(embed);
  }
});

client.on('message', async message => {
  if (message.content === 'bit field') {
        const embed = new MessageEmbed()
        .setTitle('BitField')
        .setColor(0x6699ff)
        .setDescription('Data structure that makes it easy to interact with a bitfield.');
      message.channel.send(embed);
  }
});

client.on('message', async message => {
  if (message.content === 'broadcast dispatcher') {
        const embed = new MessageEmbed()
        .setTitle('BroadcastDispatcher')
        .setColor(0x6699ff)
        .setDescription('The class that sends voice packet data to the voice connection.');
      message.channel.send(embed);
  }
});

client.on('message', async message => {
  if (message.content === 'category channel') {
        const embed = new MessageEmbed()
        .setTitle('CategoryChannel')
        .setColor(0x6699ff)
        .setDescription('Represents a guild category channel on Discord.');
      message.channel.send(embed);
  }
});

client.on('message', async message => {
  if (message.content === 'channel') {
        const embed = new MessageEmbed()
        .setTitle('Channel')
        .setColor(0x6699ff)
        .setDescription('Represents any channel on Discord.');
      message.channel.send(embed);
  }
});

client.on('message', async message => {
  if (message.content === 'channel manager') {
        const embed = new MessageEmbed()
        .setTitle('ChannelManager')
        .setColor(0x6699ff)
        .setDescription('A manager of channels belonging to a client.');
      message.channel.send(embed);
  }
});

client.on('message', async message => {
  if (message.content === 'client') {
        const embed = new MessageEmbed()
        .setTitle('Client')
        .setColor(0x6699ff)
        .setDescription('The main hub for interacting with the Discord API, and the starting point for any bot.');
      message.channel.send(embed);
  }
});

client.on('message', async message => {
  if (message.content === 'client application') {
        const embed = new MessageEmbed()
        .setTitle('ClientApplication')
        .setColor(0x6699ff)
        .setDescription('Represents a Client OAuth2 Application.');
      message.channel.send(embed);
  }
});

client.on('message', async message => {
  if (message.content === 'client presence') {
        const embed = new MessageEmbed()
        .setTitle('ClientPresence')
        .setColor(0x6699ff)
        .setDescription('Client and Data Service.');
      message.channel.send(embed);
  }
});

client.on('message', async message => {
  if (message.content === 'client user') {
        const embed = new MessageEmbed()
        .setTitle('ClientUser')
        .setColor(0x6699ff)
        .setDescription('Represents the logged in clients Discord user.');
      message.channel.send(embed);
  }
});

client.on('message', async message => {
  if (message.content === 'client voice manager') {
        const embed = new MessageEmbed()
        .setTitle('ClientVoiceManager')
        .setColor(0x6699ff)
        .setDescription('Manages voice connections for the client.');
      message.channel.send(embed);
  }
});

client.on('message', async message => {
  if (message.content === 'collector') {
        const embed = new MessageEmbed()
        .setTitle('Collector')
        .setColor(0x6699ff)
        .setDescription('Abstract class for defining a new Collector.');
      message.channel.send(embed);
  }
});

client.on('message', async message => {
  if (message.content === 'discord api error') {
        const embed = new MessageEmbed()
        .setTitle('DiscordAPIError')
        .setColor(0x6699ff)
        .setDescription('Represents an error from the Discord API.');
      message.channel.send(embed);
  }
});

client.on('message', async message => {
  if (message.content === 'dm channel') {
        const embed = new MessageEmbed()
        .setTitle('DMChannel')
        .setColor(0x6699ff)
        .setDescription('Represents a direct message channel between two users.');
      message.channel.send(embed);
  }
});

client.on('message', async message => {
  if (message.content === 'emoji') {
        const embed = new MessageEmbed()
        .setTitle('Emoji')
        .setColor(0x6699ff)
        .setDescription('Represents an emoji, see GuildEmoji and ReactionEmoji.');
      message.channel.send(embed);
  }
});

client.on('message', async message => {
  if (message.content === 'guild') {
        const embed = new MessageEmbed()
        .setTitle('Guild')
        .setColor(0x6699ff)
        .setDescription('Represents a guild (or a server) on Discord.');
      message.channel.send(embed);
  }
});

client.on('message', async message => {
  if (message.content === 'guild audit logs') {
        const embed = new MessageEmbed()
        .setTitle('GuildAuditLogs')
        .setColor(0x6699ff)
        .setDescription('Audit logs entries are held in this class.');
      message.channel.send(embed);
  }
});

client.on('message', async message => {
  if (message.content === 'guild audit logs entry') {
        const embed = new MessageEmbed()
        .setTitle('GuildAuditLogsEntry')
        .setColor(0x6699ff)
        .setDescription('Audit logs entry.');
      message.channel.send(embed);
  }
});

client.on('message', async message => {
  if (message.content === 'guild channel') {
        const embed = new MessageEmbed()
        .setTitle('GuildChannel')
        .setColor(0x6699ff)
        .setDescription('Represents a guild channel from any of the following');
      message.channel.send(embed);
  }
});

client.on('message', async message => {
  if (message.content === 'guild channel manager') {
        const embed = new MessageEmbed()
        .setTitle('GuildChannelManager')
        .setColor(0x6699ff)
        .setDescription('Manages API methods for GuildChannels and stores their cache.');
      message.channel.send(embed);
  }
});

client.on('message', async message => {
  if (message.content === 'guild emoji') {
        const embed = new MessageEmbed()
        .setTitle('GuildEmoji')
        .setColor(0x6699ff)
        .setDescription('Represents a custom emoji.');
      message.channel.send(embed);
  }
});

client.on('message', async message => {
  if (message.content === 'guild emoji manager') {
        const embed = new MessageEmbed()
        .setTitle('GuildEmojiManager')
        .setColor(0x6699ff)
        .setDescription('Manages API methods for GuildEmojis and stores their cache.');
      message.channel.send(embed);
  }
});

client.on('message', async message => {
  if (message.content === 'guild emoji role manager') {
        const embed = new MessageEmbed()
        .setTitle('GuildEmojiRoleManager')
        .setColor(0x6699ff)
        .setDescription('Manages API methods for roles belonging to emojis and stores their cache.');
      message.channel.send(embed);
  }
});

client.on('message', async message => {
  if (message.content === 'guild manager') {
        const embed = new MessageEmbed()
        .setTitle('GuildManager')
        .setColor(0x6699ff)
        .setDescription('Manages API methods for Guilds and stores their cache.');
      message.channel.send(embed);
  }
});

client.on('message', async message => {
  if (message.content === 'guild member') {
        const embed = new MessageEmbed()
        .setTitle('GuildMember')
        .setColor(0x6699ff)
        .setDescription('Represents a member of a guild on Discord.');
      message.channel.send(embed);
  }
});

client.on('message', async message => {
  if (message.content === 'guild member manager') {
        const embed = new MessageEmbed()
        .setTitle('GuildMemberManager')
        .setColor(0x6699ff)
        .setDescription('Manages API methods for GuildMembers and stores their cache.');
      message.channel.send(embed);
  }
});

client.on('message', async message => {
  if (message.content === 'guild member role manager') {
        const embed = new MessageEmbed()
        .setTitle('GuildMemberRoleManager')
        .setColor(0x6699ff)
        .setDescription('Manages API methods for roles of a GuildMember and stores their cache.');
      message.channel.send(embed);
  }
});

client.on('message', async message => {
  if (message.content === 'guild preview') {
        const embed = new MessageEmbed()
        .setTitle('GuildPreview')
        .setColor(0x6699ff)
        .setDescription('Represents the data about the guild any bot can preview, connected to the specified guild.');
      message.channel.send(embed);
  }
});

client.on('message', async message => {
  if (message.content === 'guild preview emoji') {
        const embed = new MessageEmbed()
        .setTitle('GuildPreviewEmoji')
        .setColor(0x6699ff)
        .setDescription('Represents an instance of an emoji belonging to a public guild obtained through Discords preview endpoint.');
      message.channel.send(embed);
  }
});

client.on('message', async message => {
  if (message.content === 'guild template') {
        const embed = new MessageEmbed()
        .setTitle('GuildTemplate')
        .setColor(0x6699ff)
        .setDescription('Represents the template for a guild.');
      message.channel.send(embed);
  }
});

client.on('message', async message => {
  if (message.content === 'http error') {
        const embed = new MessageEmbed()
        .setTitle('HTTPError')
        .setColor(0x6699ff)
        .setDescription('Represents a HTTP error from a request.');
      message.channel.send(embed);
  }
});

client.on('message', async message => {
  if (message.content === 'integration') {
        const embed = new MessageEmbed()
        .setTitle('Integration')
        .setColor(0x6699ff)
        .setDescription('Represents a guild integration.');
      message.channel.send(embed);
  }
});

client.on('message', async message => {
  if (message.content === 'integration application') {
        const embed = new MessageEmbed()
        .setTitle('IntegrationApplication')
        .setColor(0x6699ff)
        .setDescription('Represents an Integrations OAuth2 Application.');
      message.channel.send(embed);
  }
});

client.on('message', async message => {
  if (message.content === 'intents') {
        const embed = new MessageEmbed()
        .setTitle('Intents')
        .setColor(0x6699ff)
        .setDescription('Data structure that makes it easy to calculate intents.');
      message.channel.send(embed);
  }
});

client.on('message', async message => {
  if (message.content === 'invite') {
        const embed = new MessageEmbed()
        .setTitle('Invite')
        .setColor(0x6699ff)
        .setDescription('Represents an invitation to a guild channel.');
      message.channel.send(embed);
  }
});


client.login('token');