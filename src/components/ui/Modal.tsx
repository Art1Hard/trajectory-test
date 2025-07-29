import { X } from "lucide-react";
import { type ReactNode } from "react";

interface ModalProps {
	title?: string;
	children: ReactNode;
	open?: boolean;
	onClose: () => void;
}

const Modal = ({ title, children, open = false, onClose }: ModalProps) => {
	return (
		open && (
			<div
				className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/70 backdrop-blur-sm cursor-pointer"
				onClick={(e) => {
					if (e.target !== e.currentTarget) return;
					onClose();
				}}>
				<div className="relative w-full max-w-md bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl shadow-2xl p-6 text-white cursor-auto">
					<button
						onClick={onClose}
						className="absolute top-3 right-3 text-gray-400 hover:text-red-400 transition-colors">
						<X className="w-5 h-5" />
					</button>

					{title && (
						<h3 className="text-xl font-semibold text-yellow-400 mb-4">
							{title}
						</h3>
					)}

					<div className="text-sm text-gray-300">{children}</div>
				</div>
			</div>
		)
	);
};

export default Modal;
