export default (projectList: project[], tag: string) => {
    let filteredList: project[] = []

    if(tag.toLowerCase() == "all") return projectList
    else {
        projectList.forEach(project => {
            if(project.tags.map(e => e.toLowerCase()).includes(tag)) filteredList.push(project)
        })
    }
    return filteredList
}