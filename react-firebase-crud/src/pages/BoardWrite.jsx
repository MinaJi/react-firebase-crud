import React from "react";

function BoardWrite() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>제목</p>
        <input />
        <p>내용</p>
        <textarea />
        <button type="submit">제출</button>
      </form>
    </div>
  );
}

export default BoardWrite;
