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
import react from "../img/react.jpg";
import vue from "../img/vue.jpg";
import { Profile } from "./Profile";
import { Skillset } from "./Skillset";

export const About = () => {
    return (
        <>
        <Profile />
        <Skillset />
        <SDiv>
            <h1>資格</h1>
        </SDiv>
        </>
    );
};

const SDiv = styled.div`
background-color: lightblue;
margin: 0;
height: 600px;
h1 {
    text-align: center;
    margin: 0;
}
`;
