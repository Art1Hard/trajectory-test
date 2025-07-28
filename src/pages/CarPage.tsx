import CarList from "@src/components/car/CarList";
import { SortDropdown } from "@src/components/car/dropdown";
import CarLocatorMap from "@src/components/car/CarLocatorMap";
import useFetchCars from "@src/hooks/car/useFetchCars";
import { useCarStore } from "@src/app/store/car";

const CarPage = () => {
	const { isLoading, isError } = useFetchCars();
	const { cars } = useCarStore();

	if (isLoading) {
		return <p className="text-white">Загрузка...</p>;
	}

	if (isError) {
		return <p className="text-white">Произошла ошибка на стороне сервера.</p>;
	}

	if (cars.length <= 0) return <p className="text-white">Машин нет.</p>;

	return (
		<div className="flex flex-col gap-y-6 items-start">
			<SortDropdown />
			<CarList cars={cars} />
			{cars.length > 0 && <CarLocatorMap cars={cars} />}
		</div>
	);
};

export default CarPage;
