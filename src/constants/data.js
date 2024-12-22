const pathToImageFolder = "/images/";

export const user = {
  name: "Ulyana",
  secondName: "Vitalievna",
  thirdName: "Stefanovich",
  jobTitle: "Junior frontend developer",
  about:
    "Passionate junior developer eager to learn and grow in the field of web development. Skilled in JavaScript, HTML, CSS, React and C++. Excited to work on challenging projects and contribute to innovative solutions.",
  skills: ["JavaScript", "HTML", "CSS", "React", "C++"],
  education: [
    {
      org: "University BSU",
      desc: "Bachelor of Science in Mathematics and Computer Science",
      period: "2023 - 2027",
    },
  ],
  experience: [
    {
      org: "Self-employment",
      desc: "1 year of experience in web development",
      period: "2023 - 2024",
    },
  ],
  langs: [
    {
      name: "English",
      value: "B2",
    },
    {
      name: "German",
      value: "B2",
    },
  ],
  contacts: [
    {
      name: "Telegram",
      value: "@stsefy",
    },
    {
      name: "Mail",
      value: "uliannastefanovich@gmail.com",
    },
    {
      name: "Location",
      value: "Minsk",
    },
  ],
  getFullName() {
    return `${this.name} ${this.secondName} ${this.thirdName}`;
  },
  getSkills() {
    return this.skills.join(", ");
  },
};

export const projects = [
  {
    id: 1,
    title: "Todoist",
    description: "Todoist with complex task filtering.",
    image: `${pathToImageFolder}todo2.png`,
    link: "https://stsefy.github.io/todo2/",
  },
  {
    id: 2,
    title: "API & SPA",
    description:
      "A multi-page application that uses an external API and the react-router-dom library",
    image: `${pathToImageFolder}router.png`,
    link: "https://stsefy.github.io/router/",
  },
  {
    id: 3,
    title: "Notion Redux",
    description: "Notion application for storing state using Redux",
    image: `${pathToImageFolder}notion_redux.png`,
    link: "https://stsefy.github.io/login",
  },
  {
    id: 4,
    title: "Lamoda",
    description:
      "An online store with the ability to filter and sort products.",
    image: `${pathToImageFolder}lamoda.png`,
    link: "https://stsefy.github.io/lamoda/",
  },
];
