import { NavButton } from "../navigation/nav-button"

export default () => {
    return (
        <div className="pt-[18%] h-screen" id="projects">
            <p className="text-4xl text-secondary-1 border-b-secondary-2 border-b-2 pb-2 uppercase font-bold">Projects.</p>
            <NavButton name="View project archive" location="/project-archive"/>
        </div>
    )
}