import { FC } from "react";
import styled from "styled-components";
import { Box } from "@mui/material";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import {Typography} from "@mui/material";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";

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

type HeaderProps = {
    title:string
};

export const Header:FC<HeaderProps> = (props) => {
    const { title } = props; 
    return (
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar disableGutters={true}>
                <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                {title}
              </Typography>
              <Button color="inherit" component={Link} to="/about">
                ABOUT
              </Button>
              <Button color="inherit" component={Link} to="/">
                TOP
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      </ThemeProvider>
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