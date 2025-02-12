import victoriapizzathumbnail from "@/public/victoriapizzathumbnail.png"
import victoriapizza1 from "@/public/victoriapizza1.png";
import victoriapizza2 from "@/public/victoriapizza2.png";
import victoriapizza3 from "@/public/victoriapizza3.png";
import victoriapizza4 from "@/public/victoriapizza4.png";
import victoriapizza5 from "@/public/victoriapizza5.png";
import indofoodthumbnail from "@/public/indofoodthumbnail.png";
import indofood1 from "@/public/indofood1.png";
import indofood2 from "@/public/indofood2.png";
import indofood3 from "@/public/indofood3.png";
import dartthumbnail from "@/public/dartthumbnail.png";
import dart1 from "@/public/dart1.png";
import dart2 from "@/public/dart2.png";
import dart3 from "@/public/dart3.png";
import dart4 from "@/public/dart4.png";
import dart5 from "@/public/dart5.png";
import datavisthumbnail from "@/public/datavisthumbnail.png";
import datavis1 from "@/public/datavis1.png";
import datavis2 from "@/public/datavis2.png";
import datavis3 from "@/public/datavis3.png";
import portfoliothumbnail from "@/public/portfoliothumbnail.png";
import portfolio1 from "@/public/portfolio1.png";
import portfolio2 from "@/public/portfolio2.png";
import portfolio3 from "@/public/portfolio3.png";
import toolsatcolesthumbnail from "@/public/toolsatcolesthumbnail.png";
import toolsatcoles1 from "@/public/toolsatcoles1.png";
import toolsatcoles2 from "@/public/toolsatcoles2.png";
import toolsatcoles3 from "@/public/toolsatcoles3.png";
import libguidesthumbnail from "@/public/libguidesthumbnail.png";
import libguides1 from "@/public/libguides1.png";
import libguides2 from "@/public/libguides2.png";
import libguides3 from "@/public/libguides3.png";

import indofoodlogo from "@/public/indofoodlogo.png";
import dartlogo from "@/public/dartlogo.png";
import monashlogo from "@/public/monashlogo.png";
import coleslogo from "@/public/coleslogo.png";

export const links = [
  {
    name: "Home",
    hash: "/#home",
  },
  {
    name: "About",
    hash: "/#about",
  },
  {
    name: "Projects",
    hash: "/#projects",
  },
  {
    name: "Skills",
    hash: "/#skills",
  },
  {
    name: "Affiliations",
    hash: "/#affiliations",
  },
  {
    name: "Contact",
    hash: "/#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Technical Business Analyst",
    location: "Melbourne, Australia",
    description: [
      "Automated three operational processes using API integrations to reduce 4 hours of manual and repetitive tasks to just a few minutes.",
      "Enhanced Coles' internal front door portal by developing user personas and journey maps, leading to process improvements which boosted Net Promoter Score by +25.",
      "Established myself as a subject matter expert in the Atlassian Suite and Miro through addressing 100+ support tickets and incidents and facilitating 5 drop-in sessions.",
      "Integrated 25+ global delivery framework templates into Coles' collaboration platform to accelerate project delivery across the technology department.",
      "Spearheaded the development of an intranet resource to assist Coles' head office in selecting the most appropriate workplace tool based on tasks and needs, which drove tool alignment, efficiency, and cost reductions across the organisation."
    ],
    date: "July 2024 - December 2024",
  },
  {
    title: "Web Content Officer",
    location: "Melbourne, Australia",
    description: [
      "Rebuilt the LibGuides web system for enhanced usability, accessibility and SEO, which became a renowned citing & referencing resource for Monash University that receives over 2 million unique visitors annually.",
      "Coordinated full project lifecycle for the Library events webpage, from initial planning, requirements gathering and stakeholder management to design, development, user testing and deployment.",
      "Automated administrative workflows within the Library's collaboration platform to increase operational efficiency by saving 2 hours a week."
    ],
    date: "January 2024 - July 2024",
  },
  {
    title: "Web Designer",
    location: "Perth, Australia",
    description: [
      "Redesigned DART's website to improve SEO and raise awareness for their domestic violence prevention training programs."
    ],
    date: "November 2023 - January 2024",
  },
  {
    title: "Front-End Engineer",
    location: "Jakarta, Indonesia",
    description: [
      "Developed front-end of online ordering system for Indomie instant noodles which streamlined ordering process for product distributors in 90+ countries."
    ],
    date: "March 2023 - May 2023",
  }
] as const;

