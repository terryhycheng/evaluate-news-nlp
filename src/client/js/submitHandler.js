const content = document.querySelector("#content");
const warning = document.querySelector("#warning");
const resultHolder = document.querySelector("#result-holder");
const noEntry = document.querySelector("#noEntry");
const loading = document.querySelector("#loading");

const submit_handler = async () => {
  if (content.value) {
    resultHolder.classList.add("hide");
    warning.classList.add("hide");
    noEntry.classList.add("hide");
    loading.classList.remove("hide");
    const data = await Client.fetchMeaningCloud(content.value);
    Client.updateUI(data);
    loading.classList.add("hide");
    resultHolder.classList.remove("hide");
    content.value = "";
  } else {
    warning.classList.remove("hide");
  }
};

export { submit_handler };
