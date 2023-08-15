import { FC } from "react";
import styled from "styled-components";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import {Typography} from "@mui/material";
import { Button } from "@mui/material";

type HeaderProps = {
    title:string
};

export const Header:FC<HeaderProps> = (props) => {
    const { title } = props; 
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div" fontFamily="Georgia">
            {title}
          </Typography>
          <Button color="inherit">
            Hoge
          </Button>
        </Toolbar>
      </AppBar>
    );
};

const SDiv = styled.div`
display:flex;
align-items: center;
background-color: black;
font-family: Georgia, serif;
h1 {
  margin-left: 2%;
  color: white;
}
ul {
  display: flex;
  list-style:none;
  margin-left:30%;
  color: white;
  li {
    margin-left:40px;
    font-size: 18px;
  }
}
`;