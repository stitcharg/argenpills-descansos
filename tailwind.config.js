module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	theme: {
		screens: {
			'sm': '640px',
			// => @media (min-width: 640px) { ... } 

			'md': '768px',
			// => @media (min-width: 768px) { ... }

			'lg': '1024px',
			// => @media (min-width: 1024px) { ... }

			'xl': '1280px',
			// => @media (min-width: 1280px) { ... }
		},
		colors: {
			'ap.yellow': '#FFBE0B',
			'ap.orange': '#FB5607',
			'ap.pink': '#FF006E',
			'ap.purple': '#8338EC',
			'ap.blue': '#3A86FF',
			'white': '#FFFFFF'
		}
	}
};
