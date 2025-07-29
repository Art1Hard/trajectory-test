import type { CarFormData, ICar } from "@src/types/cars";
import { sortCarsByKey } from "@src/utils/sortArrayByKey";
import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";

interface ICarStore {
	cars: ICar[];
	activeSort: string | undefined;
	setCars: (cars: ICar[]) => void;
	deleteCar: (id: number) => void;
	editCar: (id: number, body: CarFormData) => void;
	sortCars: (sort: string) => void;
}

export const useCarStore = createWithEqualityFn<ICarStore>()(
	(set) => ({
		cars: [],
		activeSort: undefined,
		setCars: (cars) =>
			set(() => {
				return { cars };
			}),
		editCar: (id, body) =>
			set((state) => {
				let updatedCars = state.cars.map((car) =>
					car.id === id ? { ...car, ...body } : car
				);

				const activeSort = state.activeSort;
				if (activeSort) updatedCars = sortCarsByKey(updatedCars, activeSort);

				return { cars: updatedCars };
			}),
		deleteCar: (id) =>
			set((state) => {
				return { cars: state.cars.filter((car) => car.id !== id) };
			}),
		sortCars: (sort) =>
			set((state) => {
				const sortedCars = sortCarsByKey(state.cars, sort);
				return { cars: sortedCars, activeSort: sort };
			}),
	}),
	shallow
);
