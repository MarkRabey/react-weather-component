import {useEffect, useState} from 'react';
import {getCoordinates} from '../api';
import {Coordinates} from '../models/Coordinates';

export const useCoordinates = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);

  const fetchCoordinates = async () => {
    setIsLoading(true);
    const coords = await getCoordinates();
    setCoordinates(coords);
    setIsLoading(false);
  };

  useEffect(() => {
    if (!coordinates) {
      fetchCoordinates();
    }
  }, [coordinates]);

  return {coordinates, isLoading};
};
