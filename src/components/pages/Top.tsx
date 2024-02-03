import styled from 'styled-components';
import background from "../../img/IMG_4871.jpg";
import snoopy from "../../img/IMG_7330.jpg";
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';



export const Top = () => {
  const customFontFamily = 'Palatino';
    return (
          <SBox>
            <Grid container columns={{ xs: 6, sm: 8, md: 12 }} alignItems='center' justifyContent='center'>
              <HiddenOnSmallScreen item  md="auto" pt={11} >
                <img src={snoopy} alt="Top Page Pictures" height="270px" />
              </HiddenOnSmallScreen>
              <Grid item md="auto" pl={4}>
                  <Typography pt={9} fontWeight="bold" variant="h3" style={{ fontFamily: customFontFamily }}>
                    Welcome to my page!
                  </Typography>
                  <Typography pt={2} fontWeight="bold" variant="h4" >
                    N.K
                  </Typography>
                    <Typography pt={3} fontWeight="bold" variant="body1" >
                      現在はAWSエンジニアをやってます。<br />
                      AWS基盤上でのバックエンド、フロントエンドの開発や、<br />
                      AWSリソースの構築・運用をしています。<br />
                      過去にはオンプレ環境での仮想化基盤構築やJavaの開発もやってました。<br />
                      プライベートは資格の勉強したり、コード書いたりしてます。<br />
                  </Typography>
              </Grid>
            </Grid>
          </SBox>
      );
};

const HiddenOnSmallScreen = styled(Grid)`
z-index: 3;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const SBox = styled(Box)`
background-image: url(${background});
background-size: cover;
height: 550px;
`;