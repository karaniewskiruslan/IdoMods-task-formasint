const getPagePhoto = async (page, size) => {
  const url = `https://brandstestowy.smallhost.pl/api/random?pageNumber=${page}&pageSize=${size}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();

    return data.data;
  } catch (e) {
    return console.error(`Warning! Cannot get API data. Reason: , ${e}`);
  }
};

export default getPagePhoto;
