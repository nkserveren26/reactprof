import Box from '@mui/material/Box';
import {  Grid, Typography } from "@mui/material";

import { useState } from 'react';
import amplify from "../../img/Amplify.jpg";
import { Multiline } from '../Multiline';
import { ExperienceCardProps } from '../interfaces';
import { ExperienceCard } from '../ExperienceCard';

const experienceItems: ExperienceCardProps[] = [
    {
        image: amplify,
        title: "紡績工場の生産量可視化ダッシュボード画面の作成",
        period: "2023/4 - 2023/8",
        summary: "紡績工場の生産量を可視化するダッシュボード画面を作成。"
    }
];



export const Experience = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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

