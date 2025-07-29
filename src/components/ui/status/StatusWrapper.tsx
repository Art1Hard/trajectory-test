import { type HtmlHTMLAttributes } from "react";

const StatusWrapper = ({
	children,
	...props
}: HtmlHTMLAttributes<HTMLDivElement>) => {
	return (
		<div
			className="w-full bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 flex justify-center items-center min-h-screen"
			{...props}>
			{children}
		</div>
	);
};

export default StatusWrapper;
