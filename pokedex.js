const colors = {
	fire: '#EE8130',
	grass: '#7AC74C',
	electric: '#F7D02C',
	water: '#6390F0',
	ground: '#E2BF65',
	rock: '#B6A136',
	fairy: '#D685AD',
	poison: '#A33EA1',
	bug: '#A6B91A',
	dragon: '#6F35FC',
	psychic: '#F95587',
	flying: '#A98FF3',
	fighting: '#C22E28',
	normal: '#A8A77A',
	ice: '#96D9D6',
	dark: '#705746',
	steel:  '#B7B7CE',
	ghost:  '#735797'
};

const main_types = Object.keys(colors);

// !Pokemon ID + Antalt
const fetchPokemons = async () => {
	for (let i = 0; i <= 2; i++) {
		const random = Math.floor(Math.random() * (1 - 999 + 1)) + 999;
		await getPokemon(random);
	}
};

// !Tar infot
const getPokemon = async id => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const pokemon = await res.json();
	createPokemonCard(pokemon);
};


// !visar Info
function createPokemonCard(pokemon) {
	console.log(pokemon);
	const pokemonEl = document.createElement('div');
	pokemonEl.classList.add('pokemon');

	const poke_types = pokemon.types.map(type => type.type.name);
	const type = main_types.find(type => poke_types.indexOf(type) > -1);
	const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
	const color = colors[type];
	const img = pokemon.sprites.front_default;
	
	pokemonEl.style.backgroundColor = color;

	// !Skapar html
	const pokeInnerHTML = 
		`<div class="img-container">
            <img src="${img}" alt="${name}"/>
        </div>
        <div class="info">
            <span class="number">#${pokemon.id.toString().padStart(3, ' ')}</span>
            <h3 class="name">${name}</h3>
            <p class="type">Type:<span>${type}</span></p>
        </div>`;

	pokemonEl.innerHTML = pokeInnerHTML;
	document.getElementById('pokemon-container').appendChild(pokemonEl);
}

fetchPokemons();