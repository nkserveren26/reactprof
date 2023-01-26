import { FC } from "react";
import styled from "styled-components";

type HeaderProps = {
    title:string
};

export const Header:FC<HeaderProps> = (props) => {
    const { title } = props; 
    return (
        <SDiv>
            <h1>{title}</h1>
            <ul>
              <li>Top</li>
              <li>About</li>
              <li>Work</li>
            </ul>
        </SDiv>
    );
};

const SDiv = styled.div`
display:flex;
align-items: center;
background-color: black;
font-family: Georgia, serif;
h1 {
  margin-left: 2%;
  color: white;
}
ul {
  display: flex;
  list-style:none;
  margin-left:30%;
  color: white;
  li {
    margin-left:40px;
    font-size: 18px;
  }
}
`;