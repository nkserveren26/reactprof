export interface ButtonParam {
    buttonLabel: string,
    path: string,
}

export interface ProfObject {
    icon: JSX.Element,
    title: string,
    subheader: string
}

export interface AvatorObject {
    alt: string,
    src: string,
    width: number,
    height: number
}

export interface SkillCardProps {
    title: string,
    images: Array<AvatorObject>
}

export interface CertificationCardProps {
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