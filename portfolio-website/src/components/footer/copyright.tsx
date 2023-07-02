import me from '../../data/person.json'
import { capitalise, year } from '../../utils/utils'
export const Copyright = () => {return (<div className='text-white'> © {me.name_short} | {capitalise(me.uname)} {year()} </div>)}