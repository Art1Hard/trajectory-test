import type { ICar } from "@src/types/cars";
import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";

interface ICarStore {
	cars: ICar[];
	setCars: (cars: ICar[]) => void;
	deleteCar: (id: number) => void;
	sortCars: (sort: string) => void;
}

export const useCarStore = createWithEqualityFn<ICarStore>()(
	(set) => ({
		cars: [],
		setCars: (cars) =>
			set(() => {
				return { cars };
			}),
		deleteCar: (id) =>
			set((state) => {
				return { cars: state.cars.filter((car) => car.id !== id) };
			}),
		sortCars: (sort) =>
			set((state) => {
				const [key, order] = sort.startsWith("-")
					? [sort.slice(1), "desc"]
					: [sort, "asc"];

				const sortedCars = [...state.cars].sort((firstCar, secondCar) => {
					if (firstCar[key] < secondCar[key]) return order === "asc" ? -1 : 1;
					if (firstCar[key] > secondCar[key]) return order === "asc" ? 1 : -1;
					return 0;
				});

				return { cars: sortedCars };
			}),
	}),
	shallow
);
