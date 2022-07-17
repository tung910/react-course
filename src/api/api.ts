/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-mixed-spaces-and-tabs */
import axios from 'axios';
export const baseUrl: string | undefined = 'http://localhost:3001';
export const instance = axios.create({
	baseURL: baseUrl,
	headers: {
		'Content-type': 'application/json',
	},
});
export const setStatusFetchProduct = (data: {
	id: number | undefined | string;
	status: boolean;
}) => {
	return instance.patch('/products/' + data.id, data);
};
export const getProducts = () => {
	return instance.get('/products');
};