export interface ProductType {
	id: number;
	categoryId: number | string;
	name: string;
	originalPrice: number;
	saleOffPrice: number;
	feature: string;
	description: string;
	desc_short: string;
	status: boolean;
	img: string;
	quantity?: number;
}
