import { useEffect, useState } from "react"
import { NavButton } from "../components/navigation/nav-button"
import ProjectCard from "../components/projects/project-card"
import getUniqueTags from "../util/project-archive/getUniqueTags"
import { get_projects } from "../util/projects"
import TextInput from "../components/other/text-input"
import Dropdown from "../components/other/dropdown"
import filterByTag from "../util/project-archive/filterByTag"
import filterByString from "../util/project-archive/filterByString"
export default () => {

    const [immuteableProjectList, setImmuteableProjectList] = useState<project[]>([])
    const [uniqueTagList, setUniqueTagList] = useState<string[]>([])

    const [search, setSearch] = useState<string>("")
    const [filterTag, setFilterTag] = useState<string>("")

    const handleSearch = (e: any) => {
        setSearch(e.target.value)
        visibleProjects()
    }
    const handleFilter = (e: any) => {
        setFilterTag(e.target.value)
        visibleProjects()
    }

    const visibleProjects = () => {

        let _ProjectList = immuteableProjectList
        if(search.length !== 0 || search != "") _ProjectList = filterByString(_ProjectList, search)
        if(filterTag) _ProjectList = filterByTag(_ProjectList, filterTag.toLowerCase())
        return _ProjectList
    }

    useEffect(() => {
        setImmuteableProjectList(get_projects({ filter: "ALL" }))
    }, [])

    useEffect(() => {
        let x = getUniqueTags(get_projects({ filter: "ALL" }))
        x.unshift("All")
        setUniqueTagList(x)
    }, [])

    const projectLink = (project: project) => (<>
        {project.project_link ?
            <a className="text-tertiary-1 hover:transition-all hover:text-tertiary-2" href={project.project_link} target="_blank">Project</a>
            : null}
        </>)


    const liveLink = (project: project) =>(<>
        {project.live_link ?
            <a className="text-tertiary-1 hover:transition-all hover:text-tertiary-2" href={project.live_link} target="_blank">Live</a>
        : null}
        </>)

    const searchAndFilter = () => (
        <div className="py-2 border-b-2 border-secondary-2 md:block hidden">
            <p className="text-secondary-1 border-b-2 border-secondary-2 text-xl font-bold pl-2">Search</p>
            <div className="flex flex-row w-full px-10 gap-4 pt-2">
                <TextInput label={"Search"} value={search} onChange={handleSearch} placeholder={"Title or Description"} />
                <Dropdown label={"Tag"} value={filterTag} onChange={handleFilter} optionList={uniqueTagList} />
            </div>
        </div>

    )

    return (
        <div className="lg:container pt-2 lg:m-auto w-[100vw]">
            <p className="text-4xl text-secondary-1 border-b-secondary-2 border-b-2 pb-2 uppercase font-bold pl-2">Project Archive</p>
            <div className="pl-2">
                <NavButton name={"Go Back"} location="/"/>
            </div>
            <div id="search-and-filter">
                {searchAndFilter()}
            </div>
            <div className="md:hidden w-full flex flex-col gap-2 justify-center items-center px-2">
                {visibleProjects().map(proj => <ProjectCard project={proj} key={proj.name}/>)}
            </div>
            <div className="hidden md:flex w-full mt-10">
                <table className="w-full table-auto">
                    <thead className="text-white text-left border-b-secondary-2 border-b-2">
                        <tr>
                            <th>Year</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th className="pr-10">Links</th>
                            <th>Tags</th>
                        </tr>
                    </thead>
                    <tbody>
                        {visibleProjects().sort((a,b) => +b.year - +a.year).map(project =>
                            <tr className="text-white border-b-secondary-1 border-opacity-70 border-b-2 p-10" key={project.name+project.year}>
                                <td className="p-5">{project.year}</td>
                                <td className="p-5">{project.name}</td>
                                <td>{project.desc}</td>
                                <td>
                                    <p>{liveLink(project)}</p>
                                    <p>{projectLink(project)}</p>
                                </td>
                                <td>{project.tags.join(", ")}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}