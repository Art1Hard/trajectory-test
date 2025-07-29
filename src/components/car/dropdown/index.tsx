import { ChevronDown } from "lucide-react";
import cn from "clsx";
import DropdownButton from "./DropdownButton";
import useCarSortDropdown from "@src/hooks/car/useCarSortDropdown";
import { sortButtons } from "@src/config/carSortButtons";

export const SortDropdown = () => {
	const { sortTitle, isOpen, open, close, handleSortCars } =
		useCarSortDropdown();

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
								onClick={() => handleSortCars(button)}>
								{button.title}
							</DropdownButton>
						))}
					</div>
				</div>
			)}
		</div>
	);
};
