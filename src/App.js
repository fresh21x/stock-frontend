import React, { useEffect, useState } from "react";
import "./style.css";

// ✅ This is your live Flask backend URL
const BACKEND_URL = "https://stock-platform-nkrj.onrender.com";

export default function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`${BACKEND_URL}/`)
      .then((res) => res.text())
      .then((data) => {
        setMessage(data);
      })
      .catch((err) => {
        setMessage("⚠️ Error connecting to backend.");
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h1>📈 My Stock Forecasting App</h1>
      <p>🔌 Backend says: {message}</p>
    </div>
  );
}
