import styled from "styled-components";

export const CertificationList = ({list}: {list: string[]}) => {
    return (
        <>
            <ul>
                {list.map((certification, index) => (
                    <StyledListItem key={index}>{certification}</StyledListItem>
                ))}
            </ul>
        </>
    )
}

// 資格リストのレイアウト定義
const StyledListItem = styled.li`
  font-size: 20px; // フォントサイズの指定
`;