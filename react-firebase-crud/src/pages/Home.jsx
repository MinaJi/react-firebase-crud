import { async } from "@firebase/util";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Home() {
  const navi = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div>Home</div>
      <div>
        {user ? (
          <button onClick={handleLogout}>로그아웃</button>
        ) : (
          <button
            onClick={() => {
              navi("/login");
            }}
          >
            로그인
          </button>
        )}
      </div>
      <div>
        {user ? (
          <button
            onClick={() => {
              navi("/mypage");
            }}
          >
            마이페이지
          </button>
        ) : (
          <button
            onClick={() => {
              navi("/signup");
            }}
          >
            회원가입
          </button>
        )}
      </div>

      <p>안녕하세요 {user && user.email}</p>
    </>
  );
}

export default Home;
