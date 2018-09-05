const Discord = require("discord.js");

const ms = require("ms");

var weather = require('weather-js');

var translate = require('node-google-translate-skidz');

const token = "NDI0Mjc4NjE4MjQ4NzA4MTE2.DmtGvA.cALjQ1aXP4kkc-TbE4T-bZtoiNs";

var bot = new Discord.Client();

var translate = require('node-google-translate-skidz');

var memes = [
    "https://i.imgur.com/5XIQ1hv.jpg","https://i.imgur.com/x9hgbGe.jpg","https://i.imgur.com/sBw5Y4n.png","https://i.imgur.com/mEICPMO.jpg","https://i.imgur.com/iuxb6eg.png"
];
bot.on("ready", function(){
    console.log("Bot Running");
    var size;
    bot.guilds.forEach(g =>{
    size = g.memberCount
    })
    bot.user.setGame(size +" "+"אנשים בשרת !");
        setInterval (function () {
            bot.channels.get('420295688044412931').send("לכו תנוו בסאבבבבבב נודרררר : https://www.youtube.com/channel/UCBJXWr7ADf8p29xjEFwXM7A");
        }, 86400 * 1000);
  })
bot.on("guildMemberAdd",function(member)
{
    var mem = member.user;
    var embed = new Discord.RichEmbed()
    .setTitle("ברוך הבא לשרת !")
    .setAuthor(member.user.username)
    .setColor("#0a68ff")
    .addField("מתי הצטרף ?",member.joinedAt)
    .setThumbnail(mem.displayAvatarURL)
  member.guild.channels.find("id","420690395349909511").sendMessage(embed);
  let Role = member.guild.roles.find("name", "Member");
   member.addRole(Role);
   bot.guilds.forEach(g =>{
    size = g.memberCount
    })
    bot.user.setGame(size +" "+"אנשים בשרת !");
});
bot.on("guildMemberRemove",function(member)
{
    var mem = member.user;
    var lastMsg = member.user.lastMessage;
     var embed = new Discord.RichEmbed()
     .setTitle("סעמק פחות אחד")
     .setAuthor(member.user.username)
     .setColor("#0a68ff")
     .setThumbnail(mem.displayAvatarURL)
     .addField("מתי הצטרף ?",member.joinedAt)
     .addField("מה ההודעה האחרונה שהוא שלח ?",lastMsg)
   member.guild.channels.find("id","420690395349909511").send(embed);
    bot.guilds.forEach(g =>{
     size = g.memberCount
     })
     bot.user.setGame(size +" "+"אנשים בשרת");
})
bot.on("message", async message => {
    if(message.author.bot) return;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);  
    if(message.content.includes('אדם'))
{
    message.channel.send("הוא הרג את נינגה XDDDDD");
}
    if(message.content.includes('גיא'))   
    {
        message.channel.send("אל תשא את שם אדוניך לשווא");
    }
    if(message.content.includes('יאיר'))   
    {
        message.channel.send("הוא שונא חמציצים XDDDDDDDDDDDDDDDDDDDDDDDDDDD");
    }
    if(message.content.includes('עומר'))   
{
        message.channel.send("אצל הדודה והדוד XDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD");
}
if(message.content.includes('מיכל'))   
{
    message.channel.send("מיכל הדלי XDDDDDDD");
}
    if (cmd === "!twitter")
    {
        message.channel.send("קישור לטויטר : https://twitter.com/Korridom");
    }
    if(cmd === "!streamlabs")
    {
        message.channel.send("קישור לתרומות : https://streamlabs.com/causwecan (לתרום רק באישור מלא של ההורים)");
    }
    if(cmd === "!youtube")
    {
        message.channel.send("לכו תנוו בסאבבבבבב נודרררר : https://www.youtube.com/channel/UCBJXWr7ADf8p29xjEFwXM7A");
    }
    if(message.content.includes('מיזהבוטהיפהזה')) 
    {
        message.channel.send("אניייייייייייייייייייייייי!");
    }
    if(cmd === "!clear")
    {
        message.delete();
        if(!message.member.hasPermissions("MANAGE_MESSAGES")) return message.reply("אין לך הרשאות לפקודה זאת");
        if(!args[0]) return message.channel.sendMessage("אנא רשום כמה הודעות אתה רוצה למחוק !");
        var amount = args[0];
        message.channel.bulkDelete(amount)
        .then(() =>
        {
          message.channel.send("מחקתי"+" "+amount+" "+"הודעות").then(message => message.delete(5000));
        });
    }
    if(cmd === "!say")
    {
        message.delete();
        var text = args.join(" ");
        message.channel.send(text);
    }
    if(cmd === "!muted")
    {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("אין לך הרשאות לפקודה זאת.");
        if(args[0] == "help"){
          message.reply("Usage: !muted <user> <1s/m/h/d>");
          return;
        }
        let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!tomute) return message.reply("Couldn't find user.");
        if(tomute.hasPermission("ADMINISTRATOR")) return message.reply("לא יכול להשתיק את המשתמש שצוין");
        let reason = args.slice(2).join(" ");
        if(!reason) return message.reply("לא צינת סיבה");
      
        let muterole = message.guild.roles.find(`name`, "muted");
        if(!muterole){
          try{
            muterole = await message.guild.createRole({
              name: "muted",
              color: "#000000",
              permissions:[]
            })
            message.guild.channels.forEach(async (channel, id) => {
              await channel.overwritePermissions(muterole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false
              });
            });
          }catch(e){
            console.log(e.stack);
          }
        }
        let mutetime = args[1];
        if(!mutetime) return message.reply("לא ציינת זמן להשתק");
      
        message.delete().catch(O_o=>{});
      
        try{
          await tomute.send(`היי הורחקת מהצאט למשך${mutetime}.אנא נסה לכתוב שוב לאחר ההשתק`)
        }catch(e){
          message.channel.send(`המשתמש הושתק אבל ההודעות הפרטיות שלו חסומות המשתמש הורחק ל : ${mutetime}`)
        }
      
        let muteembed = new Discord.RichEmbed()
        .setDescription(`Mute executed by ${message.author}`)
        .setColor("#0263ff")
        .addField("Muted User", tomute)
        .addField("Muted in", message.channel)
        .addField("Time", message.createdAt)
        .addField("Length", mutetime)
        .addField("Reason", reason);
      
        let incidentschannel = message.guild.channels.find(`name`, "bot-logs");
        if(!incidentschannel) return message.reply("אנא צור חדר לכל הציונים של ההשתקות");
        incidentschannel.send(muteembed);
      
        await(tomute.addRole(muterole.id));
      
        setTimeout(function(){
          tomute.removeRole(muterole.id);
          message.channel.send(`<@${tomute.id}> כבר לא בהשתק !`);
        }, ms(mutetime));

    }
    if(cmd === "!hebrew")
    {
        translate({
            text: args.join(" "),
            source: 'en',
            target: 'he'
          }, function(result) {
            let trans = result.translation;
            message.channel.send(trans);
          });
    }
    if (cmd === "!english")
    {
        translate({
            text: args.join(" "),
            source: 'he',
            target: 'en'
          }, function(result) {
            let trans1 = result.translation;
            message.channel.send(trans1);
          });
    }
    if(cmd === "!weather")
    {
        weather.find({search: 'rishon lezion, il', degreeType: 'c'}, function(err, result) {
            if(err) console.log(err);
           let current = result[0].current;
           let temp = current.temperature;
           
           message.channel.send(`הטמפרטורה בישראל היא :${temp}.`);
            
          });
    }
    if(cmd === "!meme"){
        message.channel.send({files: [memes[Math.floor(Math.random() * memes.length)]]});
    }
    

})
bot.login(token);