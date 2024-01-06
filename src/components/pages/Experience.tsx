import Box from '@mui/material/Box';
import {  Grid, Typography } from "@mui/material";
import { ExperienceCardProps } from '../interfaces';
import { ExperienceCard } from '../ExperienceCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

const experienceItems: ExperienceCardProps[] = [
    {
        image: "Amplify.jpg",
        title: "紡績工場の生産量可視化ダッシュボード画面の作成",
        period: "2023/4 - 2023/8",
        summary: "紡績工場の生産量を可視化するダッシュボード画面を作成。",
        technical_elements:
            {
                "◆Frontend": "Vue.js、TypeScript、Amplify",
                "◆Backend": "Python、API Gateway、Lambda",
                "◆Database": "DynamoDB",
                "◆Version Control Tool": "Git",
                "◆Project Management Tool": "Backlog",
            }
    },
    {
        image: "Amplify.jpg",
        title: "自社Webサービスの機能追加",
        period: "2023/5",
        summary: "自社WebサービスにCSVダウンロード機能を追加。\nバックエンドの実装を担当。",
        technical_elements:
        {
            "◆Backend": "JavaScript、API Gateway、Lambda",
            "◆Database": "DynamoDB",
            "◆Version Control Tool": "Git",
            "◆Project Management Tool": "Backlog",
        }
    },
    {
        image: "Amplify.jpg",
        title: "SORACOMからS3へのファイル転送基盤の構築",
        period: "2023/5 - 2023/6",
        summary: "SORACOM側のS3転送設定およびAWS側の基盤構築を担当。\n基盤リソースはCDKで構築。",
        technical_elements:
        {
            "◆Language": "TypeScript",
            "◆IaC": "CDK",
            "◆AWS Resource": "S3、IAM Role・IAM Policy、DynamoDB、Lambda、Lambda Layer、EventBridge",
            "◆Project Management Tool": "Backlog",
        }
    },
    {
        image: "Amplify.jpg",
        title: "Webアプリケーション認証APIの改修",
        period: "2023/10 - 現在",
        summary: "Webアプリケーション認証APIの改修を実施。\n改修では設計、実装、単体テストを担当。",
        technical_elements:
        {
            "◆Language": "JavaScript",
            "◆Backend": "API Gateway、Lambda、Cognito",
            "◆Database": "DynamoDB",
            "◆Version Control Tool": "Git",
            "◆Test Tool": "Postman",
            "◆Project Management Tool": "Backlog",
        }
    },
    {
        image: "Amplify.jpg",
        title: "フロントエンドCICD基盤構築業務",
        period: "2023/9",
        summary: "Reactで構築したフロントエンドのCICD（Continuous Integration and Continuous Deployment）基盤を構築。\nCodeBuildでのビルドプロセス設計、実装。",
        technical_elements:
        {
            "◆CICD Tool": "CodeBuild",
            "◆Project Management Tool": "Backlog",
        }
    },
    {
        image: "Amplify.jpg",
        title: "Amazon Aurora間のデータリアルタイム同期基盤構築",
        period: "2023/8 - 2023/9",
        summary: "異なるAWSアカウントで稼働するAWS Aurora間のリアルタイムデータ同期基盤を構築し、異なるAWSアカウント間でのデータの連携を確立。",
        technical_elements:
        {
            "◆AWS Resource": "Database Migration Service、Amazon Aurora、VPC、VPC Peering",
            "◆RDBMS": "MySQL",
            "◆Version Control Tool": "Git",
            "◆Project Management Tool": "Backlog",
        }
    },
];



export const Experience = () => {
    const [worksDataList, setworksData] = useState([]);
    
    useEffect(() => {
        const getWorksData = async () => {
            try {
                const apiUrl: string = process.env.REACT_APP_GET_WORKS_URL;
                const response = await axios.get(apiUrl);
                const data = [response.data] as const;
                setworksData(...data);
                console.log(worksDataList);

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
            <p>{worksDataList[0]["userId"]}</p>
            <Typography paddingBottom={3} fontWeight="bold" variant="h3">Experiences</Typography>
                <Grid columns={{ xs: 6, sm: 8, md: 12 }} container columnSpacing={6} alignItems="center" justifyContent="center">
                    {Array.isArray(experienceItems) && experienceItems.map((worksData, index) => (
                        <Grid item xs={6} sm={4} md="auto" key={index} pb={6}>
                            <ExperienceCard props={worksData} />
                        </Grid>
                    ))}
                </Grid>
        </Box>
        </>
    )
}

