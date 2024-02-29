"use client";

import { Footer } from "flowbite-react";

import React from "react";

export const FooterComponent = () => {
  return (
    <>
      <Footer container>
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-center">
            {/* <Footer.Brand
              href="#"
              src="/assets/LOGO5.png"
              alt="juscelino-Logo"
            /> */}
            <Footer.LinkGroup>
              <Footer.Link href="#about-me">About</Footer.Link>
              <Footer.Link href="#my-project">My projects</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright href="#" by="Juscelino Mamede™" year={2024} />
        </div>
      </Footer>
    </>
  );
};
