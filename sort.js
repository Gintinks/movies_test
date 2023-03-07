const array_mov = [
    {
        "movie_id": 1,
        "picture": "plane.jpg",
        "title": "Plane",
        "rating": 76,
        "releasedate": "Feb 01, 2021"
    },
    {
        "movie_id": 2,
        "picture": "theboys.jpg",
        "title": "The Boys",
        "rating": 62,
        "releasedate": "Feb 01, 2021"
    },
    {
        "movie_id": 3,
        "picture": "tlor.jpg",
        "title": "The Lord of the Rings: The Return of the King",
        "rating": 89,
        "releasedate": "Feb 01, 2021"
    },
    {
        "movie_id": 4,
        "picture": "godfather.jpg",
        "title": "The Godfather",
        "rating": 99,
        "releasedate": "Feb 01, 2021"
    },
    {
        "movie_id": 5,
        "picture": "bandit.jpg",
        "title": "Bandit",
        "rating": 69,
        "releasedate": "Feb 01, 2021"
    },
    {
        "movie_id": 6,
        "picture": "megan.jpg",
        "title": "Megan",
        "rating": 50,
        "releasedate": "Feb 01, 2021"
    },
    {
        "movie_id": 7,
        "picture": "aot.jpg",
        "title": "Attack on Titan",
        "rating": 93,
        "releasedate": "Mar 01, 2013"
    },
    {
        "movie_id": 8,
        "picture": "pupl.jpg",
        "title": "Pulp fiction",
        "rating": 85,
        "releasedate": "Feb 01, 2021"
    },
    {
        "movie_id": 9,
        "picture": "mandalorian.jpg",
        "title": "The Mandalorian",
        "rating": 78,
        "releasedate": "Feb 01, 2021"
    },
    {
        "movie_id": 10,
        "picture": "tlou.jpg",
        "title": "The Last of Us",
        "rating": 87,
        "releasedate": "Feb 01, 2021"
    },

];
let data = [];

const sortMovies = (movies, sortDirection) => {
    const sortedMovies = movies.sort((a, b) => {
        const compareValue = parseFloat(sortDirection === "asc" ? a.rating - b.rating : b.rating - a.rating)
        return compareValue;
    })

    return sortedMovies;
}

const handleSortASC = (num) => {
    document.getElementById("card-columns").innerHTML = "";
    const container = document.getElementById('card-columns');
    if (num === "1") {
        data = sortMovies(array_mov, 'asc');
    } else {
        data = sortMovies(array_mov, 'des');
    }
    data.forEach((result) => {
        // Create card element
        const card = document.createElement('div');
        card.classList = 'card-body';

        const content = `
          <div class="card">
            <div id="collapse-${result.movie_id}" class="collapse show" aria-labelledby="heading-${result.movie_id}" data-parent="#card-columns">
                <div class="card-body">
                <img  src="img/${result.picture}" alt="" srcset="">
                <div class="card-desc">
                    <p style="font-size: 1.0rem;font-weight: bold;">${result.title}</p>
                    <p style="font-size: 1.0rem; color: gray;">${result.releasedate}</p>
                </div>
                </div>
            </div>
            <div class="dot">
            <p style="color: white; display: flex; align-items:center;
            justify-content:center;">
            ${result.rating}
            </p>
            </div>
        </div>
            `;

        // <p>${result.rating}</p>
        container.innerHTML += content;
    })
}


handleSortASC("1")
