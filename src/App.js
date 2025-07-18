
import React, { useEffect, useState } from "react";
import "./style.css";

const BACKEND_URL = "https://stock-platform-nkrj.onrender.com"; // Your backend URL

export default function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`${BACKEND_URL}/`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("⚠️ Error connecting to backend."));
  }, []);

  return (
    <div>
      <h1>📈 My Stock Forecasting App</h1>
      <p>🔌 Backend says: {message}</p>
    </div>
  );
}
