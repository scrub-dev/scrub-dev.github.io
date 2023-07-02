import { FC } from "react"
import { TNavEntry } from "../../types"

export const NavButton:FC<TNavEntry> = (props) => {
    return (<button className="
    px-1
    underline
    underline-offset-4
    hover:text-black
    hover:bg-white
    ">{props.name}</button>)
}