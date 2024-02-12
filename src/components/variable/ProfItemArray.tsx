// コンポーネントをインポートして使用するにはファイル拡張子がtsxである必要がある

import { ProfItemProps } from "../interface/interfaces";
import CakeIcon from '@mui/icons-material/Cake';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import StarIcon from '@mui/icons-material/Star';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import WorkIcon from '@mui/icons-material/Work';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import LanguageIcon from '@mui/icons-material/Language';
import SmsIcon from '@mui/icons-material/Sms';
import React from 'react';


export const profItems: ProfItemProps[] = [
    {
        icon: <CakeIcon />,
        title: "誕生日",
        subheader: "1993/2/26"
    },
    {
        icon: <StarIcon sx={{ color: '#FFD700' }} />,
        title: "星座",
        subheader: "うお座"
    },
    {
        icon: <BloodtypeIcon />,
        title: "血液型",
        subheader: "B型"
    },
    {
        icon: <LocationCityIcon />,
        title: "出身",
        subheader: "大阪府枚方市"
    },
    {
        icon: <WorkIcon />,
        title: "職業",
        subheader: "ITエンジニア"
    },
    {
        icon: <FastfoodIcon />,
        title: "好きな食べ物",
        subheader: "チョコレート"
    },
    {
        icon: <FavoriteIcon />,
        title: "趣味",
        subheader: "音楽鑑賞、スポーツ観戦"
    },
    {
        icon: <SportsSoccerIcon />,
        title: "応援しているサッカーチーム",
        subheader: "リバプールFC"
    },
    {
        icon: <SportsBaseballIcon />,
        title: "応援している野球チーム",
        subheader: "埼玉西武ライオンズ"
    },
    {
        icon: <MusicNoteIcon />,
        title: "好きなアーティスト",
        subheader: "B'z、Mr.Children、サザンオールスターズ、Oasis"
    },
    {
        icon: <LanguageIcon />,
        title: "好きな外国",
        subheader: "ドイツ"
    },
    {
        icon: <SmsIcon />,
        title: "好きな言葉",
        subheader: "人間万事塞翁が馬"
    },
];