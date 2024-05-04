const apiKey = "05eead7b72dd9f84a4f1c96f0f514349";
const apiUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&page=1`;
const apiImg = "https://image.tmdb.org/t/p/w1280";
const searchAPI = `https://api.themoviedb.org/3/search/movie?&api_key=${apiKey}&query=`;

const main = document.getElementById("main");
const form = document.getElementById("search-form");
const search = document.getElementById("search-input");
showMovies(apiUrl);

function showMovies(url) {
    fetch(url).then(res => res.json()).then(function(data) {
        console.log(data.results);
        data.results.forEach(element => {
            const el = document.createElement('div');
            const image = document.createElement('img');
            const text = document.createElement('h2');

            text.innerHTML = `${element.title}`;
            image.src = apiImg + element.poster_path;
            el.appendChild(image);
            el.appendChild(text);
            main.appendChild(el);
        });
    });
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    main.innerHTML = '';
    const searchValue = search.value;

    if (searchValue) {
        showMovies(searchAPI + searchValue);
        search.value = "";
    }
});
