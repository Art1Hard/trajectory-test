import type { ICar } from "@src/types/cars";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const CarLocatorMap = ({ cars }: { cars: ICar[] }) => {
	return (
		<MapContainer
			className="h-[500px] w-full"
			center={[58.226283, 34.120969]}
			zoom={6}
			scrollWheelZoom={false}>
			<TileLayer
				attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a>, &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
				url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}.png"
			/>
			{cars.map((car) => (
				<Marker key={car.id} position={[car.latitude, car.longitude]}>
					<Popup>
						<h2 className="w-full flex justify-center font-bold text-small">
							{car.name}
						</h2>
					</Popup>
				</Marker>
			))}
		</MapContainer>
	);
};

export default CarLocatorMap;
