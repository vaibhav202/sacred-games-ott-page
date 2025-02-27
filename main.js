const data = "./data.json"

fetch(data)
    .then(response => {
        if (response.ok === false) {
            throw new Error(`error code: ${response.status}`);

        }
        else {
            return response.json();
        }
    })
    .then(jsonData => {

        const seriesData = jsonData.series;

        seriesData.forEach(series => {

            const seriesDiv = document.querySelector("#series");

            seriesDiv.innerHTML = `
            <div class="series-info-container">
            <p class="platform">Available on <span>${series.ott}</span></p>
            <h1>${series.title}</h1>
            <p class="description">${series.desc}</p>
            <div class=buttons-container>
            <button><span class=material-symbols-outlined>play_arrow</span>Watch</button>
            <button><span class=material-symbols-outlined>playlist_add</span>My List</button>
            </div>
            </div>
            <picture class="series-img-container">
            <img src=${series.img} alt=${series.title}/>
            </picture>
            `;
        });

        const seasonsData = jsonData.seasons;

        seasonsData.forEach(season => {
            const seasonsDiv = document.querySelector("#seasons");
            const seasonTitle = document.createElement("p");
            seasonTitle.innerHTML = `${season.title}`;
            seasonsDiv.appendChild(seasonTitle);
        });

        const episodesData = jsonData.episodes;
        const episodesDiv = document.querySelector("#episodes");

        episodesData.forEach(episode => {
            const episodeCols = document.createElement("div");

            episodeCols.style.backgroundImage = `url('${episode.img}')`
            episodeCols.innerHTML = `
                <h2>${episode.title}</h2>
                <p>Episode ${episode.id}</p>
                <p class="episode-description">${episode.description}</p>
                <span class="hover-style material-symbols-outlined">play_circle</span>
            `;
            episodesDiv.appendChild(episodeCols);
        });

        const charactersData = jsonData.characters;
        const charactersDiv = document.querySelector("#characters");

        charactersData.forEach(character => {
            const characterList = document.createElement("div");

            characterList.innerHTML = `
                <picture>
                    <img src=${character.img} alt=${character.name} />
                </picture>
                <h3>${character.name}</h3>
                <p>Age shown ${character.age}y</p>
                <p>Acted as ${character.profession}</p>
            `;
            charactersDiv.appendChild(characterList);
        })

    })

const scrollContainer = document.querySelector("#episodes");
const leftScroll = document.querySelector("#left-scroll");
const rightScroll = document.querySelector("#right-scroll");

const scrollContainerWidth = 280;

leftScroll.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: -scrollContainerWidth});
});

rightScroll.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: scrollContainerWidth});
});