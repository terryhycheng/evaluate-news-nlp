const getAPIKey = async () => {
  try {
    const res = await fetch("http://localhost:8000/apikey");
    const apiKey = await res.json();
    return apiKey;
  } catch (error) {
    console.log(error);
  }
};

export { getAPIKey };
