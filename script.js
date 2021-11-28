/*************
* List of movies
*/
let movies = [
    {
    	id: "tt0137523",
    	name: "Fight Club",
    	rank: 10
    },
    {
    	id: "tt1111161",
    	name: "The Shawshank Redemption",
    	rank: 1
    },
    {
    	id: "tt0137523",
    	name: "The Lord of the Rings: The Return of the king",
    	rank: 9
    },
    {
    	id: "tt0137523",
    	name: "The Godfather",
    	rank: 2
    },
    {
    	id: "tt0137523",
    	name: "The Good, the bad and the Ugly",
    	rank: 5
    },
    {
    	id: "tt0137523",
    	name: "The Godfather: Part 2",
    	rank: 3
    },
    {
    	id: "tt0137523",
    	name: "The Dark Knight",
    	rank: 6
    },
    {
    	id: "tt0137523",
    	name: "Pulp Fiction",
    	rank: 4
    },
    {
    	id: "tt0137523",
    	name: "Schindler's List",
    	rank: 8
    },
    {
    	id: "tt0132585",
    	name: "Crank",
    	rank: 8
    },
    {
    	id: "tt0137523",
    	name: "12 Angry Men",
    	rank: 7
    }
]

/*********************************
* Display list of movies in a table
*/
window.onload = function(){
	displayMovies(movies);
}

function displayMovies(movies){
    const tableHead = `
        <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Rank</th>
        </thead>
    `; 
    let tableBody = `<tbody>`;
    for (let i = 0; i < movies.length; i++){
    	tableBody += `<tr>
            <td>${movies[i].id}</td>
            <td>${movies[i].name}</td>
            <td class="rank__cell">${movies[i].rank}</td>
    	</tr>`;
    }
    // Closing the body of table
    tableBody += `</tbody>`;

    const moviesTable = `<table>${tableHead + tableBody}</table>`;
    const moviesListElement = document.querySelector('.movies__list');
    moviesListElement.innerHTML = moviesTable;
}

/***********
* Sort movies by Key
*/
function sortMoviesByKey(movies, key){
	for(let i = 0; i < movies.length-1; i++){
		for(let j = i; j < movies.length; j++){
		    if(movies[i][key] > movies[j][key]){
			    let temp = movies[i];
			    movies[i] = movies[j];
			    movies[j] = temp;
		    }
	    }
	}
	return movies;
}

const selectElement = document.querySelector('.sort__options');
 
selectElement.addEventListener('change', function(e){
 	const key = e.target.value;
 	const sortedMovies = sortMoviesByKey(movies, key);
	displayMovies(sortedMovies);
})


