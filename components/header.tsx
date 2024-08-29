"use client";
import React, { useState } from "react";
import styles from "./Header.module.css";
import Search from "./search";
import Person from "./person";
import Cart from "./cart";

const links = ["Home", "Category", "About Us", "Support"];

export default function Header() {
  const [bgColor, setBgColor] = useState("#F5F5F5");
  const [textcolor, settextcolor] = useState("#333333");

  return (
    <header>
      <nav
        className="py-3 px-[3vw] flex justify-between items-center shadow-md"
        style={{ backgroundColor: bgColor, color: textcolor }}
      >
        <div className="text-3xl">YEW</div>
        <ul className="flex gap-4 text-s">
          {links.map((item) => (
            <li key={item}>
              <a className={`relative ${styles.hovereffect}`} href="">
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-3">
          <Search textcolor={textcolor} />
          <div className="flex items-center">
            <Person textcolor={textcolor} />
            <p>Sign in</p>
          </div>
          <Cart textcolor={textcolor} />
        </div>
      </nav>
      <div className="flex"></div>
    </header>
  );
}
