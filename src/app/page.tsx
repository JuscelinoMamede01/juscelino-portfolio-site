"use client";
import { Avatar } from "flowbite-react";

import { Button, ButtonGroup } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="bg-bg-primary-color h-dvh">
      <div className="flex flex-wrap gap-2">
        <Avatar
          className="bg-pallet-bright-color1 rounded-full"
          img="/assets/profile-pic.png"
          alt="avatar of Jese"
          rounded
        />
      </div>
    </main>
  );
}
