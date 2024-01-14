import { CardContent, Grid, Typography, Avatar } from "@mui/material";
import { Card } from "@mui/material";
import java from "../img/java.jpg";
import python from "../img/python.jpg";
import javascript from "../img/javascript.jpg";
import typescript from "../img/typescript.jpg";
import styled from "styled-components";



type AvatorObject = {
    alt:string,
    src:string,
    width:number,
    height:number
}

type SkillCardProps = {
    title:string,
    images:Array<AvatorObject>
}

export const SkillCard: React.FC<SkillCardProps> = (props) => {
    const {title, images} = props;
    return (
        <>
            <Card>
                <CardContent>
                    <Typography align="center" variant="h4">
                        {title}
                    </Typography>
                </CardContent>
                <CardContent>
                    <SDivFlex>
                        {images.map((image) => (
                            <Avatar alt={image.alt} src={image.src} sx={{ width: image.width, height: image.height }} variant="square" />
                        ))}
                        <Avatar alt="java" src={java} sx={{ width: 100, height: 120 }} variant="square" />
                        <Avatar alt="python" src={python} sx={{ width: 100, height: 100 }} variant="square" />
                        <Avatar alt="javascript" src={javascript} sx={{ width: 100, height: 80 }} variant="square" />
                        <Avatar alt="typescript" src={typescript} sx={{ width: 100, height: 70 }} variant="square" />
                    </SDivFlex>
                </CardContent>
            </Card>
        </>
    );

};

const SDivFlex = styled.div`
display: flex;
flex-basis: 50px;
gap: 20px 20px;
padding: 0px;
justify-content: center;
`;