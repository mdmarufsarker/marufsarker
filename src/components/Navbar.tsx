"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { logo } from "/public/";

interface DataTypes{
  id: number;
  link: string;
  title: string;
  initialY: number;
  initialOpacity: number;
  animateY: number;
  animateOpacity: number;
  transitionDuration: number;
  transitionDelay: number;
}

const navLinks: DataTypes[] = [
  {
    id: 1,
    link: "#home",
    title: "Home",
    initialY: -10,
    initialOpacity: 0,
    animateY: 0,
    animateOpacity: 1,
    transitionDuration: 0.1,
    transitionDelay: 0.1,
  },
  {
    id: 2,
    link: "#about",
    title: "About",
    initialY: -10,
    initialOpacity: 0,
    animateY: 0,
    animateOpacity: 1,
    transitionDuration: 0.1,
    transitionDelay: 0.2,
  },
  {
    id: 3,
    link: "#projects",
    title: "Projects",
    initialY: -10,
    initialOpacity: 0,
    animateY: 0,
    animateOpacity: 1,
    transitionDuration: 0.1,
    transitionDelay: 0.3
  },
  {
    id: 4,
    link: "#tutorials",
    title: "Tutorials",
    initialY: -10,
    initialOpacity: 0,
    animateY: 0,
    animateOpacity: 1,
    transitionDuration: 0.1,
    transitionDelay: 0.4
  },
  {
    id: 5,
    link: "#blogs",
    title: "Blogs",
    initialY: -10,
    initialOpacity: 0,
    animateY: 0,
    animateOpacity: 1,
    transitionDuration: 0.1,
    transitionDelay: 0.5
  },
  {
    id: 6,
    link: "#contact",
    title: "Contact",
    initialY: -10,
    initialOpacity: 0,
    animateY: 0,
    animateOpacity: 1,
    transitionDuration: 0.1,
    transitionDelay: 0.5
  },
]

export default function Navbar() {
  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor">
      <div className="max-w-container h-full mx-auto py-1 font-heading flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image src={logo} alt="logo" className="w-14" />
        </motion.div>
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-[13px] gap-7">
            {
              navLinks.map(({ id, link, title, initialY, initialOpacity, animateY, animateOpacity, transitionDuration, transitionDelay }) => {
                return (
                  <Link key={id} href={link}
                    className="font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ y: initialY, opacity: initialOpacity }}
                      animate={{ y: animateY, opacity: animateOpacity }}
                      transition={{ duration: transitionDuration, delay: transitionDelay }}
                    >
                      {title}
                    </motion.li>
                  </Link>
                )
              })
            }
            {/* <Link
              href="#about"
              className="font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.2 }}
              >
                About
              </motion.li>
            </Link>
            <Link
              href="#projects"
              className="font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
              >
                Projects
              </motion.li>
            </Link>
            <Link
              href="#tutorials"
              className="font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
              >
                Tutorials
              </motion.li>
            </Link>
            <Link
              href="#articles"
              className="font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.5 }}
              >
                Articles
              </motion.li>
            </Link>
            <Link
              href="#contact"
              className="font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.6 }}
              >
                Contact
              </motion.li>
            </Link> */}
          </ul>
          <a href="/resume.pdf" target="_blank">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
            >
              Resume
            </motion.button>
          </a>
        </div>
        {/* Small Icon Section */}
        <div className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group">
            <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
            <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
            <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
      </div>
    </div>
  );
}