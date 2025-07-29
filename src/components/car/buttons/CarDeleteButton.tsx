import type { ButtonHTMLAttributes } from "react";
import cn from "clsx";

const CarDeleteButton = ({
	className,
	...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<button
			type="button"
			aria-label="Delete"
			className={cn(
				"absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full border border-yellow-400 text-yellow-400 bg-transparent hover:bg-yellow-400 hover:text-gray-900 transition-colors shadow-sm",
				className
			)}
			{...props}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				strokeWidth={2}>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</button>
	);
};

export default CarDeleteButton;
