  /* let guild = client.guilds.cache.get(param.DCID);
    let member = guild.member(message.author);
    let nickname = member ? member.displayName : null;*/

    let guild = client.guilds.cache.get(param.DCID);
    guild.members.cache.forEach(memberss => console.log(memberss.user.tag)); 
    
    //consol.write("[" + nickname + "] " + message.content);