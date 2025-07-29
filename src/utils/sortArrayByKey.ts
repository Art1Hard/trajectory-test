import type { ICar } from "@src/types/cars";

export const sortCarsByKey = (cars: ICar[], sort: string) => {
	const [key, order] = sort.startsWith("-")
		? [sort.slice(1), "desc"]
		: [sort, "asc"];

	return [...cars].sort((a, b) => {
		if (a[key] < b[key]) return order === "asc" ? -1 : 1;
		if (a[key] > b[key]) return order === "asc" ? 1 : -1;
		return 0;
	});
};
