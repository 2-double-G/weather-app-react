import { ADD_CITY } from '../constants';
// import { load } from 'redux-localstorage-simple';

const CITIES = [
    {
        id: 1,
        city: 'London',
        country: 'UK',
    },
    {
        id: 2,
        city: 'New York',
        country: 'US',
    },
];

// let CITIES = load({ namespace: 'todo-app' })

// if (!CITIES || !CITIES.tasks || !CITIES.tasks.length) {
//     CITIES = {
//         tasks: []
//     }
// }

const tasks = (state = CITIES, { type, id, city, country}) => {
    switch (type) {
        case ADD_CITY:
            return [
                ...state, {
                    id,
                    city,
                    country,
                }
            ];
        default:
            return state;
    }
}

export default tasks;