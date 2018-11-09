const Discord = require("discord.js");
var client - new Discord.Client();
var prefix = ("/")

client.on('ready', function() => {
  console.log('Ready');
});

bot.on("message", function(message) {
	if (message.author.equals(bot.user)) return;
	
	if (message.content -- "hello") {
		message.channel.sendMessage("Hi, there!");
	}
});

client.on("ready", function() {
	console.log("Ready");
	
});

clinet.on("message", function(message) {
	  if (message.author.equals(client.user)) return;
	  
	  if (!message.content.startWith(prefix)) return;
	  
	  var args - message.content.substring(prefix.length).split(" ");
	  
	  switch (args[0]. toLowerCase()) {
		  case "ping":
			 message.channel.sendMessage("Pong!");
			 break
		  case "info":
		     message.channel.sendMessage("to bot emiltoja");
			 break;
		  case "testt":
		     if (args[1]) message.channe.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
			 else message.channel.sendMessage("testuje");
			 break;
		  case "embed":
		    var embed = new Discord.RichEnbed()
				.addField("Test Title", "test costam", true)
				.setColor(0x00FFFFFF)
			 message.channel.sendEnbed(enbed);
			 break;
		  case "noticeme":
			 message.channel.sendMessage(message.author.torString() + " bitch");
			 break;
		  default:
			 message.channel.sendMessage("Invilad command");
	  }
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
