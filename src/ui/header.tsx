"use client";

import Link from "next/link";
import React, { PropsWithChildren, useState } from "react";
import { Cinzel } from "next/font/google";
import { clsx } from "clsx";
import Icon from "../../public/icon.png";
import Image from "next/image";

const cinzel = Cinzel({
  weight: "700",
  subsets: ["latin"],
});

function NavLink(
  props: PropsWithChildren<{
    href: string;
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }>,
) {
  return (
    <Link
      href={props.href}
      className={"block p-2"}
      onClick={() => props.setMenuOpen(false)}
    >
      {props.children}
    </Link>
  );
}

function DirectLink(
  props: PropsWithChildren<{
    href: string;
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }>,
) {
  return (
    <a
      href={props.href}
      className={"block p-2"}
      onClick={() => props.setMenuOpen(false)}
    >
      {props.children}
    </a>
  );
}

function MenuButton({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <button
      data-collapse-toggle="navbar"
      type="button"
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="navbar"
      aria-expanded={menuOpen}
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <span className="sr-only">Open navigation menu</span>
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>
  );
}

function NavLinkSet({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      className={clsx(
        menuOpen ? "block" : "hidden",
        "w-full ml-auto relative md:block md:w-auto",
      )}
      id={"navbar"}
    >
      <ul className={"flex p-2 flex-col md:flex-row"}>
        <li>
          <NavLink href={"/"} setMenuOpen={setMenuOpen}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink href={"/download"} setMenuOpen={setMenuOpen}>
            Download
          </NavLink>
        </li>
        <li>
          <NavLink href={"/gallery"} setMenuOpen={setMenuOpen}>
            Gallery
          </NavLink>
        </li>
        <li>
          <DirectLink
            href={"https://docs.sovereignengine.com"}
            setMenuOpen={setMenuOpen}
          >
            Documentation
          </DirectLink>
        </li>
        <li>
          <NavLink href={"/credits"} setMenuOpen={setMenuOpen}>
            Credits
          </NavLink>
        </li>
        <li>
          <NavLink href={"/blog"} setMenuOpen={setMenuOpen}>
            Blog
          </NavLink>
        </li>
        <li>
          <DirectLink
            href={"https://discord.gg/7nPmhJ8XtX"}
            setMenuOpen={setMenuOpen}
          >
            Discord
          </DirectLink>
        </li>
        <li>
          <DirectLink
            href={"https://github.com/opticfluorine/sovereign"}
            setMenuOpen={setMenuOpen}
          >
            GitHub
          </DirectLink>
        </li>
      </ul>
    </div>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={"py-2 fixed top-0 w-full bg-zinc-950 text-white z-50"}>
      <div
        className={
          "max-w-screen-xl flex flex-wrap items-center justify-between md:px-24 mx-auto"
        }
      >
        <DirectLink href={"/"} setMenuOpen={setMenuOpen}>
          <span className={clsx(cinzel.className, "text-2xl")}>
            <Image
              src={Icon}
              alt={"Sovereign Engine logo"}
              className={"inline w-8 mx-2"}
            />
            Sovereign Engine
          </span>
        </DirectLink>

        <MenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <NavLinkSet menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
    </nav>
  );
}
