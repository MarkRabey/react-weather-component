import {Coordinates} from '../../models/Coordinates';

export const getCoordinates = () => {
  return new Promise<Coordinates>((resolve, reject) => {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(
        ({coords}) => {
          if (coords) {
            const {latitude, longitude} = coords;
            resolve({latitude, longitude});
          } else {
            reject('error');
          }
        },
        error => {
          console.log(error);
          reject(error.message);
        },
      );
    } else {
      resolve({
        latitude: 0,
        longitude: 0,
      });
    }
  });
};