export const projectsData = [
  {
    title: "Tools @ Coles",
    id: "tools-at-coles",
    description:
      "Tools @ Coles is a collection of webpages which act as an intranet resource structured to guide employees in selecting the most appropriate workplace tool for their different tasks and needs at Coles.",
    tags: ["SharePoint", "Miro"],
    thumbnail: toolsatcolesthumbnail,
    images: [toolsatcoles1, toolsatcoles2, toolsatcoles3],
    fullDescription:
      "Tools @ Coles was my major project during my IBL placement at Coles. It is intended to be the designated platform to guide employees across the Coles head office in selecting the most appropriate workplace tools for their different tasks and needs at Coles. The project's primary purpose is to support easy decision-making by providing brief yet concise information about tools for activities ranging from project and program management, whether waterfall or Agile, to content creation and general productivity. I was responsible for all tasks ranging from the initial planning phase, requirements gathering and stakeholder management, to design, development, publishing and distribution of the project.",
    liveSite: "",
    sourceCode: ""
  },
  {
    title: "Monash LibGuides Website",
    id: "monash-libguides",
    description:
      "LibGuides is Monash University's primary resource for citing and referencing, covering eight different citation styles.",
    tags: ["HTML", "CSS", "JavaScript", "Squiz Matrix"],
    thumbnail: libguidesthumbnail,
    images: [libguides1, libguides2, libguides3],
    fullDescription: "During my time working for the Monash University Library, I developed and maintained the webpages of the LibGuides web system, the university's primary resource for citing and referencing. Serving 86,000 students and 17,000 staff, the platform covers eight different citation styles and attracts over 2 million visits annually.",
    liveSite: "https://www.monash.edu/library/help/citing-and-referencing",
    sourceCode: ""
  },
  {
    title: "Pizza Online Order Website",
    id: "pizza-online-order",
    description:
      "A pizza restaurant website to showcase my full-stack development skills using React, Next.js, and MongoDB. It includes features such as Stripe payment.",
    tags: ["React", "Next.js", "Redux", "MongoDB", "Tailwind", "Framer", "Stripe", "Axios"],
    thumbnail: victoriapizzathumbnail,
    images: [victoriapizza1, victoriapizza2, victoriapizza3, victoriapizza4, victoriapizza5],
    fullDescription:
      "I applied my web development skills acquired during my Indofood CBP internship to independently create a full-stack online ordering platform for a fake pizza restaurant. This project showcases proficiency in React, Node.js, and MongoDB, integrating Stripe for payments and featuring a responsive design. Noteworthy features include token-based authentication for secure admin access, cookie implementation for admin user sessions, and an admin dashboard for dynamic product management, order status updates, and archiving. Server-side rendering optimises performance, demonstrating both technical expertise and the ability to meet business needs in a user-friendly web application. Also, I incorporated Redux for cart management and Axios for API calls to enhance the functionality and efficiency of the platform.",
    liveSite: "https://victoria-pizza.vercel.app/",
    sourceCode: "https://github.com/JerryBS01/victoria-pizza"
  },
  {
    title: "Indofood Online Order Website",
    id: "indofood-online-order",
    description:
      "Indofood is the largest food company in Indonesia. I developed the front-end of their online ordering website, incorporating features such as order placement, saving to draft, and transaction history.",
    tags: ["React", "Redux", "Bootstrap", "Chakra UI", "Axios"],
    thumbnail: indofoodthumbnail,
    images: [indofood1, indofood2, indofood3],
    fullDescription:
      "In May 2023, I secured a position as a web developer intern at Indofood CBP, the renowned company behind Indomie. During my internship, I actively contributed to the development of the front-end for the international division's online ordering website. I played a key role in implementing functionalities such as order placement, transaction history tracking, product listings, order drafting, and profile management. The goal of the website is to simplify the online ordering process for distributors of Indofood products worldwide. Adhering to the SCRUM framework, I participated in bi-weekly presentations to update the division leader on the project's progress. This experience significantly contributed to the growth of both my technical skills and soft skills, providing valuable insights into the dynamic field of web development.",
    liveSite: "https://indofoodinternational.com/",
    sourceCode: ""
  },
  {
    title: "DART Group Australia Website",
    id: "dart-group-australia",
    description:
      "I remotely designed and developed a WordPress website for DART Group Australia, a company dedicated to promoting domestic family and sexual violence prevention and response training.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "WordPress", "Elementor"],
    thumbnail: dartthumbnail,
    images: [dart1, dart2, dart3, dart4, dart5],
    fullDescription:
      "During the summer of 2023, I volunteered as a web designer and developer for DART Group Australia, a company dedicated to preventing family and domestic violence in Perth. I designed and gained approval for the website from the founder. The primary goal is to showcase DART Group Australia and raise awareness of their training programs. The website prototype, with medium fidelity, is created in Figma. Development is ongoing on WordPress, implementing a custom theme for managing advanced custom fields.",
    liveSite: "https://www.figma.com/proto/0gqPqZwkQyh25Uj1MHIUVl/DART-Website-Prototype?type=design&node-id=14-1453&t=xmq2ZFrXtUcsUe5B-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=14%3A1453&mode=design",
    sourceCode: ""
  },
  {
    title: "Fatal Road Accidents Data Visualisation",
    id: "fatal-road-accidents",
    description:
      "A personal data visualization project illustrating the patterns of fatal road accidents in the state of Victoria from 2017 to 2021.",
    tags: ["Tableau", "Python"],
    thumbnail: datavisthumbnail,
    images: [datavis1, datavis2, datavis3],
    fullDescription:
      "For my data visualisation unit at Monash University, I created a data visualisation project about fatal road accidents in Victoria from 2017 to 2021. I chose a suitable dataset from Kaggle, performed data cleaning using Python, and utilised Tableau to create visualisations. The visual representation incorporates sophisticated filtering options, allowing users to filter data based on specific national remoteness areas or statistical area levels 4. It also boasts a high level of interactivity and serves the purpose of assisting the Victorian Transport Accident Commission in preventing fatal road accidents.",
    liveSite: "https://public.tableau.com/views/FIT3179-DataVisualisationAssignment1/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link",
    sourceCode: ""
  },
  {
    title: "This Portfolio Website",
    id: "this-portfolio-website",
    description:
      "A website showcasing some of the notable projects I have created, and you're currently looking at it.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Framer"],
    thumbnail: portfoliothumbnail,
    images: [portfolio1, portfolio2, portfolio3],
    fullDescription:
      "This portfolio website features my most significant projects. To embrace cutting-edge technology, I developed it using TypeScript. The notable features of this website include server actions for sending contact emails, a dynamic light and dark mode that aligns with the user's computer theme, an advanced navbar utilising context to track the active section, and visually appealing animations and motions achieved through a combination of Tailwind and Framer Motion.",
    liveSite: "https://jerry-portfolio-website.vercel.app/",
    sourceCode: "https://github.com/JerryBS01/portfolio-website"
  },
] as const;

export const skillsData = {
  "Web Development & Design": ["HTML", "CSS", "JavaScript", "React", "Next.js", "Redux", "Tailwind", "Bootstrap", "Framer Motion", "Node.js", "Express", "Axios", "WordPress", "Squiz Matrix", "Figma"],
  "Data Analysis & Visualisation": ["Python", "R", "SQL", "Tableau"],
  "Programming": ["Git", "C++", "Java", "PowerShell"],
  "Project Management": ["Jira", "Confluence", "Trello", "Miro"]
};

export const affiliationsData = [
  indofoodlogo,
  dartlogo,
  monashlogo,
  coleslogo
] as const;