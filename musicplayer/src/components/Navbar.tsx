"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";


function Navbar({ className }: { className?: string }) {

  const [active, setActive] = useState<string | null>(null);
  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl z-50 mx-auto ", className="hover:font-bold ")}
    >
            <Menu setActive={setActive} >
              <div className="flex justify-center w-full gap-4 flex-wrap " >

        <MenuItem setActive={setActive} active={active} item="Home">
          <HoveredLink rel="stylesheet" href="/" >Home</HoveredLink>
        </MenuItem>

      <MenuItem setActive={setActive} active={active} item="Audio Songs">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Hollywood Songs</HoveredLink>
            <HoveredLink href="/bollywood-songs">Bollywood Songs</HoveredLink>
            <HoveredLink href="/pakistani-songs">Pakistani Songs</HoveredLink>
            <HoveredLink href="/panjabi-songs">Punjabi Songs</HoveredLink>
          </div>
        </MenuItem>

        
      <MenuItem setActive={setActive} active={active} item="Video Songs" >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hollywood-songs">Hollywood Songs</HoveredLink>
            <HoveredLink href="/bollywood-songs">Bollywood Songs</HoveredLink>
            <HoveredLink href="/pakistani-songs">Pakistani Songs</HoveredLink>
            <HoveredLink href="/panjabi-songs">Punjabi Songs</HoveredLink>
          </div>
        </MenuItem>


             
      <MenuItem setActive={setActive} active={active} item="Contact Us" >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/footer">Phone Contact</HoveredLink>
            <HoveredLink href="/footer">Email Contact</HoveredLink>
            <HoveredLink href="/footer">Linkdin Conatact</HoveredLink>
            <HoveredLink href="/footer">Offece Address</HoveredLink>
          </div>
        </MenuItem>
        </div>
        </Menu>
       </div>
  )
}

export default Navbar;