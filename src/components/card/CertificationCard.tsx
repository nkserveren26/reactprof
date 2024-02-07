import { Card } from "@mui/material";
import { CardContent, Typography, } from "@mui/material";
import { CertificationList } from "../list/CertificationList";
import { CertificationCardProps } from "../interface/interfaces";
import React from 'react';

// 特定カテゴリの資格一覧を表示するCardコンポーネント
export const CertificationCard: React.FC<CertificationCardProps> = (props) => {
    
    // categoryNameとcertificationListをpropsとして受け取る
    const {categoryName, certificationList} = props;
    return (
        <>
            <Card sx={{ width: 500, height: 200 }}>
                <CardContent>
                    <Typography align="center" variant="h4">
                        {categoryName}
                    </Typography>
                </CardContent>
                <CardContent>
                    <CertificationList list={certificationList} />
                </CardContent>
            </Card>
        </>
    )
}