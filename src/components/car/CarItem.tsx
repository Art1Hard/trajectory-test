import React from "react";
import { CarDeleteButton, CarEditButton } from "./buttons";
import { getTailwindColor } from "@src/config/tailwindColors";
import { useCarStore } from "@src/app/store/car";
import CarEdit from "./CarEdit";
import useModal from "@src/hooks/useModal";
import { toast } from "sonner";

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
	const { isModalOpen, openModal, closeModal } = useModal();
	const { deleteCar } = useCarStore();
	const colorClass = getTailwindColor(color);

	return (
		<div className="relative max-w-sm rounded-2xl shadow-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 p-6 transition-shadow hover:shadow-2xl text-white">
			<CarDeleteButton
				onClick={() => {
					if (!confirm("This action cannot be undone. Proceed?")) return;
					deleteCar(id);
					toast.success(`Car «${name} ${model}» was deleted!`);
				}}
			/>

			<h2 className="text-2xl font-semibold text-yellow-400 mb-4 tracking-wide">
				{name} {model}
			</h2>
			<ul className="space-y-2 text-gray-300 text-sm mb-6">
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
			<CarEditButton onClick={openModal} />

			<CarEdit
				id={id}
				name={name}
				price={price}
				isModalOpen={isModalOpen}
				closeModal={closeModal}
			/>
		</div>
	);
};

export default CarItem;
