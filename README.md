# 📝 Blog Platform

A full-featured blog platform built with React and Vite. Users can view, create, edit, and delete blog posts. The app supports theme switching (light/dark mode), filtering by category or author, and includes a basic login system.

---

## 🚀 Features

- 📰 View a list of blog posts
- 🔍 Filter posts by category or author
- 🧾 View full details of each post
- ✍️ Create, edit, and delete blog posts
- 🌗 Light/Dark theme toggle (stored in localStorage)
- 🔐 Basic authentication using React Context
- 🔄 Routing using React Router

---

## 🛠️ Tech Stack

- **Frontend:** React (via Vite)
- **Routing:** React Router
- **State Management:** React `useState`, `useEffect`, and Context API
- **Styling:** CSS (custom light/dark themes)
- **Persistence:** localStorage for theme and login state

---

## 📁 Project Structure

my-blog-app/
│
├── public/ # Static assets
├── src/
│ ├── components/ # Reusable components (PostList, PostItem, etc.)
│ ├── context/ # Theme and Auth Contexts
│ ├── data/ # Dummy post data (if not using API)
│ ├── pages/ # Page components (Home, PostDetails, Login, etc.)
│ ├── App.jsx # Main app component with routing
│ └── main.jsx # Entry point
├── package.json
└── README.md
