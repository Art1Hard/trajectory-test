import React from "react";
import CarDeleteButton from "./CarDeleteButton";
import { getTailwindColor } from "@src/config/tailwindColors";
import { useCarStore } from "@src/app/store/car";

type CarItemProps = {
	id: number;
	name: string;
	model: string;
	year: number;
	color: string;
	price: number;
};

const CarItem: React.FC<CarItemProps> = ({
	id,
	name,
	model,
	year,
	color,
	price,
}) => {
	const { deleteCar } = useCarStore();
	const colorClass = getTailwindColor(color);

	return (
		<div className="relative max-w-sm rounded-2xl shadow-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 p-6 transition-shadow hover:shadow-2xl text-white">
			<CarDeleteButton
				onClick={() => {
					if (!confirm("This action cannot be undone. Proceed?")) return;
					deleteCar(id);
				}}
			/>

			<h2 className="text-2xl font-semibold text-yellow-400 mb-4 tracking-wide">
				{name} {model}
			</h2>
			<ul className="space-y-2 text-gray-300 text-sm">
				<li>
					<span className="text-gray-400">Year:</span> {year}
				</li>
				<li className="flex items-center gap-2">
					<span className="text-gray-400">Color:</span>
					<span
						className={`w-4 h-4 rounded-full ${colorClass}`}
						title={color}></span>
					<span className="capitalize">{color}</span>
				</li>
				<li>
					<span className="text-gray-400">Price:</span>{" "}
					<span className="text-lg font-medium text-yellow-400">
						${price.toLocaleString()}
					</span>
				</li>
			</ul>
			<button className="mt-6 w-full bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 font-semibold py-2 px-4 rounded-xl hover:from-yellow-600 hover:to-yellow-500 transition">
				View Details
			</button>
		</div>
	);
};

export default CarItem;
