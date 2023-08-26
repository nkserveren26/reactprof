import { Card } from "@mui/material";
import { CardContent, Typography, } from "@mui/material";
import { CertificationList } from "./CertificationList";
import { certificationCardProps } from "./interfaces";

export const CertificationCard = ({props}: {props: certificationCardProps}) => {
    const {categoryName, certificationList} = props;
    return (
        <>
            <Card>
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