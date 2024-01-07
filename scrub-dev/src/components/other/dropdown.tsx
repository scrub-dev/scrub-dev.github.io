export default (props: {label: string, value: string, onChange: any, optionList: any[]}) => {
    return (
        <div className="w-full">
            <select value={props.value} onChange={props.onChange} className="w-full px-2 py-2 rounded-lg bg-secondary-2 focus:ring-secondary-1 text-white">
                {props.optionList.map((option: any) => (
                    <option key={option} value={option} className="text-black text-opacity-50">{option}</option>
                ))}
            </select>
        </div>
    )
}