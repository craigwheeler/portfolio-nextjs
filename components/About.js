import React from "react";
import Image from "next/image";
import profile from "../public/profile.jpeg";
import SocialMenu from "./SocialMenu";

const About = () => {
  return (
    <div className="container px-4 mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="lg:px-4 lg:mt-12 ">
          <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
            Hello 👋,
          </h1>
          <div className="mt-6 text-gray-800 dark:text-white">
            <p className="mb-4">
              My name is Craig and I am a Sr. Software Engineer with 7+ years
              experience creating web applications and data visualizations using
              JavaScript currently working at{" "}
              <a
                href="https://www.linkedin.com/in/craigawheeler/"
                className={"font-bold transition-colors hover:text-sky-500"}
                target="_blank"
                rel="noreferrer"
              >
                Breakthrough
              </a>
              .
            </p>

            <p className="mb-4">
              I have also worked with React, Redux, TypeScript, GraphQL, Apollo,
              Node.js, Express, Sequelize, Webpack, Storybook, Next.js, Jest,
              React-Testing-Library, Cypress and anything else I can get my
              hands on!
            </p>

            <h2 className="font-bold">
              Take a look at my work or get in touch! 🚀
            </h2>
          </div>
        </div>
        <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
          <Image
            src={profile}
            alt="Profile"
            priority={true}
            className="rounded-full"
            width={225}
            height={225}
          />
          <SocialMenu />
        </div>
      </div>
    </div>
  );
};

export default About;
