"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import footLogo from "./Icons";
import Football from "./Icons";
interface propsType {
  title: string;
  href: string;
  className: string;
}

const CustomLink = (props: propsType) => {
  const { href, title, className } = props;
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-teal-600
          absolute left-0 -bottom-0.5 group-hover:w-full transition-[width]
          // ease duration-300 ${router.asPath === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header aria-label="Site Header" className="bg-white">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link className="block text-teal-600" href="/">
          <span className="sr-only">Home</span>
          <Football />
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Site Nav" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <CustomLink
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/"
                  title="Home"
                />
              </li>{" "}
              <li>
                <CustomLink
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/booking"
                  title="Booking"
                />
              </li>
              <li>
                <CustomLink
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/calendar"
                  title="Calendar"
                />
              </li>
              <li>
                <CustomLink
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/tournament"
                  title="Tournament"
                />
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Link
                className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                href="/login"
              >
                Login
              </Link>

              <Link
                className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
                href="/register"
              >
                Register
              </Link>
            </div>

            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
