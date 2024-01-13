import styled from "styled-components";
import { Box, CardContent, Grid, Typography, } from "@mui/material";
import { Card } from "@mui/material";
import { Profile } from "../Profile";
import { Skillset } from "../Skillset";
import { CertificationList } from "../CertificationList";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CertificationCard } from "../CertificationCard";
import { certificationCardProps } from "../interfaces";
import { ProfileBlock } from "../ProfileBlock";

const theme = createTheme({
    components: {
        // コンポーネント名
        MuiCardContent: {
            styleOverrides: {
                // CSSルール名
                root: {
                    // CSS定義
                    padding: 0,
                },
            },
        },
    },
});

const awsCertifications: string[] = [
    "AWS Certified Solutions Architect - Associate",
    "AWS Certified Developer - Associate",
    "AWS Certified Solutions Architect - Professional"
];
const programmingCertifications: string[] = [
    "Oracle Certified Java Programmer, Silver SE 8",
    "Oracle Certified Java Programmer, Gold SE 8"
];
const databaseCertifications: string[] = [
    "ORACLE MASTER Bronze DBA 2019",
    "ORACLE MASTER Silver DBA 2019"
];
const otherCertifications: string[] = [
    "応用情報技術者",
    "LinuCレベル1 Version 10.0"
];

const certCardProps: certificationCardProps[] = [
    {
        categoryName: "AWS",
        certificationList: awsCertifications,
    },
    {
        categoryName: "Programming",
        certificationList: programmingCertifications,
    },
    {
        categoryName: "Database",
        certificationList: databaseCertifications,
    },
    {
        categoryName: "Other",
        certificationList: otherCertifications,
    },
];

export const About = () => {
    const boxStyle = {
        backgroundColor: "#ffe4c4", // 背景色を指定
        height: "500px"
    };
    return (
        <>
            <ThemeProvider theme={theme}>
                <Profile />
                <Skillset />
                <ProfileBlock blockTitle="資格">
                    <Grid container spacing={3} columns={{ xs: 6, md: 8 }} alignItems='center' justifyContent='center'>
                        {certCardProps.map((certCardProp) => (
                            <Grid item xs={6} md="auto">
                                <CertificationCard props={certCardProp} />
                            </Grid>
                        ))}
                    </Grid>
                </ProfileBlock>
            </ThemeProvider>
        </>
    );
};
