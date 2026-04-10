import { useState, useRef, useEffect } from "react";
import "./ChatBot.css";
import API from "../api";

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  // ✅ Auto scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat, loading]);

  const sendMessage = async () => {
    const trimmedMessage = message.trim();
    if (!trimmedMessage) return;

    // ✅ Clear input immediately (better UX)
    setMessage("");

    // ✅ Add user message instantly
    const userMsg = { sender: "user", text: trimmedMessage };
    setChat((prev) => [...prev, userMsg]);

    setLoading(true);

    try {
      // ✅ Send to backend
      const res = await API.post("chat/", {
        message: trimmedMessage
      });

      console.log("API Response:", res.data); // DEBUG

      // ✅ Handle response safely
      const botReply =
        res?.data?.reply || "⚠️ No response from AI";

      const botMsg = {
        sender: "bot",
        text: botReply
      };

      setChat((prev) => [...prev, botMsg]);

    } catch (err) {
      console.error("Error:", err);

      setChat((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "⚠️ Server error. Please try again."
        }
      ]);
    }

    setLoading(false);
  };

  // ✅ Enter key support
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <div className="chat-toggle" onClick={toggleChat}>
        💬
        <span className="pulse"></span>
      </div>

      {/* Chat Window */}
      <div className={`chat-container ${isOpen ? "open" : ""}`}>

        <div className="chat-header">
          🌾 Krishi AI
          <span onClick={toggleChat}>✖</span>
        </div>

        <div className="chat-box">
          {chat.length === 0 && (
            <div className="msg bot welcome">
              👋 Ask me about crops, weather, farming tips!
            </div>
          )}

          {chat.map((msg, i) => (
            <div key={i} className={`msg ${msg.sender}`}>
              {msg.text}
            </div>
          ))}

          {loading && (
            <div className="msg bot typing">Typing...</div>
          )}

          <div ref={chatEndRef}></div>
        </div>

        <div className="input-box">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask something..."
          />
          <button onClick={sendMessage}>➤</button>
        </div>

      </div>
    </>
  );
}

export default ChatBot;