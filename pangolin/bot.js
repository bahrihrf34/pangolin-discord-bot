const discord = require("discord.js");
const consol = require("./consol.js");
const param = require("./param.js");
var playerdcname = '';

const client = new discord.Client();
module.exports.CreatePangolin = CreatePangolin;

function CreatePangolin() {
    client.login(param.TOKEN);
    client.on('ready', getClientState);
    client.on('message', getClientMessage);
}

function getClientState(status) {
    consol.write('Pangolin started success...');
}

function getClientMessage(message) {
     let guild = client.guilds.cache.get(param.DCID);
     let member = guild.member(message.author);
     let nickname = member ? member.displayName : null;
     consol.write("[" + nickname + "] " + message.content)

    try {
        if(message.author.id == param.ID)
        {
        var array = message.content.split('@');
        if(array == null){return;}
        if (array[0] === 'sil') {
            if (array[1] != null) {
                message.delete()
                message.channel.bulkDelete(array[1]).then(() => {
                    message.channel.send(`:white_check_mark: ${array[1]} tane mesaj silindi`)
                })
            }
        }
    }
    } catch (e) {}
}

module.exports.sendChanngelMsg = sendChanngelMsg;

function sendChanngelMsg(channelid, msg) {
    try {
        const channel = client.channels.cache.get(channelid);
        channel.send(msg);
    } catch (e) {}
}