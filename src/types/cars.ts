export interface ICar {
	id: number;
	name: string;
	model: string;
	year: number;
	color: string;
	price: number;
	latitude: number;
	longitude: number;
	[key: string]: string | number;
}

export type CarFormData = {
	name: string;
	price: number;
};

export type CarSortButton = {
	title: string;
	value: string;
};
