          const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
    response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
    http.get(`http://.glitch.me/`);
}, 280000);

const {
    Client,
    RichEmbed
} = require("discord.js");
var {
    Util
} = require('discord.js');
const {
    prefix,
    devs
} = require('./config')
const client = new Client({
    disableEveryone: true
})
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const moment = require("moment");
const fs = require('fs');
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const {
    get
} = require('snekfetch');
const db = require('quick.db')
const guild = require('guild');
const dateFormat = require('dateformat'); //npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(process.env.BOT_TOKEN);
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');

console.log("==================================")
console.log("1")
console.log("2")
console.log("3")
console.log("=========> Bot Online <=========")
console.log("========> TestBot <========")
console.log("=======> Token Bot **** <=======")
console.log("3")
console.log("2")
console.log("1")
console.log("====================================")
console.log("Bot Online 24/7");




client.on("message", message => {
  if (message.author.bot) return;

  if (message.content === prefix + "help") {
    message.channel.send(`**اوامـر الـبوت
● | ${prefix}buy netflix/netflixpro {الكمية}
● | ${prefix}stock لمعرفة كمية الحسابات المتوفرة

**`);
  }
});





const cools = [];
let netflix = JSON.parse(fs.readFileSync('./netflix.json', 'utf8')); // حسابات نتفلكس ضمان تجربة
let netflixpro = JSON.parse(fs.readFileSync('./netflixpro.json', 'utf8')); // حسابات نتفلكس ضمان شهر
let NETFLIXP = 10000; //حسابات نتفلكس ضمان تجربة
let NETFLIXPROP = 50000; //حسابات نتفلكس ضمان شهر 
let URID = '649686493995991070' //مين بيتحوله الكريديت
client.on('message', async message => { 
    let bOn = await db.fetch(`bOn_${message.guild.id}`)
    if (message == prefix + 'stock') {
        let ahmed = 0;
        let hossam = 0; 
      
        if (bOn === "off") return message.reply("**Sorry, Buying mode are disabled**")

        netflix.forEach(acc => {
            if (!acc.email) return;  
            ahmed++;
        }); 
        netflixpro.forEach(acc => {
            if (!acc.email) return;
            hossam++;
        }); 
       
      message.channel.send(new Discord.RichEmbed().setTitle('<a:fireeeCopy:757351588796039289> 𝙰ccount 𝙽etfli𝚇 - حسابات نتفلكس <a:fireeeCopy:757351588796039289>')
              
            .addField('** [ حساب نتفلكس ضمان تجربة فقط ] <:netflix:757359028790755338>**', `\`\`\`${ahmed} Account(s)\`\`\``, true).addField('** [ حساب نتفلكس ضمان شهر كامل ] <:netflix:757359028790755338>**', `\`\`\`${hossam} Account(s) \`\`\``, true).setColor('FF0000') 
            .addField('**الاســعــار <a:cashh:757351591799029811>**' , `\`\`\`[ NETFLIX = ضمان تجربة ] ${NETFLIXP} Credits \`\`\`\n \`\`\`[ NETFLIXPRO = ضمان شهر ] ${NETFLIXPROP} Credits \`\`\``)      
            .addField('**ملاحـضة هــامة  <:Ticket:757353790373625908>**', `\`\`\`عدم قرائتك للشروط ليس سببا لتعويضك\`\`\``)              
            .setImage('http://i8.ae/F1vF')
	        
            .setFooter('© جميع الحقوق محفوضة لدى سيرفر نتفلكس', 'https://techguru.fr/wp-content/uploads/sites/7/2018/06/Netflix_icon.svg_.png'))
	          


    
    }  


  
    if (message.content.startsWith(prefix + 'buy')) { 
        if (bOn === "off") return message.reply("**للاسف الشراء مقفل حاليا **")

        let cmd = message.content.split(" ")[1]; 
        let args = message.content.split(" ")[2]; 
        if (!cmd || !args || isNaN(args)) return message.channel.send(`** يرجى كتابة الامر الصحيح على سبيل المتال** : 
$buy netflix **[ الكمية ]**
$buy netflixpro ** [ لكمية ]**`) 
      
        if (cmd == 'netflix') { 
          if (cools [message.author.id + message.guild.id] && cools [message.author.id + message.guild.id].status == "on")return message.reply("**لديك عملية شراء بل فعل.**"); 
            let ahmed = 0
            netflix.forEach(acc => {
                if (!acc.email) return;
                ahmed++;
            });
            if (ahmed < 1) return message.channel.send("لا يوجد حسابات")
            if (ahmed < args) return message.channel.send("لا يوجد حسابات كافية") // 
            message.author.send('**أهلا لقد قمت للتو بطلب حساب نتفلكس . لقد قمت فقط بمراجعة الخاص بك ان كان مفتوح ام مغلق :diamond_shape_with_a_dot_inside: **').then(() => {
              
              
              cools[message.author.id + message.guild.id] = {
                status: "on"
              };
              let P = Math.floor(args * (NETFLIXP)) 
                message.channel.send(new Discord.RichEmbed().setAuthor(message.author.tag, message.author.avatarURL).setColor('FF0000')
                    .setDescription(`**اكتب الامر التالي لأكمال عمليه الشراء
#credits <@${URID}> ${P}
لديك 3 دقائق قبل الالغاء.**`));
                let P2 = Math.floor(P - (P * (5 / 100)));///3
                let filter = response => response.author.id == "282859044593598464" && response.mentions._content.includes(`**:moneybag: | ${message.author.username}, has transferred \`$${P2}\` to <@${URID}> **`); 
                message.channel.awaitMessages(filter, {
                        maxMatches: 1,
                        time: 240000,
                        errors: ['time']
                    })
                    .then(collected => { 
                        let C = 0;
                        let Accs = []; 
                        netflix.forEach(acc => {
                            if (!acc.email) return;
                            if (C == args) return;;
                            Accs.push(`Email: ${acc.email} | pass: ${acc.pass}`);
                            C++;
                            delete acc.email;
                            delete acc.pass;
                            fs.writeFile("./netflix.json", JSON.stringify(netflix), (err) => {
                                if (err) console.error(err)
                            })
                        });
                  delete cools [message.author.id + message.guild.id];
                        message.channel.send('**Done,,\nNow Check Your DM**!')
                        message.author.send(`Your Accs :)\`\`\`json\n${Accs.join("\n")}\n\`\`\`سيتم حذف الرساله بعد 5 دقائق !`).then(M => M.delete(5 * 60 * 1000))
                    });
            }).catch(err => {
                  delete cools [message.author.id + message.guild.id];
                return message.channel.send('**:x: Please Open Your DM**!')
            })
        }
        if (cmd == 'netflixpro') {
                    if (cools [message.author.id + message.guild.id] && cools [message.author.id + message.guild.id].status == "on")return message.reply("**لديك عملية شراء بل فعل.**"); 

            let ahmed = 0;
            netflixpro.forEach(acc => {
                if (!acc.email) return;
                ahmed++;
            })
            if (ahmed < 1) return message.channel.send("لا يوجد حسابات")
            if (ahmed < args) return message.channel.send("لا يوجد حسابات كافية")
            message.author.send('**أهلا لقد قمت للتو بطلب حساب نتفلكس . لقد قمت فقط بمراجعة الخاص بك ان كان مفتوح ام مغلق :diamond_shape_with_a_dot_inside: **').then(() => {
                let P = Math.floor(args * (NETFLIXPROP)) 
                cools[message.author.id + message.guild.id] = {
                status: "on"
              };
                        let P3 = Math.floor(args * (NETFLIXPROP)) 
                message.channel.send(new Discord.RichEmbed().setAuthor(message.author.tag, message.author.avatarURL).setColor('FF0000')
                                     
                                     
                  
                        .setTitle('<a:ok:757351594093183087> Successful <a:ok:757351594093183087>')

                        .setDescription(`**اكتب الامر التالي لأكمال عمليه الشراء
#credits <@${URID}> ${P3}
لديك 3 دقائق قبل الالغاء.**`));
              
              
              
                 P = Math.floor(P3 - (P3 * (5 / 100))); ///4
                   let filter = response => response.author.id == "282859044593598464" && response.mentions._content.includes(`**:moneybag: | ${message.author.username}, has transferred \`$${P}\` to <@${URID}> **`); 
                message.channel.awaitMessages(filter, {
                        maxMatches: 1,
                        time: 240000,
                        errors: ['time']
                    })
                    .then(collected => { 
                        let C = 0;
                        let Accs = []; 
                        netflixpro.forEach(acc => {
                            if (!acc.email) return;
                            if (C == args) return;;
                            Accs.push(`Email: ${acc.email} | pass: ${acc.pass}`);
                            C++;
                            delete acc.email;
                            delete acc.pass;
                            fs.writeFile("./netflixpro.json", JSON.stringify(netflixpro), (err) => {
                                if (err) console.error(err)
                            })
                        });
                  delete cools [message.author.id + message.guild.id];
                        message.channel.send('**Done, Now Check Your DM**!')
                        message.author.send(`Your Accs :)\`\`\`json\n${Accs.join("\n")}\n\`\`\`سيتم خذف الرساله بعد 5 دقائق !`).then(M => M.delete(5 * 60 * 1000))
                    });
            }).catch(err => {
                  delete cools [message.author.id + message.guild.id];
            })
        }
    }

  if (message.content.startsWith(prefix + 'add')) {


        if (message.author.id !== URID) return message.reply("** فقط <@" + URID + "> يستطيع اضافة الحسابات الى البوت.**");
        let type = message.content.split(" ")[1];
        let email = message.content.split(" ")[2];
        let pass = message.content.split(" ")[3];

        let types = ["netflix", "netflixpro", "send"]

        if (!email) return message.reply("Email?");
        if (!pass) return message.reply("Password !")
        if (type == "netflix") {
            let alt = {
                "email": `${email}`,
                "pass": `${pass}`
            }
            netflix.push(alt)
            fs.writeFile("./netflix.json", JSON.stringify(netflix), (err) => {
                if (err) console.error(err)
            })

            message.reply("**تمت التعبئة بنجاح**");


        } else if (type == "netflixpro") {
let alt = {      
  "email" : `${email}`,
"pass" : `${pass}`
}
            netflixpro.push(alt)
            fs.writeFile("./netflixpro.json", JSON.stringify(netflixpro), (err) => {
                if (err) console.error(err)
            })

            message.reply("**تمت التعبئة بنجاح**");


        } 
    }
    if (message.content.startsWith(prefix + 'give')) {

        let type = message.content.split(" ")[2];
        let args = message.content.split(" ")[3];
        let user = message.mentions.users.first()

        if (!user) return message.channel.send("**Please mention a user**")

        if (!type) return message.channel.send("**Please input a alt type**")
        if (!args[0]) return message.reply("**Please input amount**")
        if (type === "netflix") {
            let C = 0;
            let Accs = []; 
            netflix.forEach(acc => {

                if (!acc.email) return;
                if (C == args) return;;
                Accs.push(`Email: ${acc.email} | pass: ${acc.pass}`);
                C++; 
                delete acc.email;
                delete acc.pass;

                fs.writeFile("./netflix.json", JSON.stringify(netflix), (err) => {
                    if (err) console.error(err)
                }) 
            });
            message.channel.send('**Done**')
            user.send(`${message.author.username} has been gifted you a netflix account \n \`\`\`${Accs.join("\n")}\`\`\` `).then(M => M.delete(5 * 60 * 1000))

        }

        if (type === "netflixpro") {
            let C = 0;
            let Accs = [];
            netflixpro.forEach(acc => {

                if (!acc.email) return;
                if (C == args) return;;
                Accs.push(`Email: ${acc.email} | pass: ${acc.pass}`);
                C++; 
                delete acc.email;
                delete acc.pass;

                fs.writeFile("./netflixpro.json", JSON.stringify(netflixpro), (err) => {
                    if (err) console.error(err)
                }) 
            });
            message.channel.send('**Done**')
            user.send(`${message.author.username} has been gifted you a netflixpro account \n \`\`\`${Accs.join("\n")}\`\`\` `).then(M => M.delete(5 * 60 * 1000))

        }

    }

})





///تغير الحالة

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
client.on("ready", () => {
    client.user.setStatus("online"); ///تعديل مهم لون الحالة
});
client.on("ready", () => {
    client.user.setActivity(`$help`, { /// خخخخخخ ك
        type: "PLAYING"
    }); ///تعديل حالة البوت
});

//online
//idle
//dnd
//offline




