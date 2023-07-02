export const capitalise = (s : string) => s.charAt(0).toLocaleUpperCase() + s.slice(1)

export const year = () => new Date(Date.now()).getFullYear()