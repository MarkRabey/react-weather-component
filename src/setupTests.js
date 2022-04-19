const mockGeolocation = {
  getCurrentPosition: jest.fn().mockImplementation(success => {
    Promise.resolve(
      success({
        coords: {
          latitude: 10,
          longitude: 10,
        },
      }),
    );
  }),
};
global.navigator.geolocation = mockGeolocation;
