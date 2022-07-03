import { add } from "../sum";

test("Add up two numbers", () => {
  expect(add(1, 2)).toBe(3);
});
