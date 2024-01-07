import styled from "styled-components";
import CakeIcon from '@mui/icons-material/Cake';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import { ProfItem } from "./ProfItem";
import { Grid } from "@mui/material";

type ProfObject = {
    icon: JSX.Element,
    title: string,
    subheader: string
};

const profItems: ProfObject[] = [
    {
        icon: <CakeIcon />,
        title: "誕生日",
        subheader: "1993/2/26"
    },
    {
        icon: <CakeIcon />,
        title: "星座",
        subheader: "うお座"
    },
    {
        icon: <BloodtypeIcon />,
        title: "血液型",
        subheader: "B型"
    },
    {
        icon: <CakeIcon />,
        title: "出身",
        subheader: "大阪府枚方市"
    },
    {
        icon: <CakeIcon />,
        title: "職業",
        subheader: "ITエンジニア"
    },
    {
        icon: <CakeIcon />,
        title: "好きな食べ物",
        subheader: "チョコレート"
    },
    {
        icon: <CakeIcon />,
        title: "趣味",
        subheader: "音楽鑑賞、スポーツ観戦"
    },
    {
        icon: <CakeIcon />,
        title: "応援しているサッカーチーム",
        subheader: "リバプールFC"
    },
    {
        icon: <CakeIcon />,
        title: "応援している野球チーム",
        subheader: "埼玉西武ライオンズ"
    },
    {
        icon: <CakeIcon />,
        title: "好きなアーティスト",
        subheader: "B'z、Mr.Children、サザンオールスターズ、Oasis"
    },
    {
        icon: <CakeIcon />,
        title: "好きな外国",
        subheader: "ドイツ"
    },
    {
        icon: <CakeIcon />,
        title: "好きな言葉",
        subheader: "人間万事塞翁が馬"
    },
];

export const Profile = () => {
    return (
        <>
          <SDiv>
              <h1>プロフィール</h1>
              <GridDiv>
                    <Grid container columns={{ xs: 6, sm: 8, md: 12 }} columnSpacing={6} alignItems='center' justifyContent='center'>
                      {profItems.map((profItem: ProfObject) => {
                          return (
                              <Grid item xs={6} sm={4} md="auto" pb={4}>
                                  <ProfItem
                                      icon={profItem.icon}
                                      title={profItem.title}
                                      subheader={profItem.subheader}
                                  />
                              </Grid>
                          );
                      })}
                  </Grid>
              </GridDiv>
          </SDiv>
        </>
    )
}

const SDiv = styled.div`
background-color: lightgray;
margin: 0;
height: 500px;
h1 {
    text-align: center;
    margin: 0;
    padding-top: 10px;
    padding-bottom: 10px;
}
`;

const GridDiv = styled.div`
padding-left: 70px;
padding-right: 70px;
`;

