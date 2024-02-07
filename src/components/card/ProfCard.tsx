import { Avatar, Card, CardHeader } from "@mui/material";
import { ProfItemProps } from "../interface/interfaces";
import React from 'react';

export const ProfCard: React.FC<ProfItemProps> = (props) => {
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