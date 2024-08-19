"use client";
import React, { useState } from "react";
import styles from "./Header.module.css";
import Search from "./search";
import Person from "./person";
import Cart from "./cart";

const links = ["Home", "Category", "About Us", "Support"];

export default function Header() {
  const [bgColor, setBgColor] = useState("#ff0000");
  const [textcolor, settextcolor] = useState("#ffffff");

  return (
    <header>
      <nav
        className="py-2 px-[3vw] flex justify-between items-center"
        style={{ backgroundColor: bgColor , color:textcolor}}
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
          <Search textcolor={textcolor}/>
          <div className="flex items-center">
            <Person textcolor={textcolor}/>
            <p>Sign in</p>
          </div>
          <Cart textcolor={textcolor}/>
        </div>
      </nav>
      <div className="flex">
        <div className="flex justify-end p-4">
          <label htmlFor="colorPicker" className="mr-2">
            Choose Header Color:
          </label>
          <input
            type="color"
            id="colorPicker"
            value={bgColor}
            onChange={(e) => {
              setBgColor(e.target.value);
            }}
            className="border-2 border-gray-300 rounded"
          />
        </div>
        <div className="flex justify-end p-4">
          <label htmlFor="textcolorPicker" className="mr-2">
            Choose Text Color:
          </label>
          <input
            type="color"
            id="textcolorPicker"
            value={textcolor}
            onChange={(e) => {
              settextcolor(e.target.value);
            }}
            className="border-2 border-gray-300 rounded"
          />
        </div>
      </div>
    </header>
  );
}
