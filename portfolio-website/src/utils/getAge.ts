export default () => {
    return Math.abs(new Date(Date.now() - new Date("12/15/2000").getTime()).getFullYear() - 1970)
}