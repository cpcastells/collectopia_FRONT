# Collectopia

<a id="readme-top"></a>

## Table of Contents

<a name="readme-top"></a>

  <summary>Summary</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built with</a></li>
        <li><a href="#tested-with">Tested with</a></li>
        <li><a href="#pipeline">Pipeline</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#demo">Demo</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
<br>

## About the project

Collectopia is a board game collection management Single Page Application built with React and Redux. It allows users to keep track of their board game collections by adding, removing, and modifying board games. This README.md provides an overview of the application, installation instructions, available commands, and development guidelines.
<br><br>

<div align="center">
  <img src="https://media.discordapp.net/attachments/1114204200885301331/1122837867887079454/carles-pueyo-final-project-front-202.netlify.app_loginiPhone_XR_4.png" alt="Login page" height="500">
  <img src="https://media.discordapp.net/attachments/1114204200885301331/1122837867178242118/carles-pueyo-final-project-front-202.netlify.app_loginiPhone_XR_1.png" alt="List page" height="500">
  <img src="https://media.discordapp.net/attachments/1114204200885301331/1122837866649755689/carles-pueyo-final-project-front-202.netlify.app_loginiPhone_XR.png" alt="Detail page" height="500">
  <img src="https://media.discordapp.net/attachments/1114204200885301331/1122837867622834196/carles-pueyo-final-project-front-202.netlify.app_loginiPhone_XR_3.png" alt="Add page" height="500">
</div>

<br>

<a id="built-with"></a>

<div align="center">
  <h3 style="border-bottom: 2px solid #DDD; width: 100%;">Built With</h3>
</div>

<br>

<div align="center">
  <a href="https://reactjs.org/"><img src="https://badgen.net/badge/React/v17.0.2/blue?icon=react" alt="React"></a>
  <a href="https://redux-toolkit.js.org/"><img src="https://badgen.net/badge/Redux%20Toolkit/v1.6.2/purple" alt="Redux Toolkit"></a>
  <a href="https://www.typescriptlang.org/"><img src="https://badgen.net/badge/TypeScript/v4.4.3/blue?icon=typescript" alt="TypeScript"></a>
  <a href="https://reactrouter.com/"><img src="https://badgen.net/badge/React%20Router/v6.11.2/orange?icon=react-router" alt="React Router"></a>
  <a href="https://axios-http.com/"><img src="https://badgen.net/badge/Axios/v1.4.0/blue?icon=axios" alt="Axios"></a>
  <a href="https://styled-components.com/"><img src="https://badgen.net/badge/styled-components/v5.3.1/pink?icon=styled-components" alt="styled-components"></a>
</div>

<br>

<a id="tested-with"></a>

<div align="center">
  <h3 style="border-bottom: 2px solid #DDD; width: 100%;">Tested With</h3>
</div>

<br>

<div align="center">
  <a href="https://mswjs.io/"><img src="https://img.shields.io/badge/Vitest-v0.31.0-green?logo=Vitest" alt="Vitest"></a>
  <a href="https://testing-library.com/docs/react-testing-library"><img src="https://img.shields.io/badge/React_Testing_Library-v12.1.2-orange?logo=testing-library" alt="React Testing Library"></a>
  <a href="https://mswjs.io/"><img src="https://img.shields.io/badge/MSW-v1.2.1-green?logo=msw" alt="MSW"></a>
</div>

<br>

<a id="pipeline"></a>

<div align="center">
  <h3 style="border-bottom: 2px solid #DDD; width: 100%;">Pipeline</h3>
</div>

<br>

<div align="center">
<a href="https://prettier.io/"><img src="https://img.shields.io/badge/Prettier-Code%20Formatting-ff69b4?logo=prettier" alt="Prettier"></a>
  <a href="https://typicode.github.io/husky"><img src="https://badgen.net/badge/Husky/v7.0.4/blue" alt="Husky"></a>
  <a href="https://eslint.org/"><img src="https://img.shields.io/badge/ESLint-Code%20Linting-yellow?logo=eslint" alt="ESLint"></a>
