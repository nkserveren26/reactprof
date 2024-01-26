import { CardContent, Typography, Avatar } from "@mui/material";
import { Card } from "@mui/material";
import styled from "styled-components";
import { SkillCardProps } from "./interfaces";
import React from 'react';



export const SkillCard: React.FC<SkillCardProps> = (props) => {
    const {title, images} = props;
    return (
        <>
            <Card sx={{ width: 500, height: 220 }}>
                <CardContent>
                    <Typography align="center" variant="h4" paddingTop={2} paddingBottom={3}>
                        {title}
                    </Typography>
                </CardContent>
                <CardContent>
                    <SDivFlex>
                        {images.map((image, index) => (
                            <Avatar alt={image.alt} src={image.src} sx={{ width: image.width, height: image.height }} variant="square" key={index} />
                        ))}
                    </SDivFlex>
                </CardContent>
            </Card>
        </>
    );

};

const SDivFlex = styled.div`
display: flex;
flex-basis: 50px;
gap: 20px 20px;
padding: 0px;
justify-content: center;
`;