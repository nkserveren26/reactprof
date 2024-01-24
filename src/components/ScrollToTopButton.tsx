import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            setIsVisible(scrollTop > 100); // スクロール位置が100pxを超えたら表示
        };

        window.addEventListener('scroll', handleScroll);

        // コンポーネントがアンマウントされるときにイベントリスナーを解除
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // スムーズなスクロールを有効にする
        });
    };

    return (
        <>
            <SButton disabled={!isVisible} onClick={scrollToTop} startIcon={<KeyboardArrowUpIcon />}></SButton>
        </>
    );
}

const SButton = styled(Button)`
  && {
    position: fixed;
    bottom: 20px;
    right: 20px;
    opacity: ${(props) => (props.disabled ? '0' : '1')};
    align-items: center;
    background-color: #007bff;
    color: #fff;
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
    transition: opacity 0.3s ease;
    &:hover {
      background-color: #0056b3;
    }
  }
`;