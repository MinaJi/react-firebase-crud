import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navi = useNavigate();

  return (
    <>
      <div>Home</div>
      <button
        onClick={() => {
          navi("/login");
        }}
      >
        로그인
      </button>
      <button
        onClick={() => {
          navi("/signup");
        }}
      >
        회원가입
      </button>
    </>
  );
}

export default Home;
