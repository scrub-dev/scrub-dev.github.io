import personal_information from '../../../data/personal_information.json'
import Edu from './edu'

export default () => {
    let edulist = personal_information.edu



    return (
        <div id='education' className='mx-2 pt-2'>
            <p className='text-2xl text-secondary-1 border-b-secondary-2 border-b pb-1 uppercase font-bold'>Education</p>
            {edulist.map((e,i) => <Edu edu={e} key={i + e.name}/>)}
        </div>
    )
}