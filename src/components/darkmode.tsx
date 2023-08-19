import { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

//UNUSUED FOR NOW
const Switcher = () => {
	const [colorTheme, setTheme] = useDarkSide();
	const [darkSide, setDarkSide] = useState(
		colorTheme === "light" ? true : false
	);

	const toggleDarkMode = (checked: boolean) => {
		setTheme(colorTheme);
		setDarkSide(checked);
	};

	return (
		<>
			<DarkModeSwitch
				style={{ marginBottom: "2rem" }}
				checked={darkSide}
				onChange={toggleDarkMode}
				size={30}
			/>
		</>
	);
}

const useDarkSide = () => {
	const [theme, setTheme] = useState(localStorage.theme);
	const colorTheme = theme === "dark" ? "light" : "dark";

	useEffect(() => {
		const root = window.document.documentElement;
		root.classList.remove(colorTheme);
		root.classList.add(theme);
		localStorage.setItem('theme', theme);
	}, [theme, colorTheme]);

	return [colorTheme, setTheme] as const
}

export default Switcher;