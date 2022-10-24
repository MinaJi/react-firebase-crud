import { Container, Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";

const StyledGrid = styled(Grid)`
  background-color: #ffffff;
  height: 600px;
  border-radius: 30px;
`;

function SignUp() {
  return (
    <Container maxWidth="sm">
      <Grid Container>
        <StyledGrid item>
          회원가입
          <Grid item>
            <input></input>
            <input></input>
            <input></input>
          </Grid>
        </StyledGrid>
      </Grid>
    </Container>
  );
}

export default SignUp;
