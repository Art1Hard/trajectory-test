import useCarEdit from "@src/hooks/car/useCarEdit";
import type { CarFormData } from "@src/types/cars";
import Modal from "../ui/Modal";
import { CarInput, CarSubmitButton } from "./form";

interface CarEditProps extends CarFormData {
	id: number;
	isModalOpen: boolean;
	closeModal: () => void;
}

const CarEdit = ({
	id,
	name,
	price,
	isModalOpen,
	closeModal,
}: CarEditProps) => {
	const {
		handleSubmit,
		formData,
		setCarFormData,
		isDirty,
		errors,
		confirmCloseModal,
	} = useCarEdit(
		id,
		{
			name,
			price,
		} as CarFormData,
		closeModal
	);

	return (
		<Modal
			title={`Edit car «${name}»`}
			open={isModalOpen}
			onClose={confirmCloseModal}>
			<form className="space-y-6 text-white" onSubmit={handleSubmit}>
				<CarInput
					title="Name"
					placeholder="Enter car name"
					id={name}
					type="text"
					errorMessage={errors?.properties?.name?.errors.join(", ")}
					value={formData.name}
					onChange={(e) => {
						setCarFormData((prev) => ({
							...prev,
							name: e.target.value,
						}));
					}}
				/>

				<CarInput
					title="Price"
					placeholder="Enter car price"
					id={price.toString()}
					type="number"
					errorMessage={errors?.properties?.price?.errors.join(", ")}
					value={formData.price}
					onChange={(e) => {
						setCarFormData((prev) => ({
							...prev,
							price: e.target.value ? parseInt(e.target.value) : 0,
						}));
					}}
				/>

				<CarSubmitButton disabled={!isDirty || !!errors}>Save</CarSubmitButton>
			</form>
		</Modal>
	);
};

export default CarEdit;
