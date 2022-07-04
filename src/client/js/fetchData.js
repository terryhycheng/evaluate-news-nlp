const fetchMeaningCloud = async (text, option) => {
  try {
    const res = await fetch(
      "https://api.meaningcloud.com/sentiment-2.1",
      option ||
        (await Client.createRequestoption(
          text,
          (
            await Client.getAPIKey()
          ).apiKey
        ))
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { fetchMeaningCloud };
