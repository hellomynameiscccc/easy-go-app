import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Chat() {
  const navigate = useNavigate();

  const [messages, setMessages] = useState([
    { sender: "직원1", text: "안녕하세요!" },
    { sender: "나", text: "내일 9시에 출발해요." },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { sender: "나", text: newMessage }]);
      setNewMessage("");
    }
  };

  const handleReviewClick = () => {
    navigate("/review");
  };

  return (
    <div
      style={{
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        height: "100vh", /* 화면 전체 높이를 채움 */
        backgroundColor: "#f5f5f5", /* 배경색 추가 */
        margin: 0,
      }}
    >
      <div
        style={{
          width: "400px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          overflow: "hidden",
          backgroundColor: "#f5f5f5",
        }}
      >
        <header
          style={{
            backgroundColor: "#0078FF",
            padding: "10px",
            color: "#fff",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          채팅방
        </header>
        <div
          style={{
            padding: "10px",
            height: "300px",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: msg.sender === "나" ? "flex-end" : "flex-start",
              }}
            >
              <div
                style={{
                  maxWidth: "60%",
                  padding: "10px",
                  borderRadius: "10px",
                  backgroundColor: msg.sender === "나" ? "#DCF8C6" : "#fff",
                  boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <p style={{ margin: "0", fontSize: "14px", color: "#333" }}>
                  <strong style={{ fontSize: "12px", color: "#555" }}>
                    {msg.sender}
                  </strong>
                  <br />
                  {msg.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        <footer
          style={{
            display: "flex",
            flexDirection: "column",
            borderTop: "1px solid #ddd",
            padding: "10px",
            backgroundColor: "#fff",
          }}
        >
          <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="메시지를 입력하세요"
              style={{
                flex: "1",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                outline: "none",
                fontSize: "14px",
              }}
            />
            <button
              onClick={handleSend}
              style={{
                backgroundColor: "#0078FF",
                color: "#fff",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              보내기
            </button>
          </div>
          <button
            onClick={handleReviewClick}
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#FFD700",
              color: "#333",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            리뷰 작성하기
          </button>
        </footer>
      </div>
    </div>
  );
}

export default Chat;
