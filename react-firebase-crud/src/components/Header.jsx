import { async } from "@firebase/util";
import { Grid } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";

const StyledHeader = styled(Grid)`
  height: 60px;
  background-color: inherit;
  border-bottom: 1px solid #dcdcdc;
  backdrop-filter: blur(20px);
  position: sticky;
  align-items: center;
`;

const Btn = styled.button`
  border: 1px solid #dcdcdc;
  /* background-color: black; */
  /* border: none; */
  /* color: white; */
  padding: 13px;
  border-radius: 20px;
  cursor: pointer;
  :hover {
    background-color: #f37521;
    border: none;
  }
`;

function Header() {
  const navi = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logout();
      navi("/");
      console.log("로그아웃")
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <StyledHeader container>
        <Grid item>
          {user ? (
            <Btn onClick={handleLogout}>Sign out</Btn>
          ) : (
            <Btn
              onClick={() => {
                navi("/signin");
              }}
            >
              Sign in
            </Btn>
          )}
        </Grid>
        <Grid item>
          {user ? (
            <Btn
              onClick={() => {
                navi("/mypage");
              }}
            >
              Mypage
            </Btn>
          ) : (
            <Btn
              onClick={() => {
                navi("/signup");
              }}
            >
              Sign up
            </Btn>
          )}
        </Grid>
        <Grid item>
          <Btn
            onClick={() => {
              navi("/board");
            }}
          >
            게시판
          </Btn>
        </Grid>
      </StyledHeader>
    </>
  );
}

export default Header;
