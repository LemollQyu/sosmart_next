import Link from "next/link";
import { useEffect } from "react";
import DarkMode from "./layouts/darkMode";
import LogOut from "./components/logout";

export default function Home() {

  

  return (
    <>
    <DarkMode/>

    <LogOut />

    <p className="dark:text-white text-black">Home page</p>


    </>
  );
}
