"use client";

import { Card } from "flowbite-react";
import Image from "next/image";

export const ProjectCard = () => {
  return (
    <>
      <Card
        href=""
        className="max-w-sm"
        renderImage={() => (
          <Image
            width={500}
            height={500}
            src="/assets/laBasketeira.png"
            alt="image 1"
          />
        )}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          La Basketeira
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          NBA Jersey Registration Project for E-commerce
        </p>

        <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
          Applied technology
        </h2>
        <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
          <li>HTML</li>
          <li>CSS</li>
          <li>PHP</li>
          <li>MYSQL/Xampp</li>
        </ul>
      </Card>
    </>
  );
};
