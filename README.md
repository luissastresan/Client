<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Fly Sense</h3>

  <p align="center">
    App for entertainment while flying to your favourite places
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
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
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This project is created to demonstrate my programming skills and knowledge in different technologies, especially in React.
It is an entertainment oriented application for an airline. You can log in and choose between different themes, movies, music or cinema. You can also comment what you like the most and leave your rating.

For the backend, I used NodeJs and Express to create a connection to a database in MongoDb. I have also created an API in graphQL, where I handle different Queries and mutations.

For the Frontend part, I created an application in React, using the NextJS Framework and TypeScript. To connect my API to the client I used Apollo Client.

For package management, I used Yarn.

![image-20210308125637654](https://github.com/luissastresan/FlySense/blob/main/images/homePage.png)

![image-20210308125721975](https://github.com/luissastresan/FlySense/blob/main/images/loginPage.png)

![image-20210308125721975](https://github.com/luissastresan/FlySense/blob/main/images/lightmainPage.png)

![image-20210308125721975](https://github.com/luissastresan/Client/blob/main/images/darkmainPage.png)

![image-20210308125721975](https://github.com/luissastresan/FlySense/blob/main/images/lightmoviecatalogPage.png)

![image-20210308125721975](https://github.com/luissastresan/FlySense/blob/main/images/darkmoviecatalogPage.png)

(https://github.com/luissastresan/FlySense/blob/main/images/infoMoviePage.png)

### Built With

This section should list any major frameworks and libreries that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- [Bootstrap](https://getbootstrap.com)
- [NextJS](https://nextjs.org/)
- [GraphQL](https://graphql.org/)
- [NodeJS](https://nodejs.org/es/)
- [Yarn](https://yarnpkg.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Mongodb](https://www.mongodb.com/es)

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

Install the Yarn global binary to its latest version:

- yarn

  ```sh
  npm install -g yarn
  ```

  Should you later want to update Yarn to the latest version, just run:

- yarn
  ```sh
  yarn set version latest
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/luissastresan/FlySense.git
   ```
2. There are two folders, backend and client. First open backend folder and run:
   ```sh
   yarn install
   yarn start
   ```
   Then, without close the server, go to client folder and run:
   ```sh
   yarn install
   yarn run dev
   ```

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Luis Sastre San Emeterio - luis.sastre93@gmail.com

Project Link: [https://github.com/luissastresan/FlySense](https://github.com/luissastresan/FlySense)
