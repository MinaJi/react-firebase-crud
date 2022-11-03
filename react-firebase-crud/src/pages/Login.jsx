import React from "react";
import styled from "styled-components";
import { Container, Grid } from "@mui/material";
import { GiOrangeSlice } from "react-icons/gi";
import LoginForm from "../components/LoginForm";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

// 스타일 컴포넌트
const GridContainer = styled(Grid)`
  && {
    height: 100%;
    background-color: #fff;
    border-radius: 30px;
    margin-top: 6%;
    margin-bottom: 6%;
    overflow: hidden;
    direction: column;
    align-items: stretch;
    @media screen and (max-width: 576px) {
      flex-direction: column;
      height: 750px;
    }
  }

  .left {
    background-color: #f37521;
    width: 40%;
    @media screen and (max-width: 576px) {
      height: 40%;
      width: 100%;
    }
  }

  .right {
    width: 60%;
    @media screen and (max-width: 576px) {
      height: 60%;
      width: 100%;
    }
  }
`;

const IconDiv = styled(Grid)`
  && {
    margin-top: 4%;
    padding-left: 10px;
    font-size: 30px;
    cursor: pointer;
  }
`;

const StyledLoginDiv = styled.div`
  font-size: 30px;
  text-align: left;
  margin-top: 40%;
  padding-left: 40px;
  padding-right: 40px;
  @media screen and (max-width: 576px) {
    margin-top: 4%;
  }

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
    @media screen and (max-width: 576px) {
      font-size: 15px;
      line-height: 130%;
    }
  }
`;

function Login() {
  const navi = useNavigate();

  return (
    <Container>
      <GridContainer container>
        <Grid item className="left">
          <IconDiv item>
            <ArrowBackIcon
              fontSize="inherite"
              onClick={() => {
                navi("/");
              }}
            />
          </IconDiv>
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
          <LoginForm />
        </Grid>
      </GridContainer>
    </Container>
  );
}

export default Login;
