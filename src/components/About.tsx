import styled from "styled-components";
import { CardContent, Grid, Typography, } from "@mui/material";
import { Card } from "@mui/material";
import { Profile } from "./Profile";
import { Skillset } from "./Skillset";
import { CertificationList } from "./CertificationList";
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

export const About = () => {
    const awsCertifications: string[] = [
        "AWS Certified Solutions Architect - Associate", 
        "AWS Certified Developer - Associate"
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

    return (
        <>
        <ThemeProvider theme={theme}>
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
                            <Grid item xs={6} md={4}>
                                <Card>
                                    <CardContent>
                                        <Typography align="center" variant="h4">
                                            Programming
                                        </Typography>
                                    </CardContent>
                                    <CardContent>
                                        <CertificationList list={programmingCertifications} />
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <Card>
                                    <CardContent>
                                        <Typography align="center" variant="h4">
                                            Database
                                        </Typography>
                                    </CardContent>
                                    <CardContent>
                                        <CertificationList list={databaseCertifications} />
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <Card>
                                    <CardContent>
                                        <Typography align="center" variant="h4">
                                            Other
                                        </Typography>
                                    </CardContent>
                                    <CardContent>
                                        <CertificationList list={otherCertifications} />
                                    </CardContent>
                                </Card>
                            </Grid>
                    </Grid>
                </GridDiv>
        </SDiv>
        </ThemeProvider>
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
