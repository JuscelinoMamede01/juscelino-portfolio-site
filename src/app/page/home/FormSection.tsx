"use client";

import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";

import React from "react";

export const FormSection = () => {
  return (
    <>
      <section id="contact" className="flex flex-col justify-center items-center py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 ">
        <h3
          className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl "
          data-aos="flip-up"
        >
          Contact me
        </h3>
        <form className=" w-[100%] sm:w-[50%] flex flex-col gap-4">
          <div>
            <div className="mb-2 block text-start">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@flowbite.com"
              required
            />
          </div>

          <div>
            <div className="mb-2 block text-start">
              <Label htmlFor="comment" value="Your message" />
            </div>
            <Textarea
              id="comment"
              placeholder="Leave a comment..."
              required
              rows={4}
            />
          </div>
          <Button className="bg-gray-900 w-[50%]" type="submit">
            Submit
          </Button>
        </form>
      </section>
    </>
  );
};
