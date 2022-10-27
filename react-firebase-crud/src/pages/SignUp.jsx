import { Container, Grid } from "@mui/material";
import { updateProfile } from "firebase/auth";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

const StyledGrid = styled(Grid)`
  background-color: #ffffff;
  height: 600px;
  border-radius: 30px;
  padding-top: 20px;
`;

function SignUp() {
  const navi = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [error, setError] = useState(false);

  const { createUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navi("/");
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "3%" }}>
      <Grid container direction="column">
        <StyledGrid item>
          <Grid item>
            <p>Sign in</p>
          </Grid>
          <form onSubmit={handleSubmit}>
            <Grid item>
              이메일{" "}
              <input type="email" onChange={(e) => setEmail(e.target.value)} />
            </Grid>
            <Grid item>
              비밀번호
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item>
              닉네임
              <input onChange={(e) => setNickname(e.target.value)} />
            </Grid>
            <Grid item>
              <button type="submit">가입하기</button>
            </Grid>
          </form>
          <Grid item>
            <span>이미 가입하셨나요? 로그인하러 가기</span>
          </Grid>
        </StyledGrid>
      </Grid>
    </Container>
  );
}

export default SignUp;
