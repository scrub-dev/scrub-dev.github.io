export interface TNavEntry {
    name: String,
    location?: String,
    link?: String
}
export interface TProject {
    name: String,
    desc: String,
    tech: String[],
    gh_link?: String,
    prod_link?:String
}