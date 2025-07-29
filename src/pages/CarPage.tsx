import CarList from "@src/components/car/CarList";
import { SortDropdown } from "@src/components/car/dropdown";
import CarLocatorMap from "@src/components/car/CarLocatorMap";
import useFetchCars from "@src/hooks/car/useFetchCars";
import { useCarStore } from "@src/app/store/car";
import { Error, Loading } from "@src/components/ui/status";

const CarPage = () => {
	const { isLoading, isError } = useFetchCars();
	const { cars } = useCarStore();

	if (isLoading) return <Loading />;
	if (isError) return <Error>An error occurred while fetching cars.</Error>;
	if (cars.length === 0) return <Error>No cars available.</Error>;

	return (
		<div className="min-h-screen w-full bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 p-8">
			<div className="flex flex-col gap-y-6 items-start">
				<div className="max-w-6xl w-full mx-auto">
					<SortDropdown />
				</div>

				<CarList cars={cars} />
				{cars.length > 0 && <CarLocatorMap cars={cars} />}
			</div>
		</div>
	);
};

export default CarPage;
