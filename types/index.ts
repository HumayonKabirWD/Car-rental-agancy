import { MouseEventHandler } from "react";

export interface CoistomBtnProps {
    title:string,
    containerStyle?: string,
    handleClick?:MouseEventHandler<HTMLButtonElement>,
    btnType?:"button" | "submit"
}

export interface SearchManufectureProps {
    manufacturer: string,
    setManufacturer: (manufacturer : string) => void
}