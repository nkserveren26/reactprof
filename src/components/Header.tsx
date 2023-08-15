import { FC } from "react";
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

const buttonParams = [
  {
    buttonLabel: "ABOUT",
    path:"/about",
  },
  {
    buttonLabel: "TOP",
    path: "/",
  },
];

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
              {buttonParams.map((buttonParam) => {
                
                return (
                  <Button color="inherit" component={Link} to={buttonParam.path}>
                    {buttonParam.buttonLabel}
                  </Button>
                )
              })}
            </Toolbar>
          </AppBar>
        </Box>
      </ThemeProvider>
    );
};
