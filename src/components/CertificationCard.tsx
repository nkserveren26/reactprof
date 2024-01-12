import { Card } from "@mui/material";
import { CardContent, Typography, } from "@mui/material";
import { CertificationList } from "./CertificationList";
import { certificationCardProps } from "./interfaces";

// 特定カテゴリの資格一覧を表示するCardコンポーネント
export const CertificationCard = ({props}: {props: certificationCardProps}) => {
    
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