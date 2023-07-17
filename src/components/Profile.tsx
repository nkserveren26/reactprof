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
    }
];

export const Profile = () => {
    return (
        <>
          <SDiv>
              <h1>プロフィール</h1>
              <GridDiv>
                  <Grid container spacing={3} columns={{ xs: 6, sm: 8, md: 12 }} alignItems='center' justifyContent='center'>
                      {profItems.map((profItem: ProfObject) => {
                          return (
                              <Grid item xs={6} sm={4} md={4}>
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

