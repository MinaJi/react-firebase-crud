import React, { useContext } from "react";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Container, Grid, InputAdornment } from "@mui/material";
import { GiOrangeSlice } from "react-icons/gi";
import { AuthContext } from "../context/AuthContext";
import { MdVisibility } from "react-icons/md";
import { InputUnstyled } from "@mui/base";
// import UnstyledInputBasic from "../components/UnstyledInput";
import UseInput from "../components/UnstyledInput";
import PropTypes from "prop-types";
import '../App.css'

// 스타일 컴포넌트
const GridContainer = styled(Grid)`
  && {
    height: 600px;
    background-color: #fff;
    border-radius: 30px;
    margin-top: 6%;
    overflow: hidden;
  }

  .left {
    background-color: #f37521;
    width: 40%;
  }

  .right {
    width: 60%;
  }
`;

const StyledLoginDiv = styled.div`
  font-size: 30px;
  text-align: left;
  margin-top: 50%;
  padding-left: 40px;
  padding-right: 40px;

  .logintext {
    color: #82dc9b;
    font-weight: bold;
    text-shadow: 2px 2px #000;
  }

  .gi {
    padding-bottom: 2px;
  }

  .contents {
    font-size: 16px;
    padding-top: 10px;
    line-height: 130%;
  }
`;

const StyledContainer = styled(Grid)`
  justify-content: center;
  margin-top: 40%;
`;

const StyledInput = styled("input")`
  border: none;
  background-color: #e6e6e6;
  border-radius: 30px;
  width: 300px;
  height: 40px;
  padding: 2%;
  margin-bottom: 5px;
  padding-left: 10px;
  ::-webkit-input-placeholder {
    padding-left: 6px;
  }
  :focus {
    outline: none;
  }
`;

const Btn = styled.button`
  width: 110px;
  height: 40px;
  background-color: #000000;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  :hover {
    background-color: #82dc9b;
    color: #000;
  }
`;

function Login() {
  const navi = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const [errormsg, setErrorMsg] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  return (
    <Container>
      <GridContainer container>
        <Grid item className="left">
          <StyledLoginDiv>
            <GiOrangeSlice className="gi" />
            <p className="logintext">로그인</p>
            <div className="contents">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                ipsam facere quas voluptates, totam, praesentium optio nam ab
                sunt.
              </p>
              <br />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </StyledLoginDiv>
        </Grid>
        <Grid item className="right">
          <div className="login">
            <StyledContainer container>
              <form onSubmit={handleLogin}>
                <Grid item>
                  <StyledInput
                    type="email"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item>
                  {/* <InputUnstyled
                    slotProps={{ input: { className: "my-input" } }}
                    type="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <MdVisibility className="icon" /> */}
                </Grid>
                <Btn type="submit">Login</Btn>
                {errormsg && <span>아이디와 비밀번호를 확인해주세요.</span>}
              </form>
            </StyledContainer>
          </div>
        </Grid>
      </GridContainer>
    </Container>
  );
}

export default Login;
