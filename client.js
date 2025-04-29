const WebSocket = require('ws');

// Function to create and manage WebSocket connections safely
function createWebSocketConnection(url, name) {
    const ws = new WebSocket(url);

    ws.on('open', () => {
        console.log(`✅ Connected to ${name}`);
        ws.send(`Hello ${name}!`);
    });

    ws.on('message', (message) => {
        console.log(`📩 Received from ${name}: ${message.toString()}`);
    });

    ws.on('error', (err) => {
        console.error(`❌ Error on ${name}:`, err.message);
    });

    ws.on('close', (code, reason) => {
        console.warn(`⚠️ Connection to ${name} closed (code: ${code}, reason: ${reason.toString() || 'No reason'})`);
    });

    ws.on('unexpected-response', (request, response) => {
        console.error(`❗ Unexpected response on ${name}: Status code ${response.statusCode}`);
    });

    return ws;
}

// Connect to different paths
const chatSocket = createWebSocketConnection('ws://localhost:8080/chat', '/chat');
const updatesSocket = createWebSocketConnection('ws://localhost:8080/updates', '/updates');
const notificationsSocket = createWebSocketConnection('ws://localhost:8080/notifications', '/notifications');
