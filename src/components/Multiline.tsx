import React from "react";

export const Multiline = ({lines}: {lines: string}) => {
    const texts = lines.split("\n").map((line, index) => {
        return (
            <React.Fragment key={index}>
            {line}<br />
            </React.Fragment>
        );
    });
    return <div>{texts}</div>;;
}