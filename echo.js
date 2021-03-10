var http = require('http');

console.log("Starting server...")

var { MY_POD_NAME: pod_name, MY_POD_IP: pod_ip } = process.env
var pod_info_string = `\n[POD_NAME] ${pod_name}\n[POD_IP] ${pod_ip}`

http.createServer(function (_, res) {
    res.write("pong!\n" + pod_info_string);
    res.end();
}).listen(8080);

console.log("Started server!")
