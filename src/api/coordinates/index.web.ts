import {Coordinates} from '../../models/Coordinates';

export const getCoordinates = () => {
  return new Promise<Coordinates>((resolve, reject) => {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(
        ({coords: {latitude, longitude}}) => {
          resolve({latitude, longitude});
        },
        error => {
          console.log(error);
          reject(error);
        },
      );
    } else {
      resolve({
        latitude: 44.7834,
        longitude: -79.9164,
      });
    }
  });
};
