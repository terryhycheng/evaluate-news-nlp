import { getAPIKey } from "./js/fetchKey";
import { fetchMeaningCloud } from "./js/fetchData";
import { updateUI } from "./js/updateUI";
import { createRequestoption } from "./js/createOption";
import { submit_handler } from "./js/submitHandler";

//import styles from scss and helper functions
import "./styles/main.scss";

export {
  fetchMeaningCloud,
  updateUI,
  createRequestoption,
  getAPIKey,
  submit_handler,
};
