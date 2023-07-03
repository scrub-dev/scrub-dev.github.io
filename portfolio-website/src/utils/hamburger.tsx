export default (c: string, x: Number = 20, y: Number = 20) => {
    return (
        <svg viewBox="0 0 100 80" width={""+x} height={""+y} fill={c}>
            <rect width="100" height="8" rx="10"></rect>
            <rect y="30" width="100" height="8" rx="10"></rect>
            <rect y="60" width="100" height="8" rx="10"></rect>
        </svg>
    )
}