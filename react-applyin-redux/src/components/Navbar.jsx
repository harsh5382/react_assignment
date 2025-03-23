import { useTheme } from "../contexts/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="p-4 flex justify-between bg-gray-800 text-white">
      <h1 className="text-lg">My App</h1>
      <button onClick={toggleTheme} className="p-2 bg-gray-600 rounded">
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
