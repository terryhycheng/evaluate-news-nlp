import { fetchMeaningCloud } from "../fetchData";
import { createRequestoption } from "../createOption";
const dotenv = require("dotenv");
const FormData = require("form-data");
dotenv.config();

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(process.env.API_KEY),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

it("Checking fetchMeaningCloud() Functionality", async () => {
  const text =
    "NLP (Natural Language Processing) is a subset of AI that provides computers ability to process or interact with natural human speech.";
  const key = process.env.API_KEY;
  const formdata = new FormData();

  const option = createRequestoption(text, key, formdata);
  const data = await fetchMeaningCloud(text, option);

  expect(data).toBeTruthy();
  expect(fetch).toHaveBeenCalledTimes(1);
});
