import Link from "next/link";
import { useEffect } from "react";
import DarkMode from "./layouts/darkMode";

export default function Home() {

  

  return (
    <>
    <DarkMode/>

    <p className="dark:text-white text-black">Home page</p>


    </>
  );
}
