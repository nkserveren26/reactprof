import { Box, Card, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { Multiline } from './Multiline';
import { ExperienceCardProps } from "./interfaces";
import { IconButton } from "./IconButton";
import React from 'react';
import styled from "styled-components";

export const ExperienceCard = ({props}: {props: ExperienceCardProps}) => {
    
    // props内のプロパティ
    const {title, period, image, summary, technical_elements } = props;
    
    // ダイアログの開閉を制御するstate
    const [open, setOpen] = useState(false);

    // ダイアログを開く関数
    const handleOpen = () => {
        setOpen(true);
    };

    // ダイアログを閉じる関数
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <StyledCard onClick={handleOpen} style={{ cursor: 'pointer' }} sx={{ width: 345, height: 300 }}>
                <CardMedia
                    sx={{ height: 160 }}
                    image={`${process.env.PUBLIC_URL}/${image}`}
                />
                <CardContent>
                    <Box height={70}>
                        <Typography fontWeight="bold" variant="h6" >
                            {title}
                        </Typography>
                    </Box>
                    <Typography >
                        {period}
                    </Typography>
                </CardContent>
            </StyledCard>

            {/* ダイアログ */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle fontWeight="bold">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText style={{ color: 'black' }}>
                        <Typography pt={1} fontWeight="bold" variant="subtitle1">
                            ◆Period
                        </Typography>
                        <Typography variant="body1">
                            {period}
                        </Typography>
                        <Typography pt={2} fontWeight="bold" variant="subtitle1">
                            ◆Summary
                        </Typography>
                        <Typography variant="body1">
                            <Multiline lines={summary} />
                        </Typography>
                        {Object.keys(technical_elements).map((technical_element_key, index) => {
                            return (
                                <Box key={index}>
                                    <Typography pt={2} fontWeight="bold" variant="subtitle1">
                                        {`◆${technical_element_key}`}
                                    </Typography>
                                    <Typography variant="body1">
                                        {technical_elements[technical_element_key]}
                                    </Typography>
                                </Box>
                            )
                        })}
                    </DialogContentText>
                </DialogContent>
                <DialogActions style={{ justifyContent: 'center' }}>
                    <IconButton variant="contained" onClick={handleClose} icon={<CloseIcon />} backgroundColor="gray" labelColor="white">
                        Close
                    </IconButton>
                </DialogActions>
            </Dialog>
        </>
    )
}

const StyledCard = styled(Card)`
  && {
    transition: transform 0.2s ease-in-out;
    &:hover {
        transform: scale(1.04, 1.04);
    }
  }
  
`;