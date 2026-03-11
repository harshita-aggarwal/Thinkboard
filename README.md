# 🧠 Thinkboard

A full-stack MERN web application for capturing, organizing, and sharing your ideas and thoughts — all in one place.

---

## ✨ Features

- 📝 Create, edit, and delete notes and ideas in real time
- 🗂️ Organize your thoughts on a clean, intuitive board interface
- 🔐 User authentication and personal note management
- 💾 Persistent data storage with MongoDB
- 📱 Responsive design that works across devices
- ⚡ Fast, reactive UI powered by React

---

## 🛠️ Tech Stack

| Layer      | Technology              |
|------------|-------------------------|
| Frontend   | React.js                |
| Backend    | Node.js + Express.js    |
| Database   | MongoDB + Mongoose      |
| Styling    | Tailwind CSS + DaisyUI  |

---

## ⚙️ Installation & Setup

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/)
- A MongoDB instance — local or via [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

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
MONGO_URI=your_mongodb_connection_string
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN:your_redis_secret_token
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
npm start
```

The frontend will run on `http://localhost:5173`.

---

### 4. You're all set! 🎉

Open `http://localhost:5173` in your browser to start using Thinkboard.

---

## 👩‍💻 Author

**Harshita Aggarwal** — [GitHub](https://github.com/harshita-aggarwal)
