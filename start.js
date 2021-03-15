const bot = require("./pangolin/bot.js");
const consol = require("./pangolin/consol.js"); 
const param = require("./pangolin/param.js"); 
const server = require("./pangolin/server.js"); 

consol.write('Pangolin Bot | Versiyon ' + param.VERSION);
consol.write("Started pangolin services...");
bot.CreatePangolin();
consol.write("Started api server...");
server.ApiStart();
