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
import { CertificationList } from "./CertificationList";

export const About = () => {
    const awsCertifications: string[] = [
        "AWS Certified Solutions Architect - Associate", 
        "AWS Certified Developer - Associate"
    ];
    return (
        <>
        <Profile />
        <Skillset />
        <SDiv>
            <h1>資格</h1>
                <GridDiv>
                    <Grid container spacing={4} columns={{ xs: 6, md: 8 }} alignItems='center' justifyContent='center'>
                        <Grid item xs={6} md={4}>
                            <Card>
                                <CardContent>
                                    <Typography align="center" variant="h4">
                                        AWS
                                    </Typography>
                                </CardContent>
                                <CardContent>
                                    <CertificationList list={awsCertifications} />
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </GridDiv>
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

const GridDiv = styled.div`
padding-left: 5%;
padding-right: 5%;
`;

const SDivFlex = styled.div`
display: flex;
flex-basis: 50px;
gap: 20px 20px;
padding: 0px;
justify-content: center;
`;
