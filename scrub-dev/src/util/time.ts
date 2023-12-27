
import personal_information from '../data/personal_information.json'

export const millis_to_date = (s: number | string) => {
    if(typeof s === "string") s = +s
    return new Date(s)
}

export const date_diff = (date1: Date, date2: Date) => date2.getTime() - date1.getTime()

export const get_current_age = () => {
    let dob = millis_to_date(personal_information.dob.millis)

    return new Date(date_diff(dob, new Date(Date.now()))).getFullYear() - 1970
}

export const get_current_year = () => new Date(Date.now()).getFullYear()
