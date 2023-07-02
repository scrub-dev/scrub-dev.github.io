import me from '../data/person.json'
import { capitalise, year } from '../utils/utils'
export default () => {return (<> © {me.name_short} | {capitalise(me.uname)} {year()} </>)}