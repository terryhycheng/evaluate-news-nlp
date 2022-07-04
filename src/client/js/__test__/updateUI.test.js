/**
 * @jest-environment jsdom
 */

import { updateUI } from "../updateUI";

it("Checking if updateUI() can throw error when data is empty", () => {
  const data = {};
  expect(updateUI(data)).toBeFalsy();
});
