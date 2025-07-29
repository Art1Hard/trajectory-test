import type { ButtonHTMLAttributes } from "react";
import cn from "clsx";

const CarSubmitButton = ({
	className,
	children,
	...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<button
			type="submit"
			className={cn(
				"w-full rounded-md bg-yellow-500 hover:bg-yellow-600 disabled:bg-yellow-700 disabled:hover:bg-yellow-700 text-black font-semibold py-2 transition-colors",
				className
			)}
			{...props}>
			{children}
		</button>
	);
};

export default CarSubmitButton;
