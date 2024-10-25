async function fetchProducts() {
    try {
      // after this line, our function will wait for the `fetch()` call to be settled
      // the `fetch()` call will either return a Response or throw an error
      const response = await fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
      );
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      // after this line, our function will wait for the `response.json()` call to be settled
      // the `response.json()` call will either return the parsed JSON object or throw an error
      const data = await response.json();
      console.log(data[0].name);
    } catch (error) {
      console.error(`Could not get products: ${error}`);
    }
  }
  
  fetchProducts();
  // це то саме але написанне через проміси а зверху через асунс аваіт
  // const fetchPromise = fetch(
  //   "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
  // );
  
  // fetchPromise
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw new Error(`HTTP error: ${response.status}`);
  //     }
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log(data[0].name);
  //   })
  //   .catch((error) => {
  //     console.error(`Could not get products: ${error}`);
  //   });

  // Note though that async functions always return a promise
  async function fetchProducts2() {
    try {
      const response = await fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
      );
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Could not get products: ${error}`);
    }
  }
  
  const promise = fetchProducts2();
  promise.then((data) => console.log(data[0].name));
  // Also, note that you can only use await inside an async function

  try {
    // using await outside an async function is only allowed in a module
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    console.log(data[0].name);
  } catch (error) {
    console.error(`Could not get products: ${error}`);
  }
  