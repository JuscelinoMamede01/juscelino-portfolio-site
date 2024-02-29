"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";

export const Header = () => {
  return (
    <div className=" px-4 mx-auto max-w-screen-xl text-center ">
      <Navbar fluid rounded>
        <Navbar.Brand as={Link} href="#">
          <img
            src="/assets/LOGO5.png"
            className="mr-3 w-24 "
            alt="juscelino-Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#about-me" scroll={false}>
            About me
          </Navbar.Link>
          <Navbar.Link href="#my-project">My projects</Navbar.Link>
          <Navbar.Link href="#contact">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
