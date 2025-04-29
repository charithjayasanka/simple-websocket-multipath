# WebSocket Multi-Path Server and Client Example

This project demonstrates a simple Node.js WebSocket server and client setup where multiple WebSocket **resource paths** (e.g., `/chat`, `/updates`, `/notifications`) are handled separately.  
It uses the lightweight `ws` library without any frameworks.

---

## 📂 Project Structure

```
.
├── server.js   # Node.js WebSocket Server handling multiple paths
└── client.js   # Node.js WebSocket Client connecting to different paths
```

---

## 🚀 Features

- Handle multiple WebSocket paths (`/chat`, `/updates`, `/notifications`)
- Clean separation of concerns per path
- Sends welcome message to client upon connection (e.g., "Connected to WebSocket resource: /chat")
- Full error handling for:
    - Connection errors
    - Unexpected server responses
    - Message send failures
    - Socket closures
- 404 handling for invalid paths
- Clear console logging for all important events
- Simple and minimal, ideal for learning or extending

---

## 🛠️ Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/charithjayasanka/simple-websocket-multipath.git
    cd simple-websocket-multipath
    ```

2. Install dependencies:

    ```bash
    npm install ws
    ```

---

## 📜 Usage

### Start the WebSocket server

```bash
node server.js
```

The server will start listening on `ws://localhost:8080`.

### Start the WebSocket client

```bash
node client.js
```

The client will connect to:
- `ws://localhost:8080/chat`
- `ws://localhost:8080/updates`
- `ws://localhost:8080/notifications`

and exchange simple test messages.

---

## 🖥️ Example Output

### Server Console:

```
🚀 Server listening on port 8080
🔄 Incoming WebSocket upgrade request: /updates
✅ New connection on /updates from ::ffff:127.0.0.1
🔄 Incoming WebSocket upgrade request: /chat
✅ New connection on /chat from ::ffff:127.0.0.1
🔄 Incoming WebSocket upgrade request: /notifications
✅ New connection on /notifications from ::ffff:127.0.0.1
📩 Message on /updates: Hello /updates!
📩 Message on /chat: Hello /chat!
📩 Message on /notifications: Hello /notifications!
```

### Client Console:

```
✅ Connected to /updates
📩 Received from /updates: 🟢 Connected to WebSocket resource: /updates
✅ Connected to /chat
📩 Received from /chat: 🟢 Connected to WebSocket resource: /chat
✅ Connected to /notifications
📩 Received from /notifications: 🟢 Connected to WebSocket resource: /notifications
📩 Received from /updates: Echo from /updates: Hello /updates!
📩 Received from /chat: Echo from /chat: Hello /chat!
📩 Received from /notifications: Echo from /notifications: Hello /notifications!
```

---

## ⚠️ Important Notes

- If you connect to an unknown path (e.g., `/invalid`), the server will respond with a `404 Not Found` and destroy the socket.
- This project uses the **bare WebSocket API** (`ws`) — no Socket.IO or other abstractions.
- This project is intentionally minimal and can be extended for production-grade features (e.g., authentication, rooms, broadcasting).

---

## 📚 Related Links

- [Node.js WebSocket API (ws)](https://github.com/websockets/ws)
- [WebSocket Protocol Specification (RFC 6455)](https://datatracker.ietf.org/doc/html/rfc6455)

---

## ❤️ Contributions

Contributions, issues, and feature requests are welcome!  
Feel free to open a pull request or an issue if you find a bug or want to suggest an improvement.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

# 🚀 Happy WebSocket-ing!
