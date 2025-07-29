import type { HtmlHTMLAttributes } from "react";
import StatusWrapper from "./StatusWrapper";

const Error = ({ children, ...props }: HtmlHTMLAttributes<HTMLDivElement>) => {
	return (
		<StatusWrapper {...props}>
			<p className="text-white text-base">{children}</p>
		</StatusWrapper>
	);
};

export default Error;