</div>
<br>

<div align="center">
  <a href="https://sonarcloud.io/summary/new_code?id=isdi-coders-2023_Carles-Pueyo-Final-Project-back-202304-bcn"><img src="https://sonarcloud.io/api/project_badges/measure?project=isdi-coders-2023_Carles-Pueyo-Final-Project-back-202304-bcn&metric=coverage" alt="Coverage"></a>
  <a href="https://sonarcloud.io/summary/new_code?id=isdi-coders-2023_Carles-Pueyo-Final-Project-back-202304-bcn"><img src="https://sonarcloud.io/api/project_badges/measure?project=isdi-coders-2023_Carles-Pueyo-Final-Project-back-202304-bcn&metric=alert_status" alt="Quality Gate Status"></a>
  <a href="https://sonarcloud.io/summary/new_code?id=isdi-coders-2023_Carles-Pueyo-Final-Project-front-202304-bcn"><img src="https://sonarcloud.io/api/project_badges/measure?project=isdi-coders-2023_Carles-Pueyo-Final-Project-front-202304-bcn&metric=sqale_index" alt="Technical Debt"></a>
</div>

<br>

<p align="center">(<a href="#readme-top">back to top</a>)</p>

## Getting started

<br>

### Prerequisites

To use this app, you'll need to have the following tool installed:
<br>  
[![Node.js](https://badgen.net/badge/Node.js/v14.17.6/green?icon=node.js)](https://nodejs.org/)

### Installation

1. Clone the repo

```sh
git clone https://github.com/cpcastells/collectopia_FRONT.git
```

2. Install NPM packages

```sh
npm install
```

3. You will need the server side: collectopia-BACK.

<br>

## Usage

To use the Collectopia frontend application, follow these steps:

1. Start the development server by running the command:

```sh
npm run dev
```

This will start a development server, and you can access the application by visiting http://localhost:3000/ in your web browser.

2. Building and deploying the application:

a. To build the application, run the command:

```sh
npm run build
```

This will generate a production-ready version of the app in the "build" directory.

b. To run the built application locally, open the collectopia-BACK project and use the command:

```sh
npm start
```

Note: Before committing any changes, it's recommended to run ESLint to ensure code quality and style adherence. You can run ESLint by executing the command:

```sh
npm run lint
```

<br>

<p align="center">(<a href="#readme-top">back to top</a>)</p>

## Roadmap

<br>

We continue working on the application to add new functionalities and improve the user experience. All ideas are welcome! If you have any suggestions or improvements you would like to see implemented, feel free to share them with us ✨

<br>

- [x] Login Page
- [x] List Page
- [x] UI
  - [x] Loader
  - [x] Feedback messages
- [x] Detail Page
- [x] Add Page
- [ ] Modify Page (Ongoing)
- [ ] Register Page

<br>

<p align="center">(<a href="#readme-top">back to top</a>)</p>
<br>

<a id="demo"></a>

<div align="center">
  <h3 style="font-size: 1.5rem; border-bottom: 2px solid #DDD; width: 100%;">Demo</h3>
</div>
<br>

<p align="center">
  <img src="https://cdn.discordapp.com/attachments/1114204200885301331/1122923373832450131/LOGO-svg.png" alt="Logo" width="120">
</p>

<p align="center">Check the demo <a href="https://collectopia.netlify.app/"><br>HERE</a></p>

<p align="center">
  <code>username: admin <br> password: admin</code>
</p>

<br>

<a id="contact"></a>

<div align="center">
  <h3 style="font-size: 1.5rem; border-bottom: 2px solid #DDD; width: 100%;">Contact</h3>
</div>
<br>

<div align="center">
  <a href="https://www.linkedin.com/in/carlespueyodeveloper/">
    <img src="https://img.shields.io/badge/LinkedIn-Carles_Pueyo-blue?logo=linkedin" alt="LinkedIn">
  </a>
</div>

<br>

<p align="center">(<a href="#readme-top">back to top</a>)</p>
<br>
