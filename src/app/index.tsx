import { Toaster } from "sonner";
import "@app/styles/index.css";
import CarPage from "@src/pages/CarPage";

function App() {
	return (
		<>
			<Toaster richColors position="bottom-center" theme="dark" />
			<CarPage />
		</>
	);
}

export default App;
