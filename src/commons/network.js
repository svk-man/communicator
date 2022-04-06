const API = {
  PICTOGRAMS_LIST_KEY: 'https://api.arasaac.org/api/pictograms/ru/search/',
  IMAGE_KEY: 'https://api.arasaac.org/api/pictograms/',
  IMAGE_KEY_PARAMETERS: '?download=false'
}

async function request(url) {
  try {
    const response = await fetch(new URL(url));
    const json = await response.json();

    return json
  } catch(error) {
    throw new Error('Failed to connect').message
  }
};

async function requestCardData(searchText) {
  try {
    const data = await request(`${ API.PICTOGRAMS_LIST_KEY }${ searchText }`);
    const isNotValidRequest = !Array.isArray(data);

    if (isNotValidRequest) return [];

    const convertedData = data.map(cardItem => {
      return {
        id: cardItem?._id,
        name: cardItem?.keywords[0].keyword,
        image: `${ API.IMAGE_KEY }${ cardItem?._id }${ API.IMAGE_KEY_PARAMETERS }`,
      }
    });

    return convertedData
  } catch(error) {
    throw error.message
  }
}

export { API, request, requestCardData }