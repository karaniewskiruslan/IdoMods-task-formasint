const getAPI = async () => {
  const url = "https://brandstestowy.smallhost.pl/api/random";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (e) {
    return console.error(`Warning! Cannot get API data. Reason: , ${e}`);
  }
};

console.log(getAPI());
