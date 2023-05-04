import styled from "styled-components";
import CakeIcon from '@mui/icons-material/Cake';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import { CardContent, Grid, Typography,Avatar } from "@mui/material";
import { Card } from "@material-ui/core";
import { ProfItem } from "./ProfItem";
import windowsserver from "../img/windowsserver.jpg";
import centos from "../img/centos.jpg";
import ubuntu from "../img/ubuntu.jpg";
import vmware from "../img/vmware.jpg";
import hyperv from "../img/hyper-v.jpg";
import vsphere from "../img/vsphere.jpg";
import java from "../img/java.jpg";
import python from "../img/python.jpg";
import javascript from "../img/javascript.jpg";
import typescript from "../img/typescript.jpg";

type ProfObject = {
    icon:JSX.Element,
    title:string,
    subheader:string
};

export const About = () => {
    const profItems : ProfObject[] = [
        {
            icon:<CakeIcon />,
            title:"誕生日",
            subheader:"1993/2/26"
        },
        {
            icon:<CakeIcon />,
            title:"星座",
            subheader:"うお座"
        },
        {
            icon:<BloodtypeIcon />,
            title:"血液型",
            subheader:"B型"
        },
        {
            icon:<CakeIcon />,
            title:"出身",
            subheader:"大阪府枚方市"
        },
        {
            icon:<CakeIcon />,
            title:"職業",
            subheader:"ITエンジニア"
        },
        {
            icon:<CakeIcon />,
            title:"好きな食べ物",
            subheader:"チョコレート"
        }
    ];
    return (
        <>
        <SDiv>
            <h1>プロフィール</h1>
            <SSDiv>
                <Grid container spacing={3} columns={{  xs:6, sm: 8, md: 12 }} alignItems='center' justifyContent='center'>
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
            </SSDiv>
        </SDiv>
        <SDiv>
            <h1>スキルセット</h1>
            <Grid container spacing={4} columns={{ xs: 2 }} alignItems='center' justifyContent='center'>
                <Grid item xs={1}>
                    <Card>
                        <CardContent>
                            <Typography align="center" variant="h4">
                              OS
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <SDivFlex>
                                <Avatar alt="windowsserver" src={windowsserver} sx={{ width: 100, height: 120 }} variant="square" />
                                <Avatar alt="centos" src={centos} sx={{ width: 100, height: 110 }} variant="square" />
                                <Avatar alt="ubuntu" src={ubuntu} sx={{ width: 100, height: 80 }} variant="square" />
                            </SDivFlex>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={1}>
                    <Card>
                        <CardContent>
                            <Typography align="center" variant="h4">
                                Virtualization
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <SDivFlex>
                                <Avatar alt="vmware" src={vmware} sx={{ width: 140, height: 120 }} variant="square" />
                                <Avatar alt="hyperv" src={hyperv} sx={{ width: 100, height: 120 }} variant="square" />
                                <Avatar alt="vsphere" src={vsphere} sx={{ width: 100, height: 110 }} variant="square" />
                            </SDivFlex>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={1}>
                    <Card>
                        <CardContent>
                            <Typography align="center" variant="h4">
                                Programming
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <SDivFlex>
                                <Avatar alt="java" src={java} sx={{ width: 100, height: 120 }} variant="square" />
                                <Avatar alt="python" src={python} sx={{ width: 100, height: 100 }} variant="square" />
                                <Avatar alt="javascript" src={javascript} sx={{ width: 100, height: 80 }} variant="square" />
                                <Avatar alt="typescript" src={typescript} sx={{ width: 100, height: 70 }} variant="square" />
                            </SDivFlex>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={1}>
                    <Card>
                        <CardContent>
                            <Typography align="center" variant="h4">
                                Web Page
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <SDivFlex>
                                <Avatar alt="java" src={java} sx={{ width: 100, height: 120 }} variant="square" />
                                <Avatar alt="python" src={python} sx={{ width: 100, height: 100 }} variant="square" />
                                <Avatar alt="javascript" src={javascript} sx={{ width: 100, height: 80 }} variant="square" />
                                <Avatar alt="typescript" src={typescript} sx={{ width: 100, height: 70 }} variant="square" />
                            </SDivFlex>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>     
        </SDiv>
        <SDiv>
            <h1>資格</h1>
        </SDiv>
        </>
    );
};

const SSDiv = styled.div`

padding-left: 70px;
padding-right: 70px;
`;

const SDiv = styled.div`
background-color: lightgray;
margin: 0;
height: 600px;
h1 {
    text-align: center;
    margin: 0;
}
`;

const SDivFlex = styled.div`
display: flex;
flex-basis: 50px;
gap: 20px 20px;
padding: 0px;
justify-content: center;
`;