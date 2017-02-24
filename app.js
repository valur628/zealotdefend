const express = require('express');
const app = express(); 

const fs = require('fs');
const http = require('http');

app.use(express.static('./public'));
//public 내부에 있던 모든 폴더를 그냥 접속하면 보여주는 방식으로 만들겠다.
const server = http.createServer(app);
const env = {
    NODE_IP: process.env.NODE_IP, // openshift node.js 서버 아이피
    NODE_PORT: process.env.NODE_PORT
};

console.log('Listening...');
server.listen(env.NODE_PORT, env.NODE_IP, (error) => {
if (error) {
    throw new Error('ERROR! CAN NOT BINDING PORT!');
    return;
}
else {
    console.log('DONE!');
    console.log('test');
}
});
