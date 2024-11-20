import React, { useState } from "react";

function Review() {
  const [rating, setRating] = useState(0); // 별점 상태
  const [comment, setComment] = useState(""); // 기타사항

  const handleRatingClick = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    alert(`별점: ${rating}점\n코멘트: ${comment}`);
    // 제출 후 초기화
    setRating(0);
    setComment("");
  };

  return (
    <div style={{ width: "400px", margin: "20px auto", fontFamily: "Arial, sans-serif", border: "1px solid #ddd", borderRadius: "10px", overflow: "hidden", backgroundColor: "#fff" }}>
      <header style={{ backgroundColor: "#0078FF", padding: "10px", color: "#fff", textAlign: "center", fontWeight: "bold", fontSize: "18px" }}>
        리뷰 작성
      </header>
      <div style={{ padding: "20px" }}>
        <p style={{ fontSize: "16px", marginBottom: "10px", fontWeight: "bold" }}>
          별점을 선택해주세요:
        </p>
        <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginBottom: "20px" }}>
          {[1, 2, 3, 4, 5].map((value) => (
            <span
              key={value}
              onClick={() => handleRatingClick(value)}
              style={{
                fontSize: "24px",
                cursor: "pointer",
                color: value <= rating ? "#FFD700" : "#ddd",
              }}
            >
              ★
            </span>
          ))}
        </div>
        <p style={{ fontSize: "16px", marginBottom: "10px", fontWeight: "bold" }}>
          기타 사항:
        </p>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="추가로 평가하고 싶은 내용이 있다면 작성해주세요."
          style={{
            width: "100%",
            height: "100px",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            fontSize: "14px",
            outline: "none",
            resize: "none",
          }}
        />
        <button
          onClick={handleSubmit}
          style={{
            width: "100%",
            marginTop: "20px",
            padding: "10px",
            backgroundColor: "#0078FF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          리뷰 제출
        </button>
      </div>
    </div>
  );
}

export default Review;
