import { FC } from "react"
import me from '../../data/person.json'
import getAge from "../../utils/getAge"
export const HomePanel: FC = () => {
    const text = `
    Hi! Im ${me.name_short}, a ${getAge()} year old Software Developer from Newcastle upon Tyne.
    I am currently studying for my MSc in Advanced Computer Science at Northumbria.
    Welcome to my portfolio website where I showcase some of my projects!
    My current focus surrounds full stack development and competitive programming.
    `
    return (<p>{text}</p>)
}