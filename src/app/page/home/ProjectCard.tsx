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
      <Card
        href=""
        className="max-w-sm"
        renderImage={() => (
          <Image
            className="rounded"
            width={500}
            height={500}
            src={src}
            alt={title}
          />
        )}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>

        <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
          Applied technology:
        </h2>
        <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
          {technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="flex gap-4 items-center">
          <Button
            href={link}
            className="bg-gray-900 text-white"
            size="sm"
            target="_blank"
          >
            See more
          </Button>
        </div>
      </Card>
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
