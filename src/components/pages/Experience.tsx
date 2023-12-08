import Box from '@mui/material/Box';
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Multiline } from "../Multiline";
import vmware from "../../img/factory_arch.jpg";
import { CompanyItem } from '../CompanyItem';

const companyNameList: string[] = [
    "株式会社KYOSO - AWS Enginner (2022/8 ~ 現在)",
    "株式会社シーエーシー - Server Side Engineer (2021/4 ~ 2022/7)",
    "ESRIジャパン株式会社 - Infrastructure Engineer(2018 / 4 ~2021 / 3)"
]


export const Experience = () => {
    const summary = "生産量可視化アプリの機能改善を行いました。\nフロントエンド、バックエンド両方の改修を担当。";
    return (
        <>
        <Box m={0} sx={{
            height: 200,
            backgroundColor: 'white',
        }}>
            <Typography variant="h4" textAlign="center">COMPANY</Typography>
            {companyNameList.map((companyName, index) => (
                <CompanyItem key={index} companyName={companyName} />
            ))}
            
        </Box>
            <Box sx={{
                height: 200,
                backgroundColor: 'white',
            }}>
                <Grid container alignItems="center" justifyContent="center">
                    <Grid item xs={10}>
                        <Card sx={{
                            border: '1px solid black', // 黒い外枠
                        }}>
                            <CardContent>
                                <Typography pl={2} variant="h4" sx={{ 
                                    fontFamily: "Roboto",
                                    fontWeight: "Bold",
                                    color: "#4169e1",
                                 }}>
                                    工場の生産量可視化アプリの改修
                                </Typography>
                                <Box pt={3} sx={{
                                    display: 'flex',
                                    justifyContent: "center"
                                }}>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 350 }}
                                        src={vmware}
                                        alt="Live from space album cover"
                                    />
                                    <Box pl={4}>
                                        <Typography pt={1} variant="h6">
                                            ＜期間＞
                                        </Typography>
                                        <Typography variant="body1">
                                            2023/4~2023/8
                                        </Typography>
                                        <Typography pt={1} variant="h6">
                                            ＜概要＞
                                        </Typography>
                                        <Typography variant="body1">
                                            <Multiline lines={summary}/>
                                        </Typography>
                                        <Typography pt={1} variant="h6">
                                            ＜フロントエンド＞
                                        </Typography>
                                        <Typography variant="body1">
                                            Vue.js、TypeScript、Amplify
                                        </Typography>
                                        <Typography pt={1} variant="h6">
                                            ＜バックエンド＞
                                        </Typography>
                                        <Typography variant="body1">
                                            Python、API Gateway、Lambda
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                </Grid>
                </Grid>
            </Box>
        </>
    )
}

