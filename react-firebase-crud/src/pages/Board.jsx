import React from "react";
import { useNavigate } from "react-router-dom";

function Board() {
  const navi = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navi("/board/write");
        }}
      >
        글쓰기
      </button>
    </div>
  );
}

export default Board;
