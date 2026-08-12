import { BsSun, BsMoon } from "react-icons/bs";

const DarkMode = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="flex items-center justify-center w-10 h-10 rounded-full text-gray-600 hover:text-black hover:bg-gray-100 dark:text-gray-300 dark:hover:text-yellow-400 dark:hover:bg-gray-800 duration-200 transition-all"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? (
        <BsSun className="text-xl" />
      ) : (
        <BsMoon className="text-xl" />
      )}
    </button>
  );
};

export default DarkMode;
