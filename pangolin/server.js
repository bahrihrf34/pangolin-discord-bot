const http = require('http') 
const bot = require('./bot.js') 
const param = require("./param.js"); 
const consol = require("./consol.js"); 

module.exports.ApiStart = ApiStart;

const server = http.createServer(function(request, response) { 
  if (request.method == 'POST') {
    var body = ''
     request.on('data', function(data) { 
      body += data
    })
    request.on('end', function() {
      process(body)
      response.writeHead(200, {'Content-Type': 'text/html'})
      response.end('<meta charset="UTF-8">  veriler alındı...')
    })
  }
  else {
    var html = `api get`
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.end(html)
  }
})

const port = param.PORT
const host = param.IP
function ApiStart()
{
    server.listen(port, host)
    consol.write(`listen api http://${host}:${port}`)
}
function process(data)
{
    consol.write("post data: " + data);
    var _data = data.split('&');
    var __data = _data[0].split('=');
    switch(__data[1])
    {
        case "0":
            var msg = _data[1].split('=');
            var channelid =_data[2].split('=');
            bot.sendChanngelMsg(channelid[1],msg[1]);
            break;
    }
}


