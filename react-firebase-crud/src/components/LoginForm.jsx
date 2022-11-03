import { Grid } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase-config";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { FiAlertCircle } from "react-icons/fi";

const StyledContainer = styled(Grid)`
  && {
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 8rem 5rem;
    .title {
      margin-bottom: 5px;
      margin-top: 10px;
      margin-left: 10px;
      font-size: 15px;
    }
    @media screen and (max-width: 576px) {
      width: 100%;
      height: 100%;
      padding: 1rem;
      overflow-y: auto;
    }
  }
`;

const StyledInput = styled.input`
  border: none;
  background-color: #e6e6e6;
  border-radius: 30px;
  width: 80%;
  height: 60px;
  padding: 2%;
  margin-bottom: 5px;
  padding-left: 3%;
  box-sizing: border-box;
  ::-webkit-input-placeholder {
    padding-left: 6px;
  }
  :focus {
    outline: none;
  }
  @media screen and (max-width: 700px) {
    width: 96%;
  }
`;

const InputDiv = styled.div`
  display: flex;
  border: none;
  background-color: #e6e6e6;
  border-radius: 30px;
  width: 80%;
  height: 60px;
  padding: 2%;
  margin-bottom: 5px;
  box-sizing: border-box;
  ::-webkit-input-placeholder {
    padding-left: 6px;
  }
  :focus {
    outline: none;
  }
  @media screen and (max-width: 700px) {
    width: 96%;
  }

  .pwdinput {
    flex-grow: 1;
    border: none;
    background-color: inherit;
    border-radius: 30px;
    padding: 2%;
    box-sizing: inherit;
    :focus {
      outline: none;
    }
    @media screen and (max-width: 700px) {
    }
  }
  .icon {
    cursor: pointer;
    font-size: 25px;
    margin-top: 10px;
    box-sizing: inherit;
    align-items: flex-end;
    margin-right: 2%;
  }
`;

const LoginBtn = styled.button`
  width: 80%;
  height: 45px;
  background-color: #000000;
  color: #fff;
  border: none;
  border-radius: 30px;
  padding: 2%;
  margin-top: 7px;
  font-weight: bold;
  cursor: pointer;
  :hover {
    background-color: #82dc9b;
    color: #000;
  }
  @media screen and (max-width: 700px) {
    width: 96%;
  }
`;

const StyledGrid = styled(Grid)`
  && {
    margin-top: 7%;
  }
  .btn {
    cursor: pointer;
    width: 80%;
    height: 40px;
    border: 1px solid black;
    border-radius: 20px;
    background-color: #fff;
    margin-bottom: 2%;
    font-weight: bold;
    @media screen and (max-width: 700px) {
      width: 96%;
    }
    :hover {
      border: 2px solid black;
    }
  }
`;

const ErrorMsg = styled(Grid)`
  transition: width 0.35s linear;
  width: 80%;
  height: 30px;
  text-align: center;
  padding-top: 10px;
  font-weight: bold;
  .icon {
    color: #f37521;
    margin-right: 2px;
  }
`;

const StyledDiv = styled.div`
  font-weight: bold;
  font-size: 15px;
  padding-bottom: 4%;
  padding-top: 5%;
`;

function LoginForm() {
  const navi = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const [errormsg, setErrorMsg] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navi("/");
      })
      .catch((error) => {
        setErrorMsg(true);
      });
  };

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <>
      <StyledContainer>
        <form onSubmit={handleLogin} style={{ boxSizing: "border-box" }}>
          <Grid item>
            <p className="title">이메일</p>
            <StyledInput
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item>
            <p className="title">비밀번호</p>
            <InputDiv>
              <input
                className="pwdinput"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="icon" onClick={handleShowPassword}>
                {showPassword ? (
                  <MdOutlineVisibilityOff />
                ) : (
                  <MdOutlineVisibility />
                )}
              </span>
            </InputDiv>
          </Grid>
          <LoginBtn type="submit">Login</LoginBtn>
          <ErrorMsg item>
            {errormsg && (
              <span>
                <FiAlertCircle className="icon" />
                아이디와 비밀번호를 확인해주세요.
              </span>
            )}
          </ErrorMsg>
        </form>
        <StyledGrid item>
          <Grid item>
            <StyledDiv>
              <span>아직 회원이 아니신가요? 회원가입을 해주세요.</span>
            </StyledDiv>
            <button
              className="btn"
              onClick={() => {
                navi("/signup");
              }}
            >
              회원가입 하기
            </button>
          </Grid>
          <Grid item>
            <button
              className="btn"
              onClick={() => {
                navi("/findpassword");
              }}
            >
              비밀번호 찾기
            </button>
          </Grid>
        </StyledGrid>
      </StyledContainer>
    </>
  );
}

export default LoginForm;
