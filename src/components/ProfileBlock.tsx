import { Box, Typography } from "@mui/material";

type ProfileBlockProps = {
    blockTitle: string,
    backGroundColor: string
    children: React.ReactNode;
};

export const ProfileBlock = ({blockTitle, backGroundColor, children}: ProfileBlockProps) => {
    const boxStyle = {
        backgroundColor: backGroundColor, // 背景色を指定
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