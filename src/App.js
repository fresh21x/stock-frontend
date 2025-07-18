import React, { useEffect, useState } from "react";

const BACKEND_URL = "https://your-backend-url.onrender.com";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`${BACKEND_URL}/`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => setMessage("Error connecting to backend."));
  }, []);

  return (
    <div>
      <h1>My Stock Forecasting App</h1>
      <p>🔌 Backend says: {message}</p>
    </div>
  );
}

export default App;