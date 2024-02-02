export default (props: {edu: {
    name: string,
    date_start: string,
    date_end:string,
    location:string,
    grade:string}}) =>
{
    return (
        <div className="grid grid-cols-10 gap-2 p-1 m-2 rounded-xl bg-secondary-1 bg-opacity-25 hover:bg-opacity-100 duration-300 xl:mx-[15%]">
            <div className="col-span-2 text-right">
                <p className="flex flex-col sm:inline gap-2">
                    <span className="text-white opacity-80">{props.edu.date_start}</span>
                    <span className="text-white opacity-80 hidden sm:inline"> - </span>
                    <span className="text-white opacity-80">{props.edu.date_end}</span>
                </p>
            </div>
            <div className="col-span-8">
                <p>
                    <span className="text-white opacity-80 text-xl">{props.edu.name}</span>
                </p>
                <p>
                    <span className="text-white opacity-80 text-nowrap">{props.edu.grade}</span>
                </p>
                <p className="text-white opacity-80">{props.edu.location}</p>
            </div>
        </div>
    )
}