import { useCarStore } from "@src/app/store/car";
import type { CarSortButton } from "@src/types/cars";
import { useState } from "react";

const useCarSortDropdown = () => {
	const { sortCars } = useCarStore();
	const [sortTitle, setSortTitle] = useState<string>("");
	const [isOpen, setIsOpen] = useState(false);

	const open = () => setIsOpen(true);
	const close = () => setIsOpen(false);

	const handleSortCars = (button: CarSortButton) => {
		sortCars(button.value);
		setSortTitle(button.title);
		close();
	};

	return { sortTitle, isOpen, open, close, handleSortCars };
};

export default useCarSortDropdown;
