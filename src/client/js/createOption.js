const createRequestoption = (text, apiKey, formdata = new FormData()) => {
  formdata.append("txt", text);
  formdata.append("lang", "auto");
  formdata.append("key", apiKey);
  return { method: "POST", body: formdata, redirect: "follow" };
};

export { createRequestoption };
