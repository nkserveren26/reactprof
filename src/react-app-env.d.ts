/// <reference types="react-scripts" />

declare namespace NodeJS {
    interface ProcessEnv {
        readonly REACT_APP_GET_WORKS_URL: string;
        readonly REACT_APP_GET_BLOGS_URL: string;

    }
}
