import styled from "styled-components"
import Box from '@mui/material/Box';

export const Experience = () => {
    return (
        <>
         <Box sx={{
            height: 200,
            backgroundColor: 'white',
        }}>
            <h2>COMPANY</h2>
            <p>株式会社KYOSO - AWS Enginner (2022/8 ~ 現在) </p>
            <p>株式会社シーエーシー - Server Side Engineer (2021/4 ~ 2022/7) </p>
            <p>ESRIジャパン株式会社 - Infrastructure Engineer (2018/4 ~ 2021/3) </p>
        </Box>
        </>
    )
}

const SDiv = styled.div`
background-color: white;
margin: 0;
`;