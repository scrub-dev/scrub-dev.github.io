import { Copyright } from "./copyright"
import image from '../svg/bg-waves.svg'
export default () => {
    return(
        <div className="w-full fixed bottom-0">
            <img src={image} className="-z-50 w-full"/>
            <div className="pl-4 pb-2 absolute bottom-0">{<Copyright/>}</div>
        </div>
    )
}