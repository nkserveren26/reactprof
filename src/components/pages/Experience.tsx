import styled from "styled-components"
import Box from '@mui/material/Box';
import { Card, CardContent, Typography, } from "@mui/material";

export const Experience = () => {
    return (
        <>
        <Box m={0} sx={{
            height: 200,
            backgroundColor: 'white',
        }}>
            <h2>COMPANY</h2>
            <p>株式会社KYOSO - AWS Enginner (2022/8 ~ 現在) </p>
            <p>株式会社シーエーシー - Server Side Engineer (2021/4 ~ 2022/7) </p>
            <p>ESRIジャパン株式会社 - Infrastructure Engineer (2018/4 ~ 2021/3) </p>
        </Box>
            <Box sx={{
                height: 200,
                backgroundColor: 'white',
            }}>
                <Card>
                    <CardContent>
                        <Typography pl={2} variant="h4">
                            工場の生産量可視化アプリの改修
                        </Typography>
                        <Typography pt={1} variant="h6">
                            ＜期間＞
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}

const SDiv = styled.div`
background-color: white;
margin: 0;
`;