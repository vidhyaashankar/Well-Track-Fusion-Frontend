import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FaPaperPlane } from "react-icons/fa"; // Import Send icon
import "./NutriBot.css";

const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

// System prompt to guide NutriBot's behavior (sent with every request)
const SYSTEM_PROMPT = `
You are NutriBot, a nutrition assistant. Users will provide details about their daily food intake and exercise.
Your task is to analyze this data and give personalized nutrition insights. Offer meal suggestions, highlight deficiencies, 
and encourage a balanced diet. If exercise details are provided, consider its impact on calorie needs.
Keep responses concise, friendly, and informative. Use markdown formatting for better readability (tables, lists, bold text).
`;

const NutriBot = () => {
  const [messages, setMessages] = useState([
    { text: "Hi! I'm NutriBot. How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const textAreaRef = useRef(null);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }, [input]);

  const adjustTextareaHeight = (element) => {
    element.style.height = "auto";
    element.style.height = `${element.scrollHeight}px`;
  };

  const handleChange = (e) => {
    setInput(e.target.value);
    adjustTextareaHeight(e.target);
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post(API_URL, {
        contents: [
          { parts: [{ text: SYSTEM_PROMPT + "\n\nUser Input: " + input }] } // Single message with instruction & input
        ],
      });

      console.log("Gemini API Raw Response:", response.data);

      const botReply =
        response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I didn't understand that.";

      setMessages((prev) => [...prev, { text: botReply, sender: "bot" }]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prev) => [
        ...prev,
        { text: "Oops! Something went wrong. Please try again.", sender: "bot" },
      ]);
    }

    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="nutribot-container">
      <div className="nutribot-chatbox">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.text}</ReactMarkdown>
          </div>
        ))}
        {loading && <div className="loading-indicator">Thinking...</div>}
      </div>

      <div className="nutribot-input-area">
        <textarea
          className="nutribot-textarea"
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          placeholder="Type a message..."
          disabled={loading}
          ref={textAreaRef}
        />
        <div className="nutribot-send-button" onClick={handleSendMessage}>
          <FaPaperPlane />
        </div>
      </div>
    </div>
  );
};

export default NutriBot;
