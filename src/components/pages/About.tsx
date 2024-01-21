import { Grid, } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CertificationCard } from "../CertificationCard";
import { CertificationCardProps, ProfItemProps, SkillCardProps } from "../interfaces";
import { ProfileBlock } from "../ProfileBlock";
import { SkillCard } from "../SkillCard";
import { certCardProps, skillCardProps } from "../ArrayVariables";
import { ProfItem } from "../ProfItem";
import { profItems } from "../ProfItemArray";


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
                <ProfileBlock blockTitle="プロフィール" backGroundColor="#fffaf0" height="600" thresholdWidth={980} maxHeight="900">
                    <Grid container columns={{ xs: 6, sm: 8, md: 12 }} alignItems='center' justifyContent='center'>
                        {profItems.map((profItem: ProfItemProps) => {
                            return (
                                <Grid item xs="auto" sm="auto" md="auto" pl={1} pb={4}>
                                    <ProfItem
                                        icon={profItem.icon}
                                        title={profItem.title}
                                        subheader={profItem.subheader}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid>
                </ProfileBlock>
                <ProfileBlock blockTitle="スキルセット" backGroundColor="#87cefa" height="600" thresholdWidth={980} maxHeight="1100">
                    <Grid container spacing={3} columns={{ xs: 6, md: 8 }} alignItems='center' justifyContent='center'>
                        {skillCardProps.map((skillCardProp) => (
                            <Grid item xs="auto" md="auto">
                                <SkillCard title={skillCardProp.title} images={skillCardProp.images} />
                            </Grid>
                        ))}
                    </Grid>
                </ProfileBlock> 
                <ProfileBlock blockTitle="資格" backGroundColor="#ffe4c4" height="540" thresholdWidth={980} maxHeight="1000" >
                    <Grid container spacing={3} columns={{ xs: 6, md: 8 }} alignItems='center' justifyContent='center'>
                        {certCardProps.map((certCardProp) => (
                            <Grid item xs="auto" md="auto">
                                <CertificationCard categoryName={certCardProp.categoryName} certificationList={certCardProp.certificationList} />
                            </Grid>
                        ))}
                    </Grid>
                </ProfileBlock>
            </ThemeProvider>
        </>
    );
};
