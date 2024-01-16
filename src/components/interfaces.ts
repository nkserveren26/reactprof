export interface ButtonParam {
    buttonLabel: string,
    path: string,
}

// ProfItemのpropsの型
export interface ProfItemProps {
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

// SkillCardのpropsの型
export interface SkillCardProps {
    title: string,
    images: Array<AvatorObject>
}

// CertificationCardのpropsの型
export interface CertificationCardProps {
    categoryName: string,
    certificationList: string[],
}

export interface TechnicalElement {
    [key: string]: string;
}

// ExperienceCardのpropsの型
export interface ExperienceCardProps {
    image: string,
    title: string,
    period: string,
    summary: string,
    technical_elements: TechnicalElement
}