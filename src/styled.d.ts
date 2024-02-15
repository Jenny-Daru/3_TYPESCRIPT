import "styled-components";

// d.ts는 declaration file 이라는 뜻 
declare module 'styled-components' {
    export interface DefaultTheme {
        textColor: string;
        bgColor: string;
        btnColor: string;
    }
}