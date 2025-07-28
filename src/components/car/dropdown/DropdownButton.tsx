import type { ButtonHTMLAttributes } from "react";
import cn from "clsx";

const DropdownButton = ({
	className,
	children,
	...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<button
			className={cn(
				"block w-full px-4 py-2 text-left hover:bg-gray-700",
				className
			)}
			{...props}>
			{children}
		</button>
	);
};

export default DropdownButton;
