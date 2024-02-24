import React from "react";

export const AcademicCard = () => {
  return (
    <>
      <article className="md:h-48 md:w-60 w-[100%] bg-gray-200 md:rounded flex flex-col justify-center p-4">
        <img
          className="w-[30%] h-[40%] "
          src="/assets/web-icon.png"
          alt="Picture of the author"
        />
        <h5 className="mb-2 text-2lg  font-bold tracking-tight text-gray-900  ">
          Associate Degree in Web Systems
        </h5>
        <h5 className="mb-2 text-lg  font-light italic text-gray-900  ">
          FICR
        </h5>
        <p className="font-normal text-gray-700 ">Aug 2022 / June 2024</p>
      </article>
      <article className="md:h-48 md:w-60 w-[100%] bg-gray-200 md:rounded flex flex-col justify-center  p-4">
        <img
          className="w-[30%] h-[40%] "
          src="/assets/frontend.png"
          alt="Picture of the author"
        />
        <h5 className="mb-2 text-2lg  font-bold tracking-tight text-gray-900  ">
          FAP <br />
          Frontend Developer
        </h5>
        <h5 className="mb-2 text-lg  font-light italic text-gray-900  ">
          SOFTEX-PE
        </h5>
        <p className="font-normal text-gray-700 ">Aug 2023 / Jan 2024</p>
      </article>
      <article className="md:h-48 md:w-60 w-[100%] bg-gray-200 md:rounded flex flex-col justify-center p-4">
        <img
          className="w-[30%] h-[40%] "
          src="/assets/english.png"
          alt="Picture of the author"
        />
        <h5 className="mb-2 text-2lg  font-bold tracking-tight text-gray-900  ">
          EF SET English Certificate 70/100 (C1 Advanced)
        </h5>
        <h5 className="mb-2 text-lg  font-light italic text-gray-900  ">
          EF SET English
        </h5>
        <p className="font-normal text-gray-700 ">Apr 2023</p>
      </article>
    </>
  );
};
