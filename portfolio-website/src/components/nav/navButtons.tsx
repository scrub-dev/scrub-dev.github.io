import { TNavEntry } from "../../types"
import { NavButton } from "./navButton"

export default () => {
const navEntries: TNavEntry[] = [
    {name:"home"},
    {name:"about-me"},
    {name:"projects"},
    {name: "cv"}
]

return (
        <>
        cd ./{navEntries.map(e => <NavButton name={e.name}/>)}
        </>
    )
}