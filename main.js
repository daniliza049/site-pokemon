import './style.css'
async function localizarPokemon(name){
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    let pokemon = await response.json()
    console.log(pokemon)
    criarCard(pokemon)
}

let inputPesquisa = document.querySelector('.busca-in')
let botPesquisa = document.querySelector('.busca-bu')
botPesquisa.addEventListener('click',function () {
    localizarPokemon(inputPesquisa.value)
})



function criarCard(pokemon){
    let card = document.createElement('article')
    card.className= `card slide-in-blurred-top`
    card.innerHTML = `
    <div class="pe">
      <div class="poquemon ${pokemon.types[0].type.name}">
        
        <h3>#${pokemon.id}</h3>
        <div class="l">
        <div class="im"><img src=${pokemon.sprites.versions['generation-v']['black-white'].animated.front_default} alt="imagem" class="i"></div>
          <h2>${pokemon.name}</h2>
          <div class="ti">
          ${pokemon.types.map((type)=>{
            return `<img class="tipo" src="./img/${type.type.name}.png" />`
         })}
          </div>
          </div>
        </div>
    </div>
    `
    let selectionCards = document.querySelector('.li')
    selectionCards.appendChild(card)
}
