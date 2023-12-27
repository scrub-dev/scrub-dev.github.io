export default (s: string, opts?: capitalise_opts) => {

    const _capitalise = (s: string) => Array.from(s)[0].toUpperCase() + s.slice(1, s.length)
    if(!opts) return _capitalise(s)
    else {
        switch(opts.type){
            case "SENTENCE": return s.split(" ").map(x => _capitalise(x)).join(" ")
            case "WORD":     return _capitalise(s)
            default:         return _capitalise(s)
        }
    }
}