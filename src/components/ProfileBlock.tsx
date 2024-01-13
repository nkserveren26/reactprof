import { Box, Grid, Typography } from "@mui/material";
import { CertificationCard } from "./CertificationCard";

type ProfileBlockProps = {
    blockTitle: string,
    children: React.ReactNode;
};

export const ProfileBlock = ({blockTitle, children}: ProfileBlockProps) => {
    const boxStyle = {
        backgroundColor: "#ffe4c4", // 背景色を指定
        height: "500px"
    };
    return (
        <Box style={boxStyle}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
        >
            <Typography paddingBottom={3} variant="h4" fontWeight="bold">{blockTitle}</Typography>
            {children}
        </Box>
    );
}