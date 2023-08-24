// const refs = {
//   body: document.querySelector('body'),
//   select: document.getElementById('breed-select'),
// };

// function serviseWeather(id) {
//   const BASE_URL = 'https://api.thecatapi.com/v1/images/search';
//   const API_KEY =
//     'live_mXjm47POW8Phdo9Nhd7mxlPc4qUZox4wMRdvld3sJAmBTwyePEUIGcVkHSJiXbpl';

//   const params = new URLSearchParams({
//     API_KEY
//     breed_ids: id,
//   });
//   return fetch(`${BASE_URL}?${params}`).then(res => {
//     if (!res.ok) {
//       throw new Error(res.statusText);
//     }
//     return res.json();
//   });
// }

// serviseWeather('beng')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import SlimSelect from 'slim-select';
// import 'slim-select/dist/slimselect.css';

// import { fetchBreeds, fetchCatByBreed } from './cat-api';
// import { createMarkup, createCatMarkup } from './create-markup';
// import { refs } from './refs';

// refs.select.addEventListener('change', onChooseBreed);

// refs.select.classList.add('hidden');
// refs.error.classList.add('hidden');

// fetchBreeds()
//   .then(arr => {
//     refs.select.classList.remove('hidden');
//     refs.loader.classList.add('hidden');
//     refs.error.classList.add('hidden');
//     refs.select.innerHTML = createMarkup(arr.data);
//     slim();
//   })
//   .catch(error => {
//     refs.loader.classList.add('hidden');
//     Notify.failure(`${refs.error.textContent}`);
//   });

// function onChooseBreed(e) {
//   refs.loader.classList.remove('hidden');
//   refs.catInfo.classList.add('hidden');
//   refs.error.classList.add('hidden');
//   const elId = e.target.value;

//   fetchCatByBreed(elId)
//     .then(obj => {
//       refs.catInfo.innerHTML = createCatMarkup(obj.data[0]);
//       refs.loader.classList.add('hidden');
//       refs.catInfo.classList.remove('hidden');
//     })
//     .catch(error => {
//       refs.loader.classList.add('hidden');
//       Notify.failure(`${refs.error.textContent}`);
//     });
// }

// function slim() {
//   new SlimSelect({
//     select: refs.select,
//   });
// }
