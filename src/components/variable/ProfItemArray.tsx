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
        icon: <BloodtypeIcon sx={{ color: '#FF4500' }} />,
        title: "血液型",
        subheader: "B型"
    },
    {
        icon: <LocationCityIcon />,
        title: "出身",
        subheader: "大阪府枚方市"
    },
    {
        icon: <WorkIcon sx={{ color: '#8B4513' }} />,
        title: "職業",
        subheader: "ITエンジニア"
    },
    {
        icon: <FastfoodIcon sx={{ color: '#CD853F' }} />,
        title: "好きな食べ物",
        subheader: "チョコレート"
    },
    {
        icon: <FavoriteIcon sx={{ color: '#FF1493' }} />,
        title: "趣味",
        subheader: "音楽鑑賞、スポーツ観戦"
    },
    {
        icon: <SportsSoccerIcon sx={{ color: '#000000' }} />,
        title: "応援しているサッカーチーム",
        subheader: "リバプールFC"
    },
    {
        icon: <SportsBaseballIcon />,
        title: "応援している野球チーム",
        subheader: "埼玉西武ライオンズ"
    },
    {
        icon: <MusicNoteIcon sx={{ color: '#FFA500' }} />,
        title: "好きなアーティスト",
        subheader: "B'z、Mr.Children、サザンオールスターズ、Oasis"
    },
    {
        icon: <LanguageIcon sx={{ color: '#1E90FF' }} />,
        title: "好きな外国",
        subheader: "ドイツ"
    },
    {
        icon: <SmsIcon sx={{ color: '#006400' }} />,
        title: "好きな言葉",
        subheader: "人間万事塞翁が馬"
    },
];