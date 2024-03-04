import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import styled from "styled-components";
import { BlogCardProps } from "../interface/interfaces";
import React from "react";

export const BlogCard = ({ props }: { props: BlogCardProps }) => {
    // props内のプロパティ
    const { title, published_date, image, url } = props;

    // リンク先へ遷移する関数
    const handleCardClick = () => {
        // _blankは別タブで開くオプション
        // noopenerはリンク先ページでリンク元ページを参照できなくするオプション
        window.open(url, "_blank", "noopener");
    };

    return (
        <>
            <StyledCard onClick={handleCardClick} style={{ cursor: 'pointer' }} sx={{ width: 345, height: 310 }}>
                <CardMedia
                    sx={{ height: 160 }}
                    image={`${process.env.PUBLIC_URL}/${image}`}
                />
                <CardContent>
                    <Box height={95}>
                        <Typography fontWeight="bold" variant="h6" >
                            {title}
                        </Typography>
                    </Box>
                    <Typography >
                        {published_date}
                    </Typography>
                </CardContent>
            </StyledCard>
        </>
    )
}

const StyledCard = styled(Card)`
  && {
    transition: transform 0.2s ease-in-out;
    &:hover {
        transform: scale(1.04, 1.04);
    }
  }
  
`;