interface personal_information {
  name_short: string
  name_long: string
  email_address: string
  github: string
  linkedin: string
}

const personal = () => {
  let information : personal_information = {
    name_short: "Scott",
    name_long: "Scott Donaldson",
    email_address: "scott-donaldson@outlook.com",
    github: "https://github.com/scrub-dev/",
    linkedin : "https://www.linkedin.com/in/scott-donaldson-56b810153/"
  }
  return information
}

export default personal