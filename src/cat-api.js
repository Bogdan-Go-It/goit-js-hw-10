// import axios from 'axios';

// axios.defaults.headers.common['x-api-key'] =
//   'live_mXjm47POW8Phdo9Nhd7mxlPc4qUZox4wMRdvld3sJAmBTwyePEUIGcVkHSJiXbpl';
// axios.defaults.baseURL = 'https://api.thecatapi.com/v1/breeds';

// function fetchBreeds() {
//   return axios.get().then(response => {
//     console.log(response);

//     if (response.status !== 200) {
//       throw new Error('You are dead');
//     }
//     return response.data;
//   });
// }

// export { fetchBreeds, fetchCatByBreed };

// import axios from 'axios';
// axios.defaults.headers.common['x-api-key'] =
//   'live_mXjm47POW8Phdo9Nhd7mxlPc4qUZox4wMRdvld3sJAmBTwyePEUIGcVkHSJiXbpl';

// function fetchBreeds() {
//   return axios.get(`https://api.thecatapi.com/v1/breeds`);
// }

// function fetchCatByBreed(breedId) {
//   return axios.get(
//     `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
//   );
// }
// export { fetchBreeds, fetchCatByBreed };
