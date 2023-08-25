import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_5ADRDZ2n6YajaLtviwyd6IswvRZhBKeCXhaBk4rsoIHeYg4tbPEKXeztN0VQtGPB';

const baseUrl = 'https://api.thecatapi.com/';
const URL = `${baseUrl}v1/breeds`;

function fetchBreeds() {
  return axios.get(URL).then(response => {
    if (response.status !== 200) {
      throw new Error();
    }
    return response.data;
  });
}

function fetchCatByBreed(breedId) {
  return axios.get(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
  );
}
export { fetchBreeds, fetchCatByBreed };
