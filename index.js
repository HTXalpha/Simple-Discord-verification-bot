const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config.json")

client.login(config.token);

//input your discord id's where you want the bot to operate
const MESSAGE_ID = "";
const ROLE_ID = "";
const EMOJI_ID = "";
const CHANNEL_ID = "";
const GUILD_ID = "";
let GUILD;

client.login(TOKEN);

client.on('ready', () => {
	client.user.setActivity("Verifying..")// you can set this to what you want
  
})
  
client.on("ready", () => {
    GUILD = client.guilds.cache.get(GUILD_ID);
    let msg = GUILD.channels.cache.get(CHANNEL_ID).messages.fetch(MESSAGE_ID); 
    console.log(`Logged in as ${client.user.tag}!`);
})

client.on("messageReactionAdd", (reaction, user) => {
    if(reaction.emoji.id == EMOJI_ID && reaction.message.id == MESSAGE_ID){
        let member = GUILD.members.cache.get(user.id);
        member.roles.add(ROLE_ID);
    }
})

client.on("messageReactionRemove", (reaction, user) => {
    if(reaction.emoji.id == EMOJI_ID && reaction.message.id == MESSAGE_ID){
        let member = GUILD.members.cache.get(user.id);
        member.roles.remove(ROLE_ID);
    }
})

