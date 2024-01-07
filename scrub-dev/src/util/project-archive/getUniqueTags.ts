export default (projects: project[]) => {
    let tagList: string[] = []
    projects.forEach(project => {
        project.tags.forEach(tag => {
            if(tagList.indexOf(tag) == -1) tagList.push(tag)
        })
    })
    return tagList
}