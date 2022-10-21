import React from "react";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Container, Grid } from "@mui/material";
import { GiOrangeSlice } from "react-icons/gi";

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
`;

const StyledLoginDiv = styled.div`
  font-size: 30px;
  text-align: left;
  margin-top: 50%;
  font-weight: bold;
  padding-left: 40px;
  padding-right: 40px;

  .gi {
    padding-bottom: 2px;
  }

  .contents {
    font-weight: normal;
    font-size: 16px;
    padding-top: 10px;
    line-height: 130%;
  }
`;

const LoginGrid = styled(Grid)`
  && {
  }
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
    <Container>
      <GridContainer container>
        <Grid item className="left">
          <StyledLoginDiv>
            <GiOrangeSlice className="gi" />
            <p>로그인</p>
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
        <Grid item>
          <div className="login">
            <form onSubmit={handleLogin}>
              <Grid item>
                <input
                  type="email"
                  placeholder="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item>
                <input
                  type="password"
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <button type="submit">Login</button>
              {errormsg && <span>아이디와 비밀번호를 확인해주세요.</span>}
            </form>
          </div>
        </Grid>
      </GridContainer>
    </Container>
  );
}

export default Login;
