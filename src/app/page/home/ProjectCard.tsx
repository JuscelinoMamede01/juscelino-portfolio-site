"use client";

import { Card } from "flowbite-react";
import Image from "next/image";
import { Button } from "@nextui-org/react";

interface Project {
  src: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

export const ProjectCard: React.FC<Project> = ({
  src,
  title,
  description,
  technologies,
  link,
}) => {
  return (
    <>
      <div className="max-w-sm flex flex-col  flex-grow shrink basis-2 gap-4 bg-gray-200 p-4 rounded sm:rounded-2xl">
        <div>
          <Image
            className="rounded"
            width={500}
            height={500}
            src={src}
            alt={title}
          />
        </div>
        <div className="flex flex-col flex-grow justify-self-start ">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>

          <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
            Applied technology:
          </h2>
          <ul className="grid grid-cols-2 grid-rows-2 max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            {technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
        <a
          href={link}
          className="bg-gray-900 text-white rounded text-sm px-4 p-2 w-[40%]"
          target="_blank"
        >
          See more
        </a>
      </div>
    </>
  );
};

//  {
//   return (
//     <Card href="" className="max-w-sm">
//       <Image
//         className="rounded"
//         width={500}
//         height={500}
//         src="/assets/laBasketeira.png" // Replace with your project image
//         alt={`${title} project image`}
//       />
//       <Card.Body>
//         <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//           {title}
//         </h5>
//         <p className="font-normal text-gray-700 dark:text-gray-400">
//           {description}
//         </p>
//         <div className="mt-2 flex flex-wrap gap-1">
//           {technologies.map((tech) => (
//             <Badge key={tech} as="span" variant="light">
//               {tech}
//             </Badge>
//           ))}
//         </div>
//       </Card.Body>
//     </Card>
//   );
// };
