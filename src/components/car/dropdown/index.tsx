import { ChevronDown } from "lucide-react";
import cn from "clsx";
import { useState } from "react";
import DropdownButton from "./DropdownButton";
import { useCarStore } from "@src/app/store/car";

const sortButtons = [
	{ title: "price: low to high", value: "price" },
	{ title: "price: high to low", value: "-price" },
	{ title: "year: newest", value: "-year" },
	{ title: "year: oldest", value: "year" },
];

export const SortDropdown = () => {
	const { sortCars } = useCarStore();
	const [sortTitle, setSortTitle] = useState<string>("");
	const [isOpen, setIsOpen] = useState(false);

	const open = () => setIsOpen(true);
	const close = () => setIsOpen(false);

	return (
		<div className="relative inline-block text-left">
			<div>
				<button
					onClick={() => (!isOpen ? open() : close())}
					type="button"
					className="inline-flex justify-center items-center gap-2 w-full rounded-md border border-gray-600 bg-gray-800 px-4 py-2 text-sm font-medium text-gray-300 shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500">
					Sort by {sortTitle}
					<ChevronDown
						className={cn("h-4 w-4 text-gray-400", !isOpen ? "rotate-180" : "")}
					/>
				</button>
			</div>

			{isOpen && (
				<div className="absolute left-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-gray-800 border border-gray-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="py-1 text-sm text-gray-300">
						{sortButtons.map((button) => (
							<DropdownButton
								key={button.value}
								onClick={() => {
									sortCars(button.value);
									setSortTitle(button.title);
									close();
								}}>
								{button.title}
							</DropdownButton>
						))}
					</div>
				</div>
			)}
		</div>
	);
};
