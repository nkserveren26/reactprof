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
        title: "OS",
        images: [
            {
                alt: "windowsserver",
                src: windowsserver,
                width: 100,
                height: 120
            },
            {
                alt: "centos",
                src: centos,
                width: 100,
                height: 110
            },
            {
                alt: "ubuntu",
                src: ubuntu,
                width: 100,
                height: 80
            },
        ]
    },
    {
        title: "Virtualization",
        images: [
            {
                alt: "vmware",
                src: vmware,
                width: 140,
                height: 120
            },
            {
                alt: "hyperv",
                src: hyperv,
                width: 100,
                height: 120
            },
            {
                alt: "vsphere",
                src: vsphere,
                width: 100,
                height: 110
            },
        ]
    },
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
    {
        title: "Frontend",
        images: [
            {
                alt: "react",
                src: react,
                width: 130,
                height: 120
            },
            {
                alt: "vue",
                src: vue,
                width: 120,
                height: 100
            },
        ]
    }
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
                        {skillCardProps.map((skillCardProp) => (
                            <Grid item xs={6} md="auto">
                                <SkillCard title={skillCardProp.title} images={skillCardProp.images} />                               
                            </Grid>
                        ))}
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