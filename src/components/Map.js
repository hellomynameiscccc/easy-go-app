import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import mapImage from "../image/image.png"; // 지도 이미지
import route1 from "../image/route1.png";
import route2 from "../image/route2.png";
import route3 from "../image/route3.png";
import route4 from "../image/route4.png";
import route5 from "../image/route5.png";
import traffic1 from "../image/traffic1.png";
import traffic2 from "../image/traffic2.png";
import traffic3 from "../image/traffic3.png";
import traffic4 from "../image/traffic4.png";
import traffic5 from "../image/traffic5.png";

const routeImages = [route1, route2, route3, route4, route5];
const trafficImages = [traffic1, traffic2, traffic3, traffic4, traffic5];

function Map() {
  const navigate = useNavigate();
  const [view, setView] = useState("map");

  const generateRandomTime = () => {
    const hours = Math.floor(Math.random() * 3) + 7;
    const minutes = Math.floor(Math.random() * 60);
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  };

  // 지도 이미지 크기에 맞게 점을 조정
  const mapWidth = 400;  // 지도 이미지의 실제 너비 (픽셀로 설정)
  const mapHeight = 300; // 지도 이미지의 실제 높이 (픽셀로 설정)

  const points = Array.from({ length: 10 }, (_, index) => {
    // 점의 위치가 지도 안에 있도록 랜덤으로 생성
    const x = Math.floor(Math.random() * mapWidth);
    const y = Math.floor(Math.random() * mapHeight);

    // 특정 영역에서 점이 안 찍히도록 제외 (두 번째 사진 영역)
    if (x > 150 && x < 300 && y > 200 && y < 300) {
      return null; // 특정 영역에 점 생성하지 않음
    }

    return {
      id: index + 1,
      x: x, 
      y: y,
      user: `직원${index + 1}`,
      time: generateRandomTime(),
    };
  }).filter(point => point !== null); // null 값 필터링

  const randomRouteImage = () =>
    routeImages[Math.floor(Math.random() * routeImages.length)];

  const randomTrafficImage = () =>
    trafficImages[Math.floor(Math.random() * trafficImages.length)];

  const handlePointClick = (userId) => {
    alert(`${userId}의 채팅창으로 이동합니다!`);
    navigate("/chat");
  };

  return (
    <div style={{ position: "relative", textAlign: "center" }}>
      <h2>근처 출퇴근 예정 이웃 찾기</h2>
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={() => setView("map")}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            backgroundColor: "#0078FF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          지도
        </button>
        <button
          onClick={() => setView("route")}
          style={{
            padding: "10px 20px",
            //marginRight: "10px",
            backgroundColor: "#FFD700",
            color: "#333",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          출근 경로 추천
        </button>
        <button
          onClick={() => setView("traffic")}
          style={{
            padding: "10px 20px",
            backgroundColor: "#FF6347",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          현재 도로 현황 보기
        </button>
      </div>

      {view === "map" && (
        <div
          style={{
            position: "relative",
            width: "800px",
            height: "600px",
            margin: "0 auto",
            overflow: "hidden",
          }}
        >
          <img
            src={mapImage}
            alt="지도"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          {points.map((point) => (
            <div
              key={point.id}
              onClick={() => handlePointClick(point.user)}
              style={{
                position: "absolute",
                left: `${(point.x / mapWidth) * 55+15}%`,  // 비율을 기반으로 위치 조정
                top: `${(point.y / mapHeight) * 55+10}%`,  // 비율을 기반으로 위치 조정
                width: "8px",  // 점 크기 수정
                height: "8px",  // 점 크기 수정
                backgroundColor: "red",
                borderRadius: "50%",
                cursor: "pointer",
              }}
              title={`사용자: ${point.user}`}
            >
              <span
                style={{
                  position: "absolute",
                  left: "15px",
                  top: "-10px",
                  color: "black",
                  fontSize: "12px",
                  backgroundColor: "white",
                  padding: "2px 5px",
                  borderRadius: "5px",
                  boxShadow: "0 0 2px rgba(0,0,0,0.3)",
                }}
              >
                {point.time}
              </span>
            </div>
          ))}
        </div>
      )}

      {view === "route" && (
        <div>
          <h3>출근 경로 추천</h3>
          <img
            src={randomRouteImage()}
            alt="출근 경로 추천"
            style={{
              width: "400px",
              height: "300px",
              objectFit: "cover",
              margin: "0 auto",
              display: "block",
            }}
          />
        </div>
      )}

      {view === "traffic" && (
        <div>
          <h3>현재 도로 현황 보기</h3>
          <img
            src={randomTrafficImage()}
            alt="현재 도로 현황"
            style={{
              width: "400px",
              height: "300px",
              objectFit: "cover",
              margin: "0 auto",
              display: "block",
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Map;
