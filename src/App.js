import React, { useEffect, useState } from "react";
import "./style.css";

const BACKEND_URL = "https://stock-platform-nkrj.onrender.com";

export default function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`${BACKEND_URL}/`)
      .then((res) => res.json()) // changed from res.text() to res.json()
      .then((data) => {
        setMessage(data.message); // use data.message
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
