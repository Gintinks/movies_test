const array_mov = [
    {
        "movie_id": 1,
        "picture": "plane.jpg",
        "title": "Plane",
        "rating": 76,
        "releasedate": "1971-08-01T00:00:00+00:00"
    },
    {
        "movie_id": 2,
        "picture": "theboys.jpg",
        "title": "The Boys",
        "rating": 62,
        "releasedate": "1971-08-01T00:00:00+00:00"
    },
    {
        "movie_id": 3,
        "picture": "tlor.jpg",
        "title": "The Lord of the Rings: The Return of the King",
        "rating": 89,
        "releasedate": "1971-08-01T00:00:00+00:00"
    },
    {
        "movie_id": 4,
        "picture": "godfather.jpg",
        "title": "The Godfather",
        "rating": 41,
        "releasedate": "1971-08-01T00:00:00+00:00"
    },
    {
        "movie_id": 5,
        "picture": "bandit.jpg",
        "title": "Bandit",
        "rating": 69,
        "releasedate": "1971-08-01T00:00:00+00:00"
    },
    {
        "movie_id": 6,
        "picture": "megan.jpg",
        "title": "Megan",
        "rating": 50,
        "releasedate": "1971-08-01T00:00:00+00:00"
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

const handleSortASC = () => {
    document.getElementById("accordion").innerHTML = "";
    const container = document.getElementById('accordion');
    data = sortMovies(array_mov, 'asc');
    data.forEach((result) => {
        // Create card element
        const card = document.createElement('div');
        card.classList = 'card-body';

        // <h5 class="mb-0">
        //     <button class="btn btn-link" data-toggle="collapse" data-target="#collapse-${result.movie_id}" aria-expanded="true" aria-controls="collapse-${result.movie_id}">

        //     </button>
        // </h5>
        // Construct card content
        const content = `
          <div class="card">
            <div class="card-header" id="heading-${result.movie_id}">
                ....
            </div>
        
            <div id="collapse-${result.movie_id}" class="collapse show" aria-labelledby="heading-${result.movie_id}" data-parent="#accordion">
                <div class="card-body">
                <img style="width: 150px;" src=${result.picture} alt="" srcset="">
                <h5>${result.title}</h5>
                <p>${result.releasedate}</p>
                <p>${result.rating}</p>
                </div>
            </div>
          </div>
        `;

        // Append newyly created card element to the container
        container.innerHTML += content;
    })
}
const handleSortDES = () => {
    document.getElementById("accordion").innerHTML = "";
    const container = document.getElementById('accordion');
    data = sortMovies(array_mov, 'des');
    data.forEach((result) => {
        // Create card element
        const card = document.createElement('div');
        card.classList = 'card-body';


        const content = `
          <div class="card">
            <div class="card-header" id="heading-${result.movie_id}">
                ....
            </div>
        
            <div id="collapse-${result.movie_id}" class="collapse show" aria-labelledby="heading-${result.movie_id}" data-parent="#accordion">
                <div class="card-body">
                <img style="width: 150px;" src=${result.picture} alt="" srcset="">
                <h5>${result.title}</h5>
                <p>${result.releasedate}</p>
                <p>${result.rating}</p>
                </div>
            </div>
          </div>
        `;

        // Append newyly created card element to the container
        container.innerHTML += content;
    })
}

handleSortASC()
