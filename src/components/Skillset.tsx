import styled from "styled-components";
import { CardContent, Grid, Typography, Avatar, Box } from "@mui/material";
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
import { SkillCardProps } from "./interfaces";
import { SkillCard } from "./SkillCard";

const skillCardProps: SkillCardProps[] = [
    {
        title: "Programming",
        images: [
            {
                alt: "java",
                src: java,
                width: 100,
                height: 120
            },
            {
                alt: "python",
                src: python,
                width: 100,
                height: 100
            },
            {
                alt: "javascript",
                src: javascript,
                width: 100,
                height: 80
            },
            {
                alt: "typescript",
                src: typescript,
                width: 100,
                height: 70
            }
        ]
    },
];

export const Skillset = () => {
    const boxStyle = {
        backgroundColor: "#87cefa", // 背景色を指定
        height: "600px"
    };

    return (
        <>
          <Box style={boxStyle}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
          >
                <Typography paddingBottom={3} variant="h4" fontWeight="bold">スキルセット</Typography>
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
                        <Grid item xs={6} md={4}>
                            {skillCardProps.map((skillCardProp) => (
                                <SkillCard title={skillCardProp.title} images={skillCardProp.images} />
                            ))}
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
                                        <Avatar alt="react" src={react} sx={{ width: 130, height: 120 }} variant="square" />
                                        <Avatar alt="vue" src={vue} sx={{ width: 120, height: 100 }} variant="square" />
                                    </SDivFlex>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
            </Box>
        </>
    )
}


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