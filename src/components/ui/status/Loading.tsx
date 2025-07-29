import type { HtmlHTMLAttributes } from "react";
import StatusWrapper from "./StatusWrapper";

const Loading = (props: HtmlHTMLAttributes<HTMLDivElement>) => {
	return (
		<StatusWrapper {...props}>
			<div className="w-10 h-10 border-[6px] border-yellow-400 border-t-transparent rounded-full animate-spin" />
		</StatusWrapper>
	);
};

export default Loading;
