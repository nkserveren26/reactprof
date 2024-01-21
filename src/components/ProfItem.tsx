import { Avatar, Card, CardHeader } from "@mui/material";
import CakeIcon from '@mui/icons-material/Cake';
import { ProfItemProps } from "./interfaces";

export const ProfItem: React.FC<ProfItemProps> = (props) => {
    const { icon, title, subheader } = props;

    return (
        <Card sx={{ width: 300, height: 90 }} >
            <CardHeader
              avatar={<Avatar>{icon}</Avatar>}
              title={title}
              subheader={subheader}
             />
        </Card>
    );

};