import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../image/main.png"; // 로고 이미지 경로

function Dashboard() {
  const [mileage, setMileage] = useState(4500); // 초기 마일리지 설정

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
      {/* 제목 섹션 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: "20px",
        }}
      >
        <img
          src={logoImage} // 가져온 로고 이미지 사용
          alt="Easy-Go Logo"
          style={{
            width: "50px",
            height: "50px",
            marginRight: "10px",
          }}
        />
        <h2
          style={{
            fontSize: "1.5em",
            color: "#333",
          }}
        >
          Easy-Go 충남대학교
        </h2>
      </div>

      {/* 마일리지 섹션 */}
      <div
        style={{
          margin: "20px auto",
          padding: "10px 20px",
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          maxWidth: "300px",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontSize: "1.2em",
            color: "#0078FF",
            marginBottom: "5px",
          }}
        >
          나의 마일리지
        </h3>
        <p
          style={{
            fontSize: "1.5em",
            color: "#333",
            fontWeight: "bold",
            margin: "0",
          }}
        >
          {mileage.toLocaleString()} 포인트
        </p>
      </div>

      {/* 즐겨찾는 게시판 섹션 */}
      <div
        style={{
          margin: "20px auto",
          padding: "20px",
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          maxWidth: "600px",
        }}
      >
        <h3
          style={{
            fontSize: "1.2em",
            color: "#0078FF",
            marginBottom: "10px",
          }}
        >
          즐겨찾는 게시판
        </h3>
        <ul
          style={{
            listStyle: "none",
            padding: "0",
            margin: "0",
          }}
        >
          <li
            style={{
              margin: "10px 0",
              padding: "10px",
              backgroundColor: "#f3f3f3",
              borderRadius: "5px",
            }}
          >
            자유게시판
          </li>
          <li
            style={{
              margin: "10px 0",
              padding: "10px",
              backgroundColor: "#f3f3f3",
              borderRadius: "5px",
            }}
          >
            장터게시판
          </li>
          <li
            style={{
              margin: "10px 0",
              padding: "10px",
              backgroundColor: "#f3f3f3",
              borderRadius: "5px",
            }}
          >
            공연 정보
          </li>
          <li
            style={{
              margin: "10px 0",
              padding: "10px",
              backgroundColor: "#f3f3f3",
              borderRadius: "5px",
            }}
          >
            공지사항
          </li>
        </ul>
      </div>

      {/* 근처 출퇴근 버튼 섹션 */}
      <div>
        <Link to="/map">
          <button
            style={{
              padding: "15px 30px",
              fontSize: "1em",
              backgroundColor: "#0078FF",
              color: "#ffffff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            근처 출퇴근 예정 이웃 찾기
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
