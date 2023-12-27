import { FC } from "react"
import { TNavEntry } from "./nav_types"
export const NavButton:FC<TNavEntry> = (props) => {
    let link: any = (props.link) ? props.link : (props.location) ? props.location : null

    return (
        <div className="group flex pt-2 w-max transition-all uppercase">
            <span className=" text-white mr-2 group-hover:text-secondary-1 group-hover:font-extrabold">&gt;</span>
            <a className=" text-white tracking-widest hover:mx-2 hover:text-secondary-2 transition-all" href={link} target={props.link ? "_blank" : ""}>{props.name}</a>
        </div>
    )
}