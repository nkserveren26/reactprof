import { Grid, } from "@mui/material";
import { Profile } from "../Profile";
import { Skillset } from "../Skillset";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CertificationCard } from "../CertificationCard";
import { certificationCardProps, SkillCardProps } from "../interfaces";
import { ProfileBlock } from "../ProfileBlock";
import windowsserver from "../../img/windowsserver.jpg";
import centos from "../../img/centos.jpg";
import ubuntu from "../../img/ubuntu.jpg";
import vmware from "../../img/vmware.jpg";
import hyperv from "../../img/hyper-v.jpg";
import vsphere from "../../img/vsphere.jpg";
import java from "../../img/java.jpg";
import python from "../../img/python.jpg";
import javascript from "../../img/javascript.jpg";
import typescript from "../../img/typescript.jpg";
import react from "../../img/react.jpg";
import vue from "../../img/vue.jpg";
import { SkillCard } from "../SkillCard";
import { skillCardProps } from "../ArrayVariables";


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

export const About: React.FC = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Profile />
                <ProfileBlock blockTitle="スキルセット" backGroundColor="#87cefa" height="600px">
                    <Grid container spacing={4} columns={{ xs: 6, md: 8 }} alignItems='center' justifyContent='center'>
                        {skillCardProps.map((skillCardProp) => (
                            <Grid item xs={6} md="auto">
                                <SkillCard title={skillCardProp.title} images={skillCardProp.images} />
                            </Grid>
                        ))}
                    </Grid>
                </ProfileBlock> 
                <ProfileBlock blockTitle="資格" backGroundColor="#ffe4c4" height="540px">
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
