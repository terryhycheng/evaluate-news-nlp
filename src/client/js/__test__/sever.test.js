import { enableFetchMocks } from "jest-fetch-mock";
enableFetchMocks();

it("Testing if server is running", async () => {
  const res = await fetch("http://localhost:8000/apikey");
  expect(res).toBeTruthy();
});
