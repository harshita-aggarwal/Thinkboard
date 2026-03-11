# 🧠 Thinkboard

A full-stack MERN web application for capturing, organizing, and managing your personal notes — with secure authentication so your thoughts stay private.

---

## ✨ Features

- 🔐 JWT-based authentication (register, login, logout)
- 📝 Create, view, edit, and delete your personal notes
- 🔍 Search and filter notes in real time
- 🌗 Auto dark/light theme based on system preferences (dim / nord)
- ⚡ Rate limiting with Upstash Redis
- 📱 Responsive design across all devices
- 💾 Persistent data storage with MongoDB

---

## 🛠️ Tech Stack

| Layer      | Technology                        |
|------------|-----------------------------------|
| Frontend   | React.js + Vite                   |
| Backend    | Node.js + Express.js              |
| Database   | MongoDB + Mongoose                |
| Auth       | JWT + bcryptjs                    |
| Styling    | Tailwind CSS + DaisyUI            |
| Rate Limit | Upstash Redis                     |

---

## ⚙️ Installation & Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/)
- A MongoDB instance via [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- An [Upstash](https://upstash.com/) Redis database

---

### 1. Clone the Repository
```bash
git clone https://github.com/harshita-aggarwal/Thinkboard.git
cd Thinkboard
```

---

### 2. Set Up the Backend
```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` directory:
```env
PORT=5001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
```

Start the backend server:
```bash
npm run dev
```

The backend will run on `http://localhost:5001`.

---

### 3. Set Up the Frontend
```bash
cd ../frontend
npm install
npm run dev
```

The frontend will run on `http://localhost:5173`.

---

### 4. You're all set! 🎉

Open `http://localhost:5173` in your browser, register an account, and start noting!

---

## 👩‍💻 Author

**Harshita Aggarwal** — [GitHub](https://github.com/harshita-aggarwal)