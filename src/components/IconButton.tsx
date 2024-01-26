import { Button } from "@mui/material";
import { IconButtonProps } from "./interfaces";
import React from 'react';

// アイコン付きのボタンコンポーネント
export const IconButton: React.FC<IconButtonProps> = ({ onClick, icon, children, backgroundColor, labelColor }) => {
    return (
        <>
            <Button variant="contained" onClick={onClick} startIcon={icon} style={{ backgroundColor: backgroundColor, color: labelColor }}>
                {children}
            </Button>
        </>
    );
}