import CarItem from "@components/car/CarItem";
import type { ICar } from "@src/types/cars";

const CarList = ({ cars }: { cars: ICar[] }) => {
	return (
		<div className="max-w-6xl w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
			{cars.map((car, index) => (
				<CarItem key={index} {...car} />
			))}
		</div>
	);
};

export default CarList;
