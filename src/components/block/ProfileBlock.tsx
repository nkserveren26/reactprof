import { Box, Typography } from "@mui/material";
import { ProfileBlockProps } from "../interface/interfaces";
import { useEffect, useState } from "react";
import React from 'react';

// Aboutページの各ブロックの外枠を定義するコンポーネント
export const ProfileBlock = ({blockTitle, backGroundColor, height, thresholdWidth, maxHeight, children}: ProfileBlockProps) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // ウィンドウサイズ変更をリッスンするイベントリスナーを追加
        window.addEventListener('resize', handleResize);

        // コンポーネントのアンマウント時にイベントリスナーを削除
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    const getProfileBlockHeight = () => {
        let blockHeight: string = "";
        // 横幅が800px以下の場合は高さをheightの1.3倍にする。
        if (windowWidth <= thresholdWidth) {
            // 横幅が800px以下の場合は高さを800pxに固定
            blockHeight = maxHeight;
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