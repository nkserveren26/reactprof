import { Avatar, Card, CardHeader } from "@mui/material";
import CakeIcon from '@mui/icons-material/Cake';
import { ProfItemProps } from "./interfaces";

type Props = {
    icon: JSX.Element,
    title: string,
    subheader: string
}

export const ProfItem: React.FC<ProfItemProps> = (props) => {
    const { icon, title, subheader } = props;
    const getItemWidth = () => {
        let itemWidth: number = 0;
        if (window.innerWidth <= 800) {
            itemWidth = 150;
        } else {
            itemWidth = 300;
        }
        return itemWidth;
    }
    const profItemWidth: number = getItemWidth();
    return (
        <Card sx={{ width: profItemWidth, height: 90 }} >
            <CardHeader
              avatar={<Avatar>{icon}</Avatar>}
              title={title}
              subheader={subheader}
             />
        </Card>
    );

};