export interface TNavEntry {
    name: string,
    location?: string,
    link?: string
}
export interface TProject {
    name: string,
    desc: string,
    tech: string[],
    gh_link?: string,
    prod_link?:string
}