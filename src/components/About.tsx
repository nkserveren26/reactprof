import styled from "styled-components";
import cloudimage from "../img/cloud.png";
import CakeIcon from '@mui/icons-material/Cake';

export const About = () => {
    return (
        <SDiv>
            <h1>プロフィール</h1>
            <p>誕生日</p>
            <CakeIcon />
            <p>星座</p>
            <p>血液型</p>
            <p>出身</p>
            <p>職業</p>
            <p>好きな食べ物</p>

        </SDiv>
    );
};

const SDiv = styled.div`
margin: 0;
height: 600px;
h1 {
    text-align: center;
    margin: 0;
}
`;