/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ibnu Qomaril Huda",
  title: "Hi all, I'm Ibnu Qomaril Huda",
  subTitle: emoji(
    "A fullstack developer and software engineer who have work experiences more than 2 years and handle projects up to 2."
  ),
  resumeLink: "https://drive.google.com/drive/folders/1COgUuLSN7tRHq0551kgdu0Go-SZKOya_?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/iqyuuhaa",
  linkedin: "https://www.linkedin.com/in/ibnu-qomaril-huda-a60a41208/",
  gmail: "ibnuqomarilhuda@gmail.com",
  facebook: "https://www.facebook.com/ari.huda.77",
  instagram: "https://www.instagram.com/iqyhaaa_/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Developing an web based application and services",
  skills: [
    emoji("⚡ Converts interesting new products into applications"),
    emoji("⚡ Integrating application with big services like Google Authentication, Midtrans, and more"),
    emoji("⚡ Connect many services with newest techniques like Graphql and gRPC")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    }, 
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "Golang",
      fontAwesomeClassname: "golang"
    }, 
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "VueJS",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "SpringBoot",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "MySQL & PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Redis",
      fontAwesomeClassname: "redis"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Vacation High School 1 Blitar",
      logo: require("./assets/images/SMK_1_Blitar.png"),
      subHeader: "Computer and Network Engineering",
      duration: "2016 - 2019",
      desc: "Learn how network working theoritically and connecting the lesson with the network devices. Practice to configure, design, and build network system on the building by using access point and router. Also become a school participant to take part in the national network competition which called LKS (Student Competency Competition) and Mikrotik Network Olympic."
    },
    {
      schoolName: "Surabaya State of University",
      logo: require("./assets/images/Logo_Unesa.png"),
      subHeader: "Informatics Engineering",
      duration: "2019 - 2023",
      desc: "Learn the basic of programming language, and build simple command and run it as a program. Practice about design an application and build the logic of program to implement it as code. Also become leader with three member and successfully winning the competition called CodeJam. Often become a leader of many lesson in class to lead my team finish many assignments gifted from lecturers, especially coding and build application lessons.",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "MySQL & PostgreSQL", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Graphql & gRPC",
      progressPercentage: "80%"
    },
    {
      Stack: "Redis",
      progressPercentage: "75%"
    },
    {
      Stack: "Docker",
      progressPercentage: "75%"
    },
    {
      Stack: "Monitoring Application (New Relic & Datadog)",
      progressPercentage: "70%"
    },
    {
      Stack: "Database Monitoring (Grafana & Vividcortex)",
      progressPercentage: "60%"
    },
    {
      Stack: "NSQ",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Fullstack Developer",
      company: "Wevelope",
      companylogo: require("./assets/images/wevelope-logo-with-text.png"),
      date: "Septemb 2020 – October 2021",
      desc: "Work with team to develop and maintain many company information system (such as CV. Gajahmas Sidoarjo, CV. Sinar Alam Abadi, PT. Gema Parahyangan Plastik, etc.). Discuss and planning to solve and find best solution of problem, helping and reviewing other team, design database and data flow diagram, develop and maintaining API and consume it, make script to scan and backfill data on database, and also helping to design interactive website. Also build website that support online learning interaction using 360° image method and support trading activities using binance.",
      descBullets: [
        "Successfully fixing different yearly report data between real data on company and report application.",
        "Introduce new pattern to solve infinite tree of report data using recrusive loop  function mechanism.",
        "Singlehandlely solve company paid leave mechanism program that not synchron with company data."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Tokopedia",
      companylogo: require("./assets/images/jualan-di-tokopedia.png"),
      date: "February 2022 – March 2023",
      desc: "Work in User & Accounts Platform as Software Engineer (especially backend) who manage and maintain external and internal user information on Tokopedia. Grooming and planning together with other teams to find best solution of the problem and work together to maintain current system and develop new features. Documenting all program flow I created and discussing about any documentation on what we work bases on sprint planning.",
      descBullets: [
        "Successfully develope unit testing on user authentication repositories to increase coverage test percentage of code from ~60% to ~80%.",
        "Participate and successfully develope Tokopedia new feature “Self Close Account” which decrease highest tickets for OPS team to process close account manually from ~4000 tickets to ~150 per month.",
        "Singlehandlely implement clean code architecture pattern to Tokopedia authentication repository so all developer can easily maintain, faster developing code, and reuse any code.",
        "Introduce and develope new safety script flow to fixing or populating data in database."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/IKU_FT.jpg"),
      projectName: "IKU",
      projectDesc: "An tracking application to get key performance index of students and lecturers in Technical Faculty, Surabaya State of University",
    },
    {
      image: require("./assets/images/DCA_SI.jpg"),
      projectName: "DCA Information System Management",
      projectDesc: "Stock and accountancy report system for CV. Denta Cahya Abadi",
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Become Front-End Web Developer Expert",
      subtitle: "Learn how build clean code architecture, tuning web performance, progressive web applications, and automation testing using ReactJS",
      image: require("./assets/images/dicoding.png"),
      imageAlt: "Dicoding Indonesia",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.dicoding.com/certificates/QLZ924J3MX5D"
        },
      ]
    },
    {
      title: "Learn Web Application Fundamentals using ReactJS",
      subtitle: "Learn how to use property validation, react router, react context, react hooks, and make single page application using ReactJS",
      image: require("./assets/images/dicoding.png"),
      imageAlt: "Dicoding Indonesia",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.dicoding.com/certificates/MRZM4QNERXYQ"
        },
      ]
    },
    {
      title: "Learn build Web Application using ReactJS",
      subtitle: "Learn how to build basic web application using ReactJS",
      image: require("./assets/images/dicoding.png"),
      imageAlt: "Dicoding Indonesia",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.dicoding.com/certificates/EYX49140RPDL"
        },
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or wanna hire me? My Inbox is open for all.",
  number: "+62 896 9669 3167",
  email_address: "ibnuqomarilhuda@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
