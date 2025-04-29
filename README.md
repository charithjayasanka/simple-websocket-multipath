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
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
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

**Server Console:**

```
🚀 Server listening on port 8080
🔄 Incoming WebSocket upgrade request: /chat
✅ New connection on /chat from ::1
📩 Message on /chat: Hello Chat!
```

**Client Console:**

```
✅ Connected to /chat
📩 Received from /chat: Echo from /chat: Hello Chat!
✅ Connected to /updates
📩 Received from /updates: Echo from /updates: Hello Updates!
✅ Connected to /notifications
📩 Received from /notifications: Echo from /notifications: Hello Notifications!
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
