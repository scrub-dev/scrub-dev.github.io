import NavButtons from "./nav-buttons"
import SVG_arrow from "../../assets/arrow.svg?react"

export default () => {
    return (
    <>
        <div className="pl-10 hidden xl:block">
            <NavButtons/>
        </div>
        <div id="mobile_arrow" className='flex flex-row justify-center items-center xl:hidden'>
            <div>
                <a href='#about-me'>
                    <SVG_arrow width={50} height={50} fill="white" transform='rotate(180)'/>
                </a>
            </div>
        </div>
    </>

    )
}