import { Copyright } from "./copyright"

export default () => {
    return(
        <div className="w-full bg-black flow-root py-4 fixed bottom-0">
            <div className="float-left pl-4">{<Copyright/>}</div>

        </div>
    )
}