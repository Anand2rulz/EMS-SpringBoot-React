import { useState } from "react";
import API from "../services/Api";
import "./ChatBot.css";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [chats, setChats] = useState([]);

  const send = async () => {
    if (!msg.trim()) return;

    const userMsg = { from: "user", text: msg };
    setChats(prev => [...prev, userMsg]);
    setMsg("");

    try {
      const res = await API.post("/chat", msg, {
        headers: { "Content-Type": "text/plain" }
      });

      setChats(prev => [
        ...prev,
        { from: "bot", text: res.data }
      ]);
    } catch (err) {
      setChats(prev => [
        ...prev,
        { from: "bot", text: "❌ Server error. Check backend." }
      ]);
    }
  };

  return (
    <>
      <div className="chat-fab" onClick={() => setOpen(!open)}>
        🤖
      </div>

      {open && (
        <div className="chat-box">
          <div className="chat-header">
            EMS AI Assistant
            <span onClick={() => setOpen(false)}>✖</span>
          </div>

          <div className="chat-body">
            {chats.map((c, i) => (
              <div key={i} className={`msg ${c.from}`}>
                {c.text}
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              value={msg}
              onChange={e => setMsg(e.target.value)}
              placeholder="Ask something..."
              onKeyDown={e => e.key === "Enter" && send()}
            />
            <button onClick={send}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}
