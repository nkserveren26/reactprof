import Box from '@mui/material/Box';
import {  Grid, Typography } from "@mui/material";
import amplify from "../../img/Amplify.jpg";
import { ExperienceCardProps } from '../interfaces';
import { ExperienceCard } from '../ExperienceCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

const experienceItems: ExperienceCardProps[] = [
    {
        image: "/src/components/img/Amplify.jpg",
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
    },
    {
        image: amplify,
        title: "自社Webサービスの機能追加",
        period: "2023/5",
        summary: "自社WebサービスにCSVダウンロード機能を追加。\nバックエンドの実装を担当。",
        technical_elements:
        {
            "◆Backend": "JavaScript、API Gateway、Lambda",
            "◆Database": "DynamoDB",
            "◆Version Control Tool": "Git"
        }
    }
];



export const Experience = () => {
    const [worksDataList, setworksData] = useState([]);
    console.log("start rendering");

    
    useEffect(() => {
        const getWorksData = async () => {
            try {
                const apiUrl: string = process.env.REACT_APP_GET_WORKS_URL;
                //const url: string = "https://jsonplaceholder.typicode.com/posts";
                const response = await axios.get(apiUrl);
                setworksData(response.data);
                console.log(typeof(response.data));
                console.log(response.data);
                console.log("worksDataListのデータを表示");
                console.log(worksDataList);

            } catch (error) {
                console.error("Error getting works data:", error);
            }
        }

        getWorksData();
    }, []);
    

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
                <Grid columns={{ xs: 6, sm: 8, md: 12 }} container alignItems="center" justifyContent="center">
                    {Array.isArray(experienceItems) && experienceItems.map((worksData, index) => (
                        <Grid item xs={6} sm={4} md={4} key={index}>
                            <ExperienceCard props={worksData} />
                        </Grid>
                    ))}
                </Grid>
        </Box>
        </>
    )
}

