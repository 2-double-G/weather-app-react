import { ADD_CITY } from '../constants';

export const addCity = (id, city, country) => ({
    type: ADD_CITY,
    id,
    city,
    country,
});