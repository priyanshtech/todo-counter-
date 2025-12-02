export default function ThemeToggle({ theme, setTheme }) {
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="
        px-4 py-2 rounded-lg 
        bg-blue-600 text-white 
        transition-transform duration-150 active:scale-95
      "
    >
      {theme === "light" ? "Switch to Dark" : "Switch to Light"}
    </button>
  );
}
