import React from "react";

interface AcademicCardProps {
  title: string;
  institution: string;
  dateRange: string;
  imageSrc: string;
  altText: string;
}

export const AcademicCard: React.FC<AcademicCardProps> = ({
  title,
  institution,
  dateRange,
  imageSrc,
  altText,
}) => {
  return (
    <>
      <article
        className={`md:h-48 md:w-60 w-[90%] mt-2 mb-2 rounded bg-gray-200 md:rounded flex flex-col justify-center p-4`}
      >
        <img className="w-[30%] h-[40%] " src={imageSrc} alt={altText} />
        <h5 className="mb-2 text-2lg font-bold tracking-tight text-gray-900 ">
          {title}
        </h5>
        <h5 className="mb-2 text-lg font-light italic text-gray-900 ">
          {institution}
        </h5>
        <p className="font-normal text-gray-700">{dateRange}</p>
      </article>
    </>
  );
};
