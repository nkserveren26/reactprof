import { Box, Typography } from "@mui/material";
import { ProfileBlockProps } from "./interfaces";

// Aboutページの各ブロックの外枠を定義するコンポーネント
export const ProfileBlock = ({blockTitle, backGroundColor, height, children}: ProfileBlockProps) => {
    const getProfileBlockHeight = () => {
        let blockHeight: string = "";
        // 横幅が800px以下の場合は高さをheightの1.3倍にする。
        if (window.innerWidth <= 1200) {
            // 横幅が800px以下の場合は高さを800pxに固定
            blockHeight = String(parseInt(height) * 1.5);
        } else {
            blockHeight = height;
        }
        return blockHeight;
    }

    const profileBlockHeight = getProfileBlockHeight();
    const boxStyle = {
        backgroundColor: backGroundColor, // 背景色を指定
        height: `${profileBlockHeight}px`  // ブロックの縦長を指定
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