import { macosStructur, weatheForecast, meetUpScreens } from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
];

const experiences = [
  {
    title: "React native Developer",
    company_name: "Muuvr Labs AG",
    date: "07.2023-07.2024",
    details: [
      "<span style='color: white;'>Development of mobile features</span> with a focus on efficient coding and <span style='color: white;'>performance optimization</span>.",
      "Integration of <span style='color: white;'>Ready Player Me</span> services to enable custom avatars and personalization.",
      "Creation of <span style='color: white;'>complex animations</span> to enhance user experience <span style='color: white;'>(UI/UX)</span>.",
      "Collaboration with the design team to <span style='color: white;'>optimize UI flow and user-friendliness</span>.",
    ],
  },
];

const portfolio = [
  {
    name: "Weather Forecast React Native App",
    description:
      "The goal of this project is to boost my knowledge in Reanimated, Skia Components, and Component Management in React Native. It showcases the design concepts in a fully functional React Native app built with Expo.",
    image: weatheForecast,
  },
  {
    name: "Meetup Event Planner Clone",
    description:
      "MeetUp is a React Native mobile application designed to help people discover and create local events, connect with like-minded individuals, and build thriving communities.",
    image: meetUpScreens,
  },
  {
    name: "Macos Book Management App",
    description:
      "A Book Manager application built with React Native, using Redux Toolkit for state management and styled with @shopify/restyle for a scalable and flexible design system. The app also leverages React Navigation’s Stack Navigation to handle screen transitions smoothly.",
    image: macosStructur,
  },
];

export { experiences, portfolio };
