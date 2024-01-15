import { Grid, } from "@mui/material";
import { Profile } from "../Profile";
import { Skillset } from "../Skillset";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CertificationCard } from "../CertificationCard";
import { certificationCardProps, SkillCardProps } from "../interfaces";
import { ProfileBlock } from "../ProfileBlock";
import { SkillCard } from "../SkillCard";
import { certCardProps, skillCardProps } from "../ArrayVariables";


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
