import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BlogCard } from "../card/BlogCard";
import { BlogCardProps, ExperienceCardProps } from "../interface/interfaces";
import axios from "axios";

const testdata: BlogCardProps = {
    title: "test",
    image: "Amplify.jpg",
    published_date: "2023/1/1",
    url: ""
}

export const Blog: React.FC = () => {
    const [blogList, setBlogData] = useState([]);

    useEffect(() => {
        const getBlogData = async () => {
            try {
                const apiUrl: string = process.env.REACT_APP_GET_BLOGS_URL;
                // worksDataを取得
                const response = await axios.get(apiUrl);
                const data = [response.data] as const;
                //取得したworksDataをworksDataListにセット
                setBlogData(...data);
                
            } catch (error) {
                console.error("Error getting blog data:", error);
            }
        }

        getBlogData();
    }, []);
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
                        {Array.isArray(blogList) && blogList.map((blog, index) => (
                            <Grid item xs={6} sm="auto" md="auto" key={index} pb={6}>
                                <BlogCard props={blog} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}