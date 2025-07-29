import { Pencil } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";
import cn from "clsx";

const CarEditButton = ({
	className,
	...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<button
			type="button"
			className={cn(
				"flex items-center justify-center gap-2 w-full bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 font-semibold py-2 px-4 rounded-xl hover:from-yellow-600 hover:to-yellow-500 transition",
				className
			)}
			{...props}>
			<Pencil className="h-4 w-4" />
			<span>Edit</span>
		</button>
	);
};

export default CarEditButton;
