import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { BlogCard } from "../card/BlogCard";
import { BlogCardProps, ExperienceCardProps } from "../interface/interfaces";

const testdata: BlogCardProps = {
    title: "test",
    image: "Amplify.jpg",
    period: "2023/1/1",
    link: ""
}

export const Blog: React.FC = () => {
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
                <Typography paddingBottom={3} fontWeight="bold" variant="h3">My Tech Blogs</Typography>
                <Grid columns={{ xs: 6, sm: 8, md: 12 }} container columnSpacing={6} alignItems="center" justifyContent="center">
                    <Grid item xs={6} sm="auto" md="auto" pb={6}>
                        <BlogCard props={testdata} />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}