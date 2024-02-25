"use client";

import Image from "next/image";
import { AcademicCard } from "./AcademicCard";
import { FormSection } from "./FormSection";

const Home = () => {
  return (
    <>
      <section className="bg-white ">
        <div className="flex flex-col  justify-between items-center">
          <h1 className="mt-4 mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
            Hi, there! I'm Juscelino.
          </h1>
          <Image
            src="/assets/my-banner.png"
            alt="Picture of the author"
            width={400}
            height={400}
          />
        </div>
        <div className="bg-gray-900  flex flex-col justify-evenly items-center md:p-4 md:flex-row">
          <AcademicCard />
        </div>
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h3
            className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl "
            data-aos="flip-up"
          >
            Who am I?
          </h3>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 ">
            As an aspiring front-end developer, I am earnestly pursuing my
            initial opportunity in the field. I bring a dedication to creating a
            creative implementation of web technologies.
          </p>
          <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg ">
            <span className="font-semibold text-gray-400 uppercase">
              My links
            </span>
            <div className="flex  justify-center items-center space-x-10  mt-4 text-gray-500 ">
              <a
                href="https://www.linkedin.com/in/juscelinomamede/"
                className=" mb-5 lg:mb-0 hover:text-gray-800 "
                target="_blank"
              >
                <svg
                  className="w-10 h-10 text-gray-500 hover:text-gray-800 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 15 15"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                    clip-rule="evenodd"
                  />
                  <path d="M3 5.012H0V15h3V5.012Z" />
                </svg>
              </a>

              <a
                href="https://github.com/JuscelinoMamede01"
                className=" mb-5 lg:mb-0 hover:text-gray-800 "
                target="_blank"
              >
                <svg
                  className="w-10 h-10 text-gray-500 hover:text-gray-800 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <FormSection />.
    </>
  );
};

export default Home;
