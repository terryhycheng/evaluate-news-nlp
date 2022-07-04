const polarity = document.querySelector("#polarity");
const subjectivity = document.querySelector("#subjectivity");
const irony = document.querySelector("#irony");
const concepts = document.querySelector("#concepts");
const snippet = document.querySelector("#snippet");

const updateUI = (data) => {
  if (
    data.agreement &&
    data.subjectivity &&
    data.irony &&
    data.sentimented_concept_list &&
    data.sentence_list
  ) {
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
  } else {
    console.error("No input is found.");
  }
};

export { updateUI };
