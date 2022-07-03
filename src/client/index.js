//import styles from scss and helper functions
import "./styles/main.scss";

/* Element Selection */

//Form
const submitbtn = document.querySelector("#submitbtn");
const content = document.querySelector("#content");
const warning = document.querySelector("#warning");

//Result Sections
const resultHolder = document.querySelector("#result-holder");
const noEntry = document.querySelector("#noEntry");

//Result Containers
const loading = document.querySelector("#loading");
const polarity = document.querySelector("#polarity");
const subjectivity = document.querySelector("#subjectivity");
const irony = document.querySelector("#irony");
const concepts = document.querySelector("#concepts");
const snippet = document.querySelector("#snippet");

const getAPIKey = async () => {
  const res = await fetch(" http://localhost:8000/apikey");
  const apiKey = await res.json();
  return apiKey;
};

const createRequestoption = (text, apiKey) => {
  const formdata = new FormData();
  formdata.append("txt", text);
  formdata.append("lang", "auto");
  formdata.append("key", apiKey);
  return { method: "POST", body: formdata, redirect: "follow" };
};

const fetchMeaningCloud = async (text) => {
  try {
    const res = await fetch(
      "https://api.meaningcloud.com/sentiment-2.1",
      await createRequestoption(text, (await getAPIKey()).apiKey)
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const updateUI = (data) => {
  polarity.innerHTML = data.agreement.toLowerCase();
  subjectivity.innerHTML = data.subjectivity.toLowerCase();
  irony.innerHTML = data.irony.toLowerCase();
  concepts.innerHTML = "";
  for (let concept of data.sentimented_concept_list) {
    let p = document.createElement("p");
    p.innerText = concept.form;
    concepts.append(p);
  }
  snippet.innerHTML = "";
  for (let sentence of data.sentence_list) {
    let p = document.createElement("p");
    p.innerText = `"${sentence.text}"`;
    snippet.append(p);
  }
};

/* --------------------------------------------- */
/* Event Handlers */

const submit_handler = async () => {
  if (content.value) {
    resultHolder.classList.add("hide");
    warning.classList.add("hide");
    noEntry.classList.add("hide");
    loading.classList.remove("hide");
    const data = await fetchMeaningCloud(content.value);
    loading.classList.add("hide");
    updateUI(data);
    resultHolder.classList.remove("hide");
    content.value = "";
  } else {
    warning.classList.remove("hide");
  }
};

/* --------------------------------------------- */
/* Listener */

submitbtn.addEventListener("click", submit_handler);
