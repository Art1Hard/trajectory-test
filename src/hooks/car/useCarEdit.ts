import { useCarStore } from "@src/app/store/car";
import { editCarSchema } from "@src/models/editCarShema";
import type { CarFormData } from "@src/types/cars";
import React, { useState } from "react";
import { toast } from "sonner";
import z from "zod";

const initialFormState = {
	name: "",
	price: 0,
};

const useCarEdit = (id: number, props: CarFormData, closeModal: () => void) => {
	const { editCar } = useCarStore();
	const [carFormData, setCarFormData] = useState<Partial<CarFormData>>({});
	const [showErrors, setShowErrors] = useState(false);

	const formData = {
		...initialFormState,
		...props,
		...carFormData,
	};

	const validate = () => {
		const result = editCarSchema.safeParse(formData);

		if (result.success) return undefined;

		return z.treeifyError(result.error);
	};

	const reset = () => setCarFormData({});

	const isDirty = Object.entries(carFormData).some(
		([key, value]) => props[key as never] !== value
	);

	const confirmCloseModal = () => {
		if (isDirty) {
			const result = confirm(
				"You have unsaved changes. Are you sure you want to close?"
			);
			if (result) {
				reset();
				closeModal();
			}
			return;
		}

		reset();
		closeModal();
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const errors = validate();

		if (errors) {
			setShowErrors(true);
			return;
		}

		editCar(id, formData);
		toast.success("Car was successfully updated!");
		closeModal();
		reset();
	};

	const errors = showErrors ? validate() : undefined;

	return {
		handleSubmit,
		formData,
		setCarFormData,
		isDirty,
		errors,
		confirmCloseModal,
	};
};

export default useCarEdit;
