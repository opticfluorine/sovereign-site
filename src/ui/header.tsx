"use client";

import Link from "next/link";
import React, { PropsWithChildren, useState } from "react";
import { Cinzel } from "next/font/google";
import { clsx } from "clsx";

const cinzel = Cinzel({
  weight: "700",
  subsets: ["latin"],
});

function NavLink(props: PropsWithChildren<{ href: string }>) {
  return (
    <Link href={props.href} className={"block p-2"}>
      {props.children}
    </Link>
  );
}

function DirectLink(props: PropsWithChildren<{ href: string }>) {
  return (
    <a href={props.href} className={"block p-2"}>
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

function NavLinkSet({ menuOpen }: { menuOpen: boolean }) {
  return (
    <div
      className={clsx(
        menuOpen ? "block" : "hidden",
        "w-full ml-auto md:block md:w-auto",
      )}
      id={"navbar"}
    >
      <ul className={"flex p-2 flex-col md:flex-row"}>
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/download"}>Download</NavLink>
        </li>
        <li>
          <NavLink href={"/gallery"}>Gallery</NavLink>
        </li>
        <li>
          <NavLink href={"/blog"}>Blog</NavLink>
        </li>
        <li>
          <DirectLink href={"https://github.com/opticfluorine/sovereign"}>
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
    <nav className={"py-2 fixed top-0 w-full bg-zinc-950 text-white"}>
      <div
        className={
          "max-w-screen-xl flex flex-wrap items-center justify-between md:px-24 mx-auto"
        }
      >
        <DirectLink href={"/"}>
          <span className={clsx(cinzel.className, "text-2xl")}>
            Sovereign Engine
          </span>
        </DirectLink>

        <MenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <NavLinkSet menuOpen={menuOpen} />
      </div>
    </nav>
  );
}
