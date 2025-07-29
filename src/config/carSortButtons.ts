import type { CarSortButton } from "@src/types/cars";

export const sortButtons: CarSortButton[] = [
	{ title: "price: low to high", value: "price" },
	{ title: "price: high to low", value: "-price" },
	{ title: "year: newest", value: "-year" },
	{ title: "year: oldest", value: "year" },
];
