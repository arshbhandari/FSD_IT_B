import { useState } from "react";
import logo from "./assets/logo.png";

function App() {
  const [text, setText] = useState("");
  const [response, setResponse] = useState("");

  const sendText = async () => {
    await fetch("http://localhost:5000/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    alert("Text sent to backend");
  };

  const showText = async () => {
    const res = await fetch("http://localhost:5000/show");
    const data = await res.json();
    setResponse(data.text);
  };

  return (
    <>
      <nav className="navbar">
        <img src={logo} className="logo-img" />
        <span>Home</span>
      </nav>

      <div className="container">
        <input
          type="text"
          placeholder="Enter text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="buttons">
          <button onClick={sendText}>SEND</button>
          <button onClick={showText}>SHOW</button>
        </div>

        <p>Response from backend: {response}</p>
      </div>
    </>
  );
}

export default App;
