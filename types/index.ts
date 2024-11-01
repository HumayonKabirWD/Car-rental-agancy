import { MouseEventHandler } from "react";

export interface CoistomBtnProps {
    title:string,
    containerStyle?: string,
    handleClick?:MouseEventHandler<HTMLButtonElement>,
    btnType?:"button" | "submit"
}