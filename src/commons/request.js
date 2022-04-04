function request(url) {
  return new Promise((resolve, reject) => {
    fetch(new URL(url))
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(() => {
        reject(new Error('Failed to connect').message)
      });
  });
};

export { request }