import geolocation from "./geolocation";
import mock from "../__mocks__/geolocation";

test("Test of geolocation", async () => {
  const data = await geolocation();
  console.log(data);
  expect(data).toEqual(expect.any(Array));
});
