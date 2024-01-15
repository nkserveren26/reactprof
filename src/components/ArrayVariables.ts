import { SkillCardProps, certificationCardProps } from "./interfaces";
import windowsserver from "../img/windowsserver.jpg";
import centos from "../img/centos.jpg";
import ubuntu from "../img/ubuntu.jpg";
import vmware from "../img/vmware.jpg";
import hyperv from "../img/hyper-v.jpg";
import vsphere from "../img/vsphere.jpg";
import java from "../img/java.jpg";
import python from "../img/python.jpg";
import javascript from "../img/javascript.jpg";
import typescript from "../img/typescript.jpg";
import react from "../img/react.jpg";
import vue from "../img/vue.jpg";


// SkillCard用の配列変数
export const skillCardProps: SkillCardProps[] = [
    {
        title: "OS",
        images: [
            {
                alt: "windowsserver",
                src: windowsserver,
                width: 100,
                height: 120
            },
            {
                alt: "centos",
                src: centos,
                width: 100,
                height: 110
            },
            {
                alt: "ubuntu",
                src: ubuntu,
                width: 100,
                height: 80
            },
        ]
    },
    {
        title: "Virtualization",
        images: [
            {
                alt: "vmware",
                src: vmware,
                width: 140,
                height: 120
            },
            {
                alt: "hyperv",
                src: hyperv,
                width: 100,
                height: 120
            },
            {
                alt: "vsphere",
                src: vsphere,
                width: 100,
                height: 110
            },
        ]
    },
    {
        title: "Programming",
        images: [
            {
                alt: "java",
                src: java,
                width: 100,
                height: 120
            },
            {
                alt: "python",
                src: python,
                width: 100,
                height: 100
            },
            {
                alt: "javascript",
                src: javascript,
                width: 100,
                height: 80
            },
            {
                alt: "typescript",
                src: typescript,
                width: 100,
                height: 70
            }
        ]
    },
    {
        title: "Frontend",
        images: [
            {
                alt: "react",
                src: react,
                width: 130,
                height: 120
            },
            {
                alt: "vue",
                src: vue,
                width: 120,
                height: 100
            },
        ]
    }
];


// CertificationCard用の配列変数
export const certCardProps: certificationCardProps[] = [
    {
        categoryName: "AWS",
        certificationList: [
            "AWS Certified Solutions Architect - Associate",
            "AWS Certified Developer - Associate",
            "AWS Certified Solutions Architect - Professional"
        ],
    },
    {
        categoryName: "Programming",
        certificationList: [
            "Oracle Certified Java Programmer, Silver SE 8",
            "Oracle Certified Java Programmer, Gold SE 8"
        ],
    },
    {
        categoryName: "Database",
        certificationList: [
            "ORACLE MASTER Bronze DBA 2019",
            "ORACLE MASTER Silver DBA 2019"
        ],
    },
    {
        categoryName: "Other",
        certificationList: [
            "応用情報技術者",
            "LinuCレベル1 Version 10.0"
        ],
    },
];