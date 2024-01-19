import { Box, Typography } from "@mui/material";
import { ProfileBlockProps } from "./interfaces";

// Aboutページの各ブロックの外枠を定義するコンポーネント
export const ProfileBlock = ({blockTitle, backGroundColor, height, children}: ProfileBlockProps) => {
    const boxStyle = {
        backgroundColor: backGroundColor, // 背景色を指定
        height: height  // ブロックの縦長を指定
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