import Box from '@mui/material/Box';
import {  Grid, Typography } from "@mui/material";
import amplify from "../../img/Amplify.jpg";
import { Multiline } from '../Multiline';
import { ExperienceCardProps } from '../interfaces';
import { ExperienceCard } from '../ExperienceCard';

const experienceItems: ExperienceCardProps[] = [
    {
        image: amplify,
        title: "紡績工場の生産量可視化ダッシュボード画面の作成",
        period: "2023/4 - 2023/8",
        summary: "紡績工場の生産量を可視化するダッシュボード画面を作成。",
        technical_elements:
            {
                "◆Frontend": "Vue.js、TypeScript、Amplify",
                "◆Backend": "Python、API Gateway、Lambda",
                "◆Database": "DynamoDB",
                "◆Version Control Tool": "Git"
            }
    }
];



export const Experience = () => {

    return (
        <>
        <Box 
            display="flex" 
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            m={0} pt={5} sx={{
            backgroundColor: 'white',
        }}>
            <Typography paddingBottom={3} fontWeight="bold" variant="h3">Experiences</Typography>
            <Grid container alignItems="center" justifyContent="center">
            <Grid item xs={10}>
                <ExperienceCard props={experienceItems[0]} />
        </Grid>
        </Grid>
        </Box>
        </>
    )
}

