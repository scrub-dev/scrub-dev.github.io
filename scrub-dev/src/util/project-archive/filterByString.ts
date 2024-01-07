export default (projectList: project[], search: string) => {
    if(search == "" || search == undefined || search.length == 0) return projectList

    let filteredResults: project[] = projectList.filter(project => {
        return project.desc.toLowerCase().includes(search.toLowerCase()) || project.name.toLowerCase().includes(search.toLowerCase())
    })

    return filteredResults
}