import { request } from '../utils/request';

export const removePostAsync = (id) => () => request(`/post/${id}`, 'DELETE');
