const FormData = require("form-data");
const { createRequestoption } = require("../createOption");

it("Checking createRequestoption() Functionality", async () => {
  const text = "This is a test.";
  const key = "APIKEY";
  const formdata = new FormData();

  const result = createRequestoption(text, key, formdata);

  expect(result).toBeTruthy();
});
