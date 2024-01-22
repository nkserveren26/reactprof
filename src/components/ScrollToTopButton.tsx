import { Button } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

export const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <>
        <SButton disabled={!isVisible}></SButton>
        </>
    );
}

const SButton = styled(Button)`
  && {
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: ${(props) => (props.disabled ? "none" : "block")};
    background-color: #007bff;
    color: #fff;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
  }
`;