import axios from 'axios';

const refs = {
  search: document.querySelector('.search-input'),
  list: document.querySelector('.cards'),
};
axios.defaults.baseURL = 'https://api.themoviedb.org';

class ThemoviedbApi {
  #page = 1;
  #qvery = '';
  #totalPages = 0;
  #perpage = 20;
  #language = 'uk-UA';
  #params = {
    params: { key: '7770a554235a470dd8487676c4d97407' },
  };
  async getFilms() {
    const urlApi = `/3/trending/movie/day?api_key=7770a554235a470dd8487676c4d97407&language=${
      this.#language
    }&`;
    const { data } = await axios.get(urlApi, this.#params);
    console.log(data.results);
  }
}
const themoviedb = new ThemoviedbApi();

async function startFilm() {
  try {
    const { results, total_pages } = await themoviedb.getFilms();
    // console.log(results);
    // const markup = createMarkup();
  } catch (error) {
    console.log(error);
  }
}
startFilm();

function createMarkup(films) {
  return films
    .map(({ title, backdrop_path, release_date }) => {
      return /*html*/ `<div class="photo-card">
        <a class="photo-card__link" href="${largeImageURL}">
  <img class="photo-card__img" src="${webformatURL}" alt="${tags}" loading="lazy" /></a>
  <div class="info">
    <p class="info-item">
      <b>Likes ${likes}</b>
    </p>
    <p class="info-item">
      <b>Views ${views}</b>
    </p>
    <p class="info-item">
      <b>Comments ${comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads ${downloads}</b>
    </p>
  </div>
</div>`;
    })
    .join('');
}

// ??????????????????????????
import iryna from '../../images/teams/iryna-bodnaryuk.jpg';
import TeamLead from '../../images/teams/iryna-bodnaryuk.jpg';
import yuriy from '../../images/teams/yuriy_kulinichenko.jpg';
// import aleksandr from '../../images/teams/aleksandr-kurzhiy.JPEG';
import andrey from '../../images/teams/andrey-dymov.jpg';

export const teamItems = [
  {
    img: TeamLead,
    name: 'TeamLead',
    role: 'Team Lead',
    git: 'https://github.com/Irka-Bodnariuk',
  },
  {
    img: iryna,
    name: 'iryna',
    role: 'Scrum Master',
    git: 'https://github.com/Irka-Bodnariuk',
  },
  {
    img: yuriy,
    name: 'yuriy',
    role: 'Developer',
    git: 'https://github.com/Irka-Bodnariuk',
  },
  //   {
  //     img: aleksandr,
  //     name: 'aleksandr',
  //     role: 'Developer',
  //     git: 'https://github.com/Irka-Bodnariuk',
  //   },
  {
    img: andrey,
    name: 'andrey',
    role: 'Developer',
    git: 'https://github.com/Irka-Bodnariuk',
  },
];
