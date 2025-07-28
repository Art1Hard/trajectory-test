export const getTailwindColor = (color: string): string => {
	const colorMap: Record<string, string> = {
		red: "bg-red-500",
		black: "bg-black",
		white: "bg-white border",
		silver: "bg-gray-300",
		gray: "bg-gray-600",
		blue: "bg-blue-500",
		green: "bg-green-500",
		yellow: "bg-yellow-400",
		brown: "bg-yellow-900",
		beige: "bg-yellow-200",
		orange: "bg-orange-500",
		purple: "bg-purple-500",
		pink: "bg-pink-400",
	};

	return colorMap[color.toLowerCase()] || "bg-gray-400";
};
