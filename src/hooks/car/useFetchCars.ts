import { useCarStore } from "@src/app/store/car";
import type { ICar } from "@src/types/cars";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";

const fetchCars = async () => {
	try {
		const result = await axios.get<ICar[]>(
			"https://ofc-test-01.tspb.su/test-task/vehicles"
		);

		return result.data;
	} catch (error: unknown) {
		console.error("Failed to fetch cars:", error);
		throw error;
	}
};

const useFetchCars = () => {
	const { setCars } = useCarStore();

	const { data, isLoading, isError } = useQuery({
		queryKey: ["cars"],
		queryFn: fetchCars,
	});

	useEffect(() => {
		if (!data) return;
		setCars(data);
	}, [data, setCars]);

	return { isLoading, isError };
};

export default useFetchCars;
