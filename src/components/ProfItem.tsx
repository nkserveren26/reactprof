import { Avatar, Card, CardHeader } from "@mui/material";
import CakeIcon from '@mui/icons-material/Cake';

type Props = {
    icon: JSX.Element,
    title: string,
    subheader: string
}

export const ProfItem: React.FC<Props> = (props) => {
    const { icon,title,subheader } = props;
    return (
        <Card>
            <CardHeader
              avatar={<Avatar>{icon}</Avatar>}
              title={title}
              subheader={subheader}
             />
        </Card>
    );

};