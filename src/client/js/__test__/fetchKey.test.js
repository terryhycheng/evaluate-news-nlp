import { getAPIKey } from "../fetchKey";
const dotenv = require("dotenv");
dotenv.config();

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(process.env.API_KEY),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

it("Checking getAPIKey() Functionality", async () => {
  const key = await getAPIKey();

  expect(key).toEqual(process.env.API_KEY);
  expect(fetch).toHaveBeenCalledTimes(1);
});
