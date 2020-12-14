import is from 'is_js';

export const storeCityName = city => {
  if (city === null) {
      console.log('City was null. Get city name from local storage');
      return localStorage.getItem('city');
  } else {
      console.log('City was not null. Set new city name in local storage');
      localStorage.setItem('city', city);
      return city;
  }
}

export const findPropertyValueByKey = (obj, searchItem) => {
  let result = null;

  for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
          if (key === searchItem) {
              result = obj[key];
              break;
          }
      }

      if (is.object(obj[key])) {
          let innerObj = findPropertyValueByKey(obj[key], searchItem);

          if (innerObj) {
              result = innerObj;
              break;
          }
      }
  }

  return result;
}

export const getWeatherObject = (data, keys) => {
  const newObj = {};

  keys.forEach(searchItem => {
      newObj[searchItem] = findPropertyValueByKey(data, searchItem);
  });

  return newObj;
}