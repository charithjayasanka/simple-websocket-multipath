const http = require('http');
const WebSocket = require('ws');

// Create HTTP server
const server = http.createServer();

// Create WebSocket servers for each path
const wssChat = new WebSocket.Server({ noServer: true });
const wssUpdates = new WebSocket.Server({ noServer: true });
const wssNotifications = new WebSocket.Server({ noServer: true });

// Common function to handle events safely
function setupWebSocketServer(wss, name) {
    wss.on('connection', (ws, request) => {
        console.log(`✅ New connection on ${name} from ${request.socket.remoteAddress}`);

        ws.on('message', (message) => {
            console.log(`📩 Message on ${name}: ${message}`);
            try {
                ws.send(`Echo from ${name}: ${message}`);
            } catch (err) {
                console.error(`❌ Failed to send message on ${name}:`, err.message);
            }
        });

        ws.on('error', (err) => {
            console.error(`❌ Error on connection at ${name}:`, err.message);
        });

        ws.on('close', (code, reason) => {
            console.warn(`⚠️ Connection on ${name} closed (code: ${code}, reason: ${reason.toString() || 'No reason'})`);
        });
    });

    wss.on('error', (err) => {
        console.error(`❗ Server error on ${name}:`, err.message);
    });
}

// Attach handlers for each WebSocket server
setupWebSocketServer(wssChat, '/chat');
setupWebSocketServer(wssUpdates, '/updates');
setupWebSocketServer(wssNotifications, '/notifications');

// Handle HTTP Upgrade requests safely
server.on('upgrade', (request, socket, head) => {
    const pathname = request.url;
    console.log(`🔄 Incoming WebSocket upgrade request: ${pathname}`);

    if (pathname === '/chat') {
        wssChat.handleUpgrade(request, socket, head, (ws) => {
            wssChat.emit('connection', ws, request);
        });
    } else if (pathname === '/updates') {
        wssUpdates.handleUpgrade(request, socket, head, (ws) => {
            wssUpdates.emit('connection', ws, request);
        });
    } else if (pathname === '/notifications') {
        wssNotifications.handleUpgrade(request, socket, head, (ws) => {
            wssNotifications.emit('connection', ws, request);
        });
    } else {
        console.warn(`🚫 Unknown WebSocket path: ${pathname}. Destroying socket.`);
        socket.write('HTTP/1.1 404 Not Found\r\n\r\n');
        socket.destroy();
    }
});

// Handle server errors
server.on('error', (err) => {
    console.error('❗ HTTP Server error:', err.message);
});

// Start server
server.listen(8080, () => {
    console.log('🚀 Server listening on port 8080');
});
