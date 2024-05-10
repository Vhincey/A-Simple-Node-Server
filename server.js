
const {createServer } = require('http')
const os = require('os')

const requestHandler = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    if (req.method == 'GET'){
       const delay = Math.floor(Math.random() * 1000);
       console.log(delay) 
       setTimeout(() => {
        const cpuInfo = os.cpus();
        const osInfo = os.platform();
        res.writeHead(200)
        res.end(JSON.stringify({ cpuInfo, osInfo}))
       }, delay)
    }else {
        res.writeHead(405)
        res.end("Not right Method")
    }
}

const server = createServer(requestHandler);

server.listen(3000, () => {
    console.log("Server Running")
})
