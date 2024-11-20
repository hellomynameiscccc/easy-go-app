import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../image/main.png"; // 업로드한 이미지 경로를 설정하세요.

function Home() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
      }}
    >
      {/* 메인 이미지 */}
      <img
        src={logoImage}
        alt="Easy-Go Logo"
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          marginBottom: "20px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      />

      {/* 제목 */}
      <h1
        style={{
          fontSize: "2.5em",
          color: "#0078FF",
          margin: "10px 0",
        }}
      >
        Easy-Go
      </h1>

      {/* 부제목 */}
      <p
        style={{
          fontSize: "1.2em",
          color: "#333",
          marginBottom: "30px",
        }}
      >
        함께 출퇴근해요
      </p>

      {/* 버튼 섹션 */}
      <div>
        <Link to="/verify">
          <button
            style={{
              padding: "10px 20px",
              margin: "10px",
              backgroundColor: "#0078FF",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              fontSize: "1em",
              cursor: "pointer",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            회사 인증하러 가기
          </button>
        </Link>
        <Link to="/dashboard">
          <button
            style={{
              padding: "10px 20px",
              margin: "10px",
              backgroundColor: "#FFD700",
              color: "#333",
              border: "none",
              borderRadius: "5px",
              fontSize: "1em",
              cursor: "pointer",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            로그인
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
