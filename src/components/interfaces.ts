export interface ButtonParam {
    buttonLabel: string,
    path: string,
}

export interface certificationCardProps {
    categoryName: string,
    certificationList: string[],
}

export interface TechnicalElement {
    [key: string]: string;
}

export interface ExperienceCardProps {
    image: string,
    title: string,
    period: string,
    summary: string,
    technical_elements: TechnicalElement
}