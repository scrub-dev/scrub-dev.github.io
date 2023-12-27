type capitalise_opts = { type: "WORD" | "SENTENCE"}
type projects_opts = {filter: "ALL" | "FEATURED" | "RECENT"}
type project = {
    name: string,
    desc: string,
    year: string,
    tags: string[],
    featured: boolean
}