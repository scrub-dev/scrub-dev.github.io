export default (props: {label: string, value: string, onChange: any, placeholder: string}) => {
    return (
        <div className="w-full ">
            <input type="text" onChange={props.onChange} value={props.value} placeholder={props.placeholder} className="w-full px-2 py-2 rounded-lg bg-secondary-2 text-white placeholder:text-black placeholder:text-opacity-50"></input>
        </div>
    )
}