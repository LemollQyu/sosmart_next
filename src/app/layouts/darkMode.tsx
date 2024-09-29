"use client"
import { useState, useEffect } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  // Simpan dark mode di local storage
  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    
      <button
        onClick={toggleDarkMode}
        className="absolute bottom-0 left-0 z-50 px-4 py-2 rounded-full text-white bg-blue-500 dark:bg-yellow-500"
      >
        {darkMode ? 'Light' : 'Dark'}
      </button>

  );
}
