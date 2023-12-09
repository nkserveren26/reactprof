import { Card, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from "@mui/material";
import { useState } from "react";
import amplify from "../../img/Amplify.jpg";
import { Multiline } from './Multiline';

const summary = "紡績工場の生産量を可視化するダッシュボード画面を作成。";

export const ExperienceCard = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Card onClick={handleOpen} style={{ cursor: 'pointer' }} sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 160 }}
                    image={amplify}
                />
                <CardContent>
                    <Typography paddingBottom={1} fontWeight="bold" variant="h6" >
                        紡績工場の生産量可視化ダッシュボード画面の作成
                    </Typography>
                    <Typography >
                        2023/04 - 2023/08
                    </Typography>
                </CardContent>
            </Card>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle fontWeight="bold">紡績工場の生産量可視化ダッシュボード画面の作成</DialogTitle>
                <DialogContent>
                    <DialogContentText style={{ color: 'black' }}>
                        <Typography pt={1} fontWeight="bold" variant="subtitle1">
                            ◆Period
                        </Typography>
                        <Typography variant="body1">
                            2023/4~2023/8
                        </Typography>
                        <Typography pt={2} fontWeight="bold" variant="subtitle1">
                            ◆Summary
                        </Typography>
                        <Typography variant="body1">
                            <Multiline lines={summary} />
                        </Typography>
                        <Typography pt={2} fontWeight="bold" variant="subtitle1">
                            ◆Frontend
                        </Typography>
                        <Typography variant="body1">
                            Vue.js、TypeScript、Amplify
                        </Typography>
                        <Typography pt={2} fontWeight="bold" variant="subtitle1">
                            ◆Backend
                        </Typography>
                        <Typography variant="body1">
                            Python、API Gateway、Lambda
                        </Typography>
                        <Typography pt={2} fontWeight="bold" variant="subtitle1">
                            ◆Database
                        </Typography>
                        <Typography variant="body1">
                            DynamoDB
                        </Typography>
                        <Typography pt={2} fontWeight="bold" variant="subtitle1">
                            ◆Version Control Tool
                        </Typography>
                        <Typography variant="body1">
                            Git
                        </Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <button onClick={handleClose}>Close</button>
                </DialogActions>
            </Dialog>
        </>
    )
}