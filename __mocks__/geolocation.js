const mockGeolocation = {
  getCurrentPosition: jest.fn().mockImplementationOnce(success =>
    Promise.resolve(
      success({
        coords: {
          latitude: -12,
          longitude: 77
        }
      })
    )
  )
};
global.navigator.geolocation = mockGeolocation;
