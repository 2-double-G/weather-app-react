import { API_KEY, FETCH_WEATHER } from '../constants';

export const fetchWeather = (city) => {
    return function(dispatch) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then(responce => {
            return responce.json();
        }) 
        .then(responce => {
            dispatch({ 
                type: FETCH_WEATHER, 
                payload: responce,
            });
        })
        .catch(error => {
            console.log(error);
            console.log("Mm...error");
        });
    }
}