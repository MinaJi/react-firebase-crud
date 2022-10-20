import React from "react";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// 스타일 컴포넌트
const StyledLoginDiv = styled.div`
  font-family: "Chivo", sans-serif;
  font-size: 70px;
  color: #000000;
`;

const StyledDiv = styled.div`
  border-radius: 30px;
  background-color: #ffffff;
  height: 600px;
  width: 400px;
  margin: 0 auto;
  margin-top: 5%;
`;

function Login() {
  const navi = useNavigate();

  const [errormsg, setErrorMsg] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navi("/");
      })
      .catch((error) => {
        setErrorMsg(true);
      });
  };

  return (
    <StyledDiv>
      <div className="login">
        <StyledLoginDiv>Login</StyledLoginDiv>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          {errormsg && <span>아이디와 비밀번호를 확인해주세요.</span>}
        </form>
      </div>
    </StyledDiv>
  );
}

export default Login;
