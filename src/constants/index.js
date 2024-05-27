import project1 from "../assets/projects/vid-tube.png";
import project2 from "../assets/projects/summarizer.png";
import project3 from "../assets/projects/carsharing.png";

export const HERO_CONTENT = `A Web Developer who's been diving into the world of coding for almost a year now in a full-time training program in Fullstack web development (MERN Stack). Alongside my learning journey, I've been sharing my knowledge as a web development tutor, helping others grasp the essentials of building for the web. I'm now seeking a transition into a role where I can integrate, apply and advance knowledge from web development and expand upon my skills`;

export const HERO_CONTENT_DE = `Ein Webentwickler, der seit fast einem Jahr in die Welt des Programmierens eintaucht, und zwar im Rahmen eines Vollzeit-Schulungsprogramms für Fullstack-Webentwicklung (MERN Stack). Neben meiner Lernreise habe ich mein Wissen als Webentwicklungstutor weitergegeben und anderen geholfen, die Grundlagen des Web-Buildings zu verstehen. Ich suche jetzt nach einem Übergang in eine Rolle, in der ich Wissen aus der Webentwicklung integrieren, anwenden und weiterentwickeln und meine Fähigkeiten erweitern kann.`

export const ABOUT_TEXT = `I am a dedicated and versatile web developer with a passion for creating efficient and user-friendly web applications. For nearly a year, I have immersed myself in the world of full-stack web development, honing my expertise in HTML, CSS, JavaScript, and various frameworks and libraries such as React, Node.js, and Express.js. My hands-on experience includes building responsive and dynamic web applications, optimizing performance.`;

export const ABOUT_TEXT_DE = `Ich bin ein engagierter und vielseitiger Webentwickler mit einer Leidenschaft für die Erstellung effizienter und benutzerfreundlicher Webanwendungen. Fast ein Jahr lang habe ich mich in die Welt der Full-Stack-Webentwicklung vertieft und mein Fachwissen in HTML, CSS, JavaScript und verschiedenen Frameworks und Bibliotheken wie React, Node.js und Express.js verfeinert. Meine praktische Erfahrung umfasst das Erstellen reaktionsfähiger und dynamischer Webanwendungen sowie die Optimierung der Leistung.`

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    year_de: "2023 - Gegenwart",
    role: "Full Stack Web Development Tutor",
    role_de: "Tutor für Full-Stack-Webentwicklung",
    company: "DCI Digital Career Institute",
    description: `I'm tutoring and supporting colleagues by helping them understand the basic concepts of HTML, CSS, JavaScript, React.js, Node.js, Express.js and MongoDB, and develop web applications by using them.`,
    description_de: `Ich gebe meinen Kollegen Nachhilfe und unterstütze sie dabei, die grundlegenden Konzepte von HTML, CSS, JavaScript, React.js, Node.js, Express.js und MongoDB zu verstehen und mithilfe dieser Konzepte Webanwendungen zu entwickeln.`,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    technologies_de: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
  {
    year: "2020 - 2022",
    year_de: "2020 - 2022",
    role: "Third Officer",
    role_de: "Dritter Kapitänsgehilfe",
    company: "Danaos Shipping Company Ltd.",
    description: `Ensure safe navigation with use of Information Computer Technologies, Data transmission systems, Navigation Automated Complexes`,
    description_de: `Gewährleistung einer sicheren Navigation durch den Einsatz von Informations- und Computertechnologien, Datenübertragungssystemen und automatisierten Navigationskomplexen`,
    technologies: [
      "Information Computer Technologies",
      "Data transmission systems",
      "Navigation Automated Complexes",
    ],
    technologies_de: [
      "Informations-Computer-Technologien",
      "Datenübertragungssysteme",
      "Navigation Automatisierte Komplexe",
    ],
  },
];


export const PROJECTS = [
  {
    title: "Vid-tube",
    image: project1,
    description:
      "Vid-Tube is a React application that allows users to search for and watch videos from various categories. The application is designed to provide a seamless and enjoyable video watching experience for users.",
    description_de: "Vid-Tube ist eine React-Anwendung, mit der Benutzer Videos aus verschiedenen Kategorien suchen und ansehen können. Die Anwendung ist so konzipiert, dass sie Benutzern ein nahtloses und unterhaltsames Videoerlebnis bietet.",
    technologies: ["React.js + Vite", "CSS3", "JavaScript"],
    links: [
      { resource: "Live Demo", link: "https://vid-tube-rx2n.onrender.com/" },
    ],
  },
  {
    title: "AI-summarizer",
    image: project2,
    description:
      "React application that extracts and summarizes articles using OpenAI's GPT-4 through RapidAPI. It utilizes Redux for API management, Tailwind CSS for styling, and localStorage for saving the history of searches.",
      description_de: "React-Anwendung, die Artikel mithilfe von OpenAIs GPT-4 über RapidAPI extrahiert und zusammenfasst. Sie verwendet Redux für die API-Verwaltung, Tailwind CSS für das Styling und localStorage zum Speichern des Suchverlaufs.",
    technologies: [
      "React.js + Vite",
      "Tailwind CSS",
      "Redux",
      "OpenAI's GPT-4 through RapidAPI",
    ],
    links: [
      {
        resource: "Live Demo",
        link: "https://ai-summarizer-v6fa.onrender.com/",
      },
    ],
  },
  {
    title: '"Rides" - carsharing company',
    image: project3,
    description:
      "Website for carsharing service known for its commitment to eco-friendly values and sustainable transportation solutions. This website is designed to showcase services, and provide an easy and efficient platform for users to access carsharing features.",
      description_de: "Website für einen Carsharing-Dienst, der für sein Engagement für umweltfreundliche Werte und nachhaltige Transportlösungen bekannt ist. Diese Website dient der Präsentation von Diensten und bietet Benutzern eine einfache und effiziente Plattform für den Zugriff auf Carsharing-Funktionen.",
    technologies: ["HTML", "SASS"],
    links: [
      {
        resource: "Live Demo",
        link: "https://vlad-bakumenko.github.io/carsharing/",
      },
    ],
  },
];

export const CONTACT = {
  address: "Berlin, Germany",
  address_de: "Berlin, Deutschland",
  email: "bakumenkovladyslav@gmail.com",
};
