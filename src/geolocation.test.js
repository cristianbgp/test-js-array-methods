import geolocation from "./geolocation";

test("Test of geolocation", async () => {
  const data = await geolocation();
  console.log(data);
  expect(data).toEqual(expect.any(Array));
});
