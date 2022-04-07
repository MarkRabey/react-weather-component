import Geolocation from 'react-native-geolocation-service';
import {Coordinates} from '../../models/Coordinates';

export const getCoordinates = async (): Promise<Coordinates> => {
  console.log('getCorrdinates');
  const auth = await Geolocation.requestAuthorization('whenInUse');
  console.log({auth});

  return {
    latitude: 44.7834,
    longitude: -79.9164,
  };
};
