import { FC } from "react";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import {Typography} from "@mui/material";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { ButtonParam } from "../interface/interfaces";
import React from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000', // プライマリカラーを黒色に指定
    },
  },
  typography: {
    fontFamily: "Georgia",
  },
});

const buttonParams: ButtonParam[] = [
  {
    buttonLabel: "TOP",
    path: "/",
  },
  {
    buttonLabel: "ABOUT",
    path:"/about",
  },
  {
    buttonLabel: "Experience",
    path: "/experience",
  },
  {
    buttonLabel: "Blog",
    path: "/blog",
  },
];

type HeaderProps = {
    title:string
};

export const Header:FC<HeaderProps> = (props) => {
    const navigate = useNavigate();
    const { title } = props; 
    return (
      <ThemeProvider theme={theme}>
          <AppBar position="sticky">
            <Toolbar disableGutters={true}>
              <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                {title}
              </Typography>
              {buttonParams.map((buttonParam, index) => {
                const {buttonLabel, path} = buttonParam;
                return (
                  <Button key={index} color="inherit" onClick={() => navigate(path)}>
                    {buttonLabel}
                  </Button>
                )
              })}
            </Toolbar>
          </AppBar>
      </ThemeProvider>
    );
};
