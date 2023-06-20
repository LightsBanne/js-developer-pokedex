const url = 'https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}'
const loadmorebutton = document.getElementById('loadmorebutton')
const pokemonList = document.getElementById('pokemonList')
let limit = 11;
let offset = 0;
const maxRecords = 151





function loadPokemonItems(offset, limit) {
    pokeApi.getPokemon(offset, limit).then((pokemons = []) => {
        const newHTML = pokemons.map((pokemon) => `
        <li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.numbr}</span>
       <span class="name">${pokemon.name}</span>
        

       
</ol>

    <div class="detail">
       <ol class="types">
           ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
       </ol>
        </div>
 <img class="imgPoke"src="${pokemon.photo}"
       alt="${pokemon.name}">

       <div class='botao'>
<div class="myDIV"><span>Abilities</span></div>
<div class='ulzasso'>
<ul class="abilities">
  ${pokemon.abilities.map((ability) =>
    `<li class="ability">${ability}</li>`
  ).join('')}
</ul>
</div>
</div>

       
    `).join('')

        pokemonList.innerHTML += newHTML
    })
}

loadPokemonItems(offset, limit)

loadmorebutton.addEventListener('click', () => {
    offset += limit

    const qtdRecordNextPage = offset + limit

    if (qtdRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItems(offset, newLimit)

        loadmorebutton.remove();

    } else {
        loadPokemonItems(offset, limit)
    }
})

