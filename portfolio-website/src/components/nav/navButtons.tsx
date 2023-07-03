import { TNavEntry } from "../../types"
import { NavButton } from "./navButton"

export default () => {
const navEntries: TNavEntry[] = [
    {name:"home", location:"#home"},
    {name:"about-me", location: "#info"},
    {name:"projects", location: "#projects"},
    {name: "cv", link: "/assets/cv.pdf"}
]

return (
        <>
        cd ./{navEntries.map((e,i) => <NavButton name={e.name} link={e.link} location={e.location} key={e.name + ""+i}/>)}
        </>
    )
}