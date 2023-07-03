import { FC } from "react"
import { TNavEntry } from "../../types"

export const NavButton:FC<TNavEntry> = (props) => {
    let link: any = (props.link) ? props.link : (props.location) ? props.location : null

    return (<a className="px-1 underline underline-offset-4 hover:text-black hover:bg-white"
    href={link}>{props.name}</a>)
}