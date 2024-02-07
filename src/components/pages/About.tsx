import { Grid, } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CertificationCard } from "../card/CertificationCard";
import { ProfItemProps } from "../interface/interfaces";
import { ProfileBlock } from "../block/ProfileBlock";
import { SkillCard } from "../card/SkillCard";
import { certCardProps, skillCardProps } from "../variable/ArrayVariables";
import { ProfCard } from "../card/ProfCard";
import { profItems } from "../variable/ProfItemArray";
import { ScrollToTopButton } from "../button/ScrollToTopButton";
import React from 'react';


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
                        {profItems.map((profItem: ProfItemProps, index) => {
                            return (
                                <Grid item xs="auto" sm="auto" md="auto" pl={1} pb={4} key={index}>
                                    <ProfCard
                                        icon={profItem.icon}
                                        title={profItem.title}
                                        subheader={profItem.subheader}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid>
                </ProfileBlock>
                <ProfileBlock blockTitle="スキルセット" backGroundColor="#87cefa" height="600" thresholdWidth={1080} maxHeight="1100">
                    <Grid container spacing={3} columns={{ xs: 6, md: 8 }} alignItems='center' justifyContent='center'>
                        {skillCardProps.map((skillCardProp, index) => (
                            <Grid item xs="auto" md="auto" key={index}>
                                <SkillCard title={skillCardProp.title} images={skillCardProp.images} />
                            </Grid>
                        ))}
                    </Grid>
                </ProfileBlock> 
                <ProfileBlock blockTitle="資格" backGroundColor="#ffe4c4" height="540" thresholdWidth={1080} maxHeight="1000" >
                    <Grid container spacing={3} columns={{ xs: 6, md: 8 }} alignItems='center' justifyContent='center'>
                        {certCardProps.map((certCardProp, index) => (
                            <Grid item xs="auto" md="auto" key={index}>
                                <CertificationCard categoryName={certCardProp.categoryName} certificationList={certCardProp.certificationList} />
                            </Grid>
                        ))}
                    </Grid>
                </ProfileBlock>
                <ScrollToTopButton />
            </ThemeProvider>
        </>
    );
};
