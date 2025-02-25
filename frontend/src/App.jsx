import React, { useEffect, useState } from "react";
import API from "./api"; // Import Axios instance

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    API.get("/") // Fetch data from backend
      .then((res) => setMessage(res.data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <h1>{message || "Sahaya - OM NAMAH SHIVAYE... Sanchit ka brilliant idea 🧠🧠🧠"}</h1>
  );
}

export default App;
