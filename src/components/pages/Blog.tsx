import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BlogCard } from "../card/BlogCard";
import axios from "axios";
import { ScrollToTopButton } from "../button/ScrollToTopButton";

export const Blog: React.FC = () => {
    const [blogList, setBlogData] = useState([]);

    useEffect(() => {
        const getBlogData = async () => {
            try {
                const apiUrl: string = process.env.REACT_APP_GET_BLOGS_URL;
                // APIから、これまで投稿した技術記事の一覧を取得
                const response = await axios.get(apiUrl);
                const data = [response.data] as const;
                //取得したデータをblogListにセット
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
                <Typography paddingBottom={3} variant="h6">これまでに私が投稿した技術記事です</Typography>
                <Grid columns={{ xs: 6, sm: 8, md: 12 }} container columnSpacing={6} alignItems="center" justifyContent="center">
                    {Array.isArray(blogList) && blogList.map((blog, index) => (
                        <Grid item xs={6} sm="auto" md="auto" key={index} pb={6}>
                            <BlogCard props={blog} />
                        </Grid>
                    ))}
                </Grid>
                <ScrollToTopButton />
            </Box>
        </>
    )
}