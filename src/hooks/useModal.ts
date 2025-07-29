import { useState } from "react";

const useModal = () => {
	const [isModalOpen, setIsOpen] = useState(false);

	const openModal = () => {
		document.body.style.overflow = "hidden";
		setIsOpen(true);
	};
	const closeModal = () => {
		document.body.style.overflow = "auto";
		setIsOpen(false);
	};

	return { isModalOpen, openModal, closeModal };
};

export default useModal;
