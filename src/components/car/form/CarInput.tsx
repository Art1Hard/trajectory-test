import type { InputHTMLAttributes } from "react";
import cn from "clsx";

interface CarInputButtonProps extends InputHTMLAttributes<HTMLInputElement> {
	title: string;
	errorMessage?: string;
	id: string;
}

const CarInput = ({
	title,
	errorMessage,
	id,
	...props
}: CarInputButtonProps) => {
	return (
		<div className="space-y-2">
			<label htmlFor={id} className="block text-sm text-gray-300">
				{title}
			</label>
			<input
				id={id}
				className={cn(
					"w-full rounded-md bg-gray-800 border border-gray-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400",
					errorMessage && "border-red-500"
				)}
				{...props}
			/>
			<p className="text-red-500">{errorMessage}</p>
		</div>
	);
};

export default CarInput;
