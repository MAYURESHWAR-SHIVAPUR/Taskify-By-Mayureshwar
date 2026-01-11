// useThemeToggle.js
import { useEffect, useState } from "react";

const useThemeToggle = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const root = document.documentElement;
        theme === "dark"
            ? root.classList.add("dark")
            : root.classList.remove("dark");
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return { theme, toggleTheme };
};

export default useThemeToggle;
