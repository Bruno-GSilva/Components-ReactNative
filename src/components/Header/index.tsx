"use client";
import React from "react";
import { Navbar } from "flowbite-react";

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  return (
    <>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="/">
          <img
            src="https://avatars.githubusercontent.com/u/138801032?s=400&u=352199e1f9252740de74520213013320741d68a3&v=4"
            className="mr-3 h-6 sm:h-9"
            alt="Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            BrunoComponents
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/navbars" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars">About</Navbar.Link>
          <Navbar.Link href="/navbars">Docs</Navbar.Link>
          <Navbar.Link href="/navbars">Components</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
