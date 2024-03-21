import Box from '@mui/material/Box';
import {  Grid, Typography } from "@mui/material";
import { ExperienceCard } from '../card/ExperienceCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ScrollToTopButton } from '../button/ScrollToTopButton';
import React from 'react';


export const Experience: React.FC = () => {
    // worksDataを保持するuseState
    const [worksDataList, setworksData] = useState([]);
    
    useEffect(() => {
        const getWorksData = async () => {
            try {
                const apiUrl: string = process.env.REACT_APP_GET_WORKS_URL;
                // worksDataを取得
                const response = await axios.get(apiUrl);
                const data = [response.data] as const;
                //取得したworksDataをworksDataListにセット
                setworksData(...data);

            } catch (error) {
                console.error("Error getting works data:", error);
            }
        }

        getWorksData();
    }, []);

    // データがまだ取得されていない場合の処理
    if (worksDataList.length === 0) {
        return <p>Loading...</p>;
    }

    return (
        <>
        <Box 
            display="flex" 
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            m={0} pt={5} pl={2} pr={2} sx={{
            backgroundColor: 'white',
        }}>
            <Typography paddingBottom={3} fontWeight="bold" variant="h3">Experiences</Typography>
            <Typography paddingBottom={3} variant="h6">これまでに私が経験した業務です</Typography>
            {/* ExperienceCardを一覧表示する */}
            <Grid columns={{ xs: 6, sm: 8, md: 12 }} container columnSpacing={6} alignItems="center" justifyContent="center">
                {Array.isArray(worksDataList) && worksDataList.map((worksData, index) => (
                    <Grid item xs={6} sm="auto" md="auto" key={index} pb={6}>
                        <ExperienceCard props={worksData} />
                    </Grid>
                ))}
            </Grid>
            {/* 画面トップにスクロールするボタン */}
            <ScrollToTopButton />
        </Box>
        </>
    )
}

