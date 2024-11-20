import React, { useState } from "react";

function CompanyVerification() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`인증 이메일이 ${email}로 전송되었습니다.`);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f9f9f9",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* 제목 */}
      <h2
        style={{
          color: "#0078FF",
          fontSize: "2em",
          marginBottom: "20px",
        }}
      >
        회사 이메일 주소를 알려주세요.
      </h2>

      {/* 폼 */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#ffffff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@company.com"
          style={{
            width: "300px",
            padding: "10px",
            fontSize: "1em",
            border: "1px solid #ccc",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
        />
        <button
          type="submit"
          style={{
            width: "150px",
            padding: "10px",
            fontSize: "1em",
            backgroundColor: "#0078FF",
            color: "#ffffff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          다음
        </button>
      </form>
    </div>
  );
}

export default CompanyVerification;
