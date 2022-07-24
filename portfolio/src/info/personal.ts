interface personal_information {
  name_short: string
  name_long: string
  email_address: string
  github: string
  linkedin: string
  twitter: string
  online_name: string
}

const personal = () => {
  let information : personal_information = {
    name_short: "Scrub",
    name_long: "Scrub",
    email_address: "scott-donaldson@outlook.com",
    github: "https://github.com/scrub-dev/",
    linkedin : "https://www.linkedin.com/in/scott-donaldson-56b810153/",
    twitter : "https://twitter.com/scrub_fps",
    online_name: "Scrub"
  }
  return information
}

export default personal