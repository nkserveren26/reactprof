import styled from "styled-components";
import { CardContent, Grid, Typography,Avatar } from "@mui/material";
import { Card } from "@mui/material";
import windowsserver from "../img/windowsserver.jpg";
import centos from "../img/centos.jpg";
import ubuntu from "../img/ubuntu.jpg";
import vmware from "../img/vmware.jpg";
import hyperv from "../img/hyper-v.jpg";
import vsphere from "../img/vsphere.jpg";
import java from "../img/java.jpg";
import python from "../img/python.jpg";
import javascript from "../img/javascript.jpg";
import typescript from "../img/typescript.jpg";
import { Profile } from "./Profile";

export const About = () => {
    return (
        <>
        <Profile />
        <SDiv>
            <h1>スキルセット</h1>
            <GridDiv>
            <Grid container spacing={4} columns={{ xs: 6, md: 8 }} alignItems='center' justifyContent='center'>
                <Grid item xs={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography align="center" variant="h4">
                              OS
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <SDivFlex>
                                <Avatar alt="windowsserver" src={windowsserver} sx={{ width: 100, height: 120 }} variant="square" />
                                <Avatar alt="centos" src={centos} sx={{ width: 100, height: 110 }} variant="square" />
                                <Avatar alt="ubuntu" src={ubuntu} sx={{ width: 100, height: 80 }} variant="square" />
                            </SDivFlex>
                        </CardContent>
                    </Card>
                </Grid>
                    <Grid item xs={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography align="center" variant="h4">
                                Virtualization
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <SDivFlex>
                                <Avatar alt="vmware" src={vmware} sx={{ width: 140, height: 120 }} variant="square" />
                                <Avatar alt="hyperv" src={hyperv} sx={{ width: 100, height: 120 }} variant="square" />
                                <Avatar alt="vsphere" src={vsphere} sx={{ width: 100, height: 110 }} variant="square" />
                            </SDivFlex>
                        </CardContent>
                    </Card>
                </Grid>
                    <Grid item xs={6}  md={4}>
                    <Card>
                        <CardContent>
                            <Typography align="center" variant="h4">
                                Programming
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <SDivFlex>
                                <Avatar alt="java" src={java} sx={{ width: 100, height: 120 }} variant="square" />
                                <Avatar alt="python" src={python} sx={{ width: 100, height: 100 }} variant="square" />
                                <Avatar alt="javascript" src={javascript} sx={{ width: 100, height: 80 }} variant="square" />
                                <Avatar alt="typescript" src={typescript} sx={{ width: 100, height: 70 }} variant="square" />
                            </SDivFlex>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography align="center" variant="h4">
                                Frontend
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <SDivFlex>
                                <Avatar alt="java" src={java} sx={{ width: 100, height: 120 }} variant="square" />
                                <Avatar alt="python" src={python} sx={{ width: 100, height: 100 }} variant="square" />
                                <Avatar alt="javascript" src={javascript} sx={{ width: 100, height: 80 }} variant="square" />
                                <Avatar alt="typescript" src={typescript} sx={{ width: 100, height: 70 }} variant="square" />
                            </SDivFlex>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            </GridDiv>   
        </SDiv>
        <SDiv>
            <h1>資格</h1>
        </SDiv>
        </>
    );
};


const SDiv = styled.div`
background-color: gray;
margin: 0;
height: 600px;
h1 {
    text-align: center;
    margin: 0;
}
`;

const GridDiv = styled.div`
padding-left: 70px;
padding-right: 70px;
`;


const SDivFlex = styled.div`
display: flex;
flex-basis: 50px;
gap: 20px 20px;
padding: 0px;
justify-content: center;
`;