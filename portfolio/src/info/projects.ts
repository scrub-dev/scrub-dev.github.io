export interface project_information {
  name: string
  description: string
  github_link?: string
  project_link?: string
}

let project_informationArray : Array<project_information> = [
  {
    name:"Project Zeus (Dissertation Project)",
   description: "Project Zeus uses Tensorflow's Toxicity model to identify and opress toxic language in real-time, counteracting active cyberbullying attempts.",
   github_link: "https://github.com/scrub-dev/project-zeus"
  },
  {
    name: "KF6012 Assessment",
    description: "As part of a module, the goal was to create a full front and back end solution to a provided problem, utilising both PHP and React",
    github_link: "https://github.com/scrub-dev/kf6012-assessment",
    project_link: "http://unn-w19019810.newnumyspace.co.uk/kf6012/part2/"
  },
  {
    name: "Scrubly",
    description: "In a similar manner to KF6012, this was a project to create a full solution for link shortning, providing a front end solution for custom links and statistics.",
    github_link: "https://github.com/scrub-dev/scrubly",
  },
  {
    name: "Portfolio Website",
    description: "You are currently viewing this project, using modern technologies such as Typescript and Functional React, as well as P5js",
    github_link: "https://github.com/scrub-dev/react-portfolio",
    project_link: "https://scrub-dev.com/"
  },
  {
    name: "KF6013 Assessment",
    description: "This module tasks students with ustilising and combining multiple external APIs to create a functional website.",
    github_link: "https://github.com/scrub-dev/kf6013-assessment"
  },
  {
    name: "IoTWasteManagement",
    description: "As part of a group, we designed and developed a full IoT solution for monitoring Litter Bin capacities around campus using ESP8266 development boards and a webserver to log and then report the results.",
    github_link: "https://github.com/KV6006-Team/IoTWasteManagement"
  },
  {
    name: "DVSC Project",
    description: "As part of a team, We developed a solution for a client working in the motor servicing industry, involving a full CRUD system that supported numerous clients to utilise their system.",
    github_link: "https://github.com/kv6002-team",
    project_link: "https://dvsc.services"
  }
]


const projects = () => {
  return project_informationArray
}

export default projects