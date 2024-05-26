import { eshop, portfolio, shooter, tastyRecipes } from "../assets";

export const projectsData = [
  {
    imageSrc: eshop,
    title: "e-shop",
    description:
      "An eCommerce website built using React and checkout intergreted with stripe. Use only the test account for testing.",
    techStack: ["React", "Redux", "Material-UI"],
    live: "https://e-shop-ecommerce.netlify.app/",
    github: "https://github.com/Mupa1/e-shop",
  },
  {
    imageSrc: tastyRecipes,
    title: "Tasty Recipes",
    description:
      "A single-page application that lets the user discover or filter through a variety of recipes by fetching data from Spoonacular API.",
    techStack: ["React", "Redux"],
    live: "https://tasty-yummy-recipes-app.netlify.app/",
    github: "https://github.com/Mupa1/tasty-recipes",
  },
  {
    imageSrc: shooter,
    title: "Shooter Game",
    description:
      "An RPG shooter game built with Phaser 3, a JavaScript game framework designed to create 2D games.",
    techStack: ["JavaScript", "Phaser3"],
    live: "https://mupa-shooter-game.netlify.app/",
    github: "https://github.com/Mupa1/rpg-shooter-game",
  },
  {
    imageSrc: portfolio,
    title: "This Portfolio",
    description:
      "A responsive personal web development portfolio built using react and screenshots combined using Figma.",
    techStack: ["React", "Material UI"],
    live: "https://mupa-dev.netlify.app/",
    github: "https://github.com/Mupa1/my-portfolio",
  },
];
