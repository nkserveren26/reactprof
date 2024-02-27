import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import styled from "styled-components";
import { BlogCardProps } from "../interface/interfaces";

export const BlogCard = ({ props }: { props: BlogCardProps }) => {
    // props内のプロパティ
    const { title, period, image, link } = props;

    return (
        <>
            <StyledCard style={{ cursor: 'pointer' }} sx={{ width: 345, height: 300 }}>
                <CardMedia
                    sx={{ height: 160 }}
                    image={`${process.env.PUBLIC_URL}/${image}`}
                />
                <CardContent>
                    <Box height={70}>
                        <Typography fontWeight="bold" variant="h6" >
                            {title}
                        </Typography>
                    </Box>
                    <Typography >
                        {period}
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