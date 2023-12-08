import Box from '@mui/material/Box';
import { Button, Card, CardActions, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from "@mui/material";
import { CompanyItem } from '../CompanyItem';
import { useState } from 'react';
import amplify from "../../img/Amplify.jpg";
import { Multiline } from '../Multiline';

const companyNameList: string[] = [
    "株式会社KYOSO - AWS Enginner & Developer (2022/8 ~ 現在)",
    "株式会社シーエーシー - Developer (2021/4 ~ 2022/7)",
    "ESRIジャパン株式会社 - Infrastructure Engineer(2018 / 4 ~2021 / 3)"
]

const summary = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa";


export const Experience = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
        <Box 
            display="flex" 
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            m={0} sx={{
            height: 200,
            backgroundColor: 'white',
        }}>
            <Typography paddingBottom={1} fontWeight="bold" variant="h4">COMPANY</Typography>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="left"
            >
                {companyNameList.map((companyName, index) => (
                    <CompanyItem key={index} companyName={companyName} />
                ))}
            </Box>
        </Box>
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{
                height: 300,
                backgroundColor: 'white',
            }}
        >
            <Typography paddingBottom={1} fontWeight="bold" variant="h4">Experiences</Typography>
            <Grid container alignItems="center" justifyContent="center">
            <Grid item xs={10}>
                        <Card onClick={handleOpen} style={{ cursor: 'pointer' }} sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 160 }}
                                image={amplify}
                            />
                            <CardContent>
                                <Typography paddingBottom={1} fontWeight="bold" variant="h6" >
                                    工場の生産量可視化アプリの改修
                                </Typography>
                                <Typography >
                                    2023/04 - 2023/08
                                </Typography>
                            </CardContent>
                        </Card>
                        <Dialog open={open} onClose={handleClose}>
                            <DialogTitle fontWeight="bold">工場の生産量可視化アプリの改修</DialogTitle>
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
                                    <Typography pt={1} fontWeight="bold" variant="subtitle1">
                                        ◆Database
                                    </Typography>
                                    <Typography variant="body1">
                                        DynamoDB
                                    </Typography>
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <button onClick={handleClose}>Close</button>
                            </DialogActions>
                        </Dialog>
        </Grid>
        </Grid>
        </Box>
        </>
    )
}

