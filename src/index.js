import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

import { refs } from './refs';
import { fetchBreeds, fetchCatByBreed } from './cat-api';
import { createMarkup, createCatMarkup } from './create-btn';

refs.select.addEventListener('change', onChooseBreed);
refs.select.classList.add('hidden');
refs.error.classList.add('hidden');

fetchBreeds()
  .then(pokemonsData => {
    refs.select.classList.remove('hidden');
    refs.loader.classList.add('hidden');
    refs.error.classList.add('hidden');
    refs.select.insertAdjacentHTML('afterbegin', createMarkup(pokemonsData));
    slim();
    console.log(pokemonsData);
  })
  .catch(error => {
    refs.loader.classList.add('hidden');
    Notify.failure(`${refs.error.textContent}`);
  });

function onChooseBreed(um) {
  refs.loader.classList.remove('hidden');
  refs.catInfo.classList.add('hidden');
  refs.error.classList.add('hidden');
  const elId = um.target.value;

  fetchCatByBreed(elId)
    .then(obj => {
      refs.catInfo.innerHTML = createCatMarkup(obj.data[0]);
      refs.loader.classList.add('hidden');
      refs.catInfo.classList.remove('hidden');
    })
    .catch(error => {
      refs.loader.classList.add('hidden');
      Notify.failure(`${refs.error.textContent}`);
    });
}

function slim() {
  new SlimSelect({
    select: refs.select,
  });
}
