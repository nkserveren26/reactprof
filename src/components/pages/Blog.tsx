import { Box, Typography } from "@mui/material";
import React from "react";

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
            </Box>
        </>
    )
}