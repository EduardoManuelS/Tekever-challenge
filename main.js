class App {
    constructor(){
        this.prevButton    = document.querySelector('.button_prev');
        this.nextButton    = document.querySelector('.button_next');
        this.pokecontainer = document.getElementById('poke-container');
        this.pokeAPI='https://pokeapi.co/api/v2/pokemon';  
      
        this.pokeCache = {};
        this.pokeCachePopup = {};
        this.maxPokemon = '151';
        this.startIndex = '1';
    }
    init = () => {
        this.prevButton.addEventListener('click', (event) => {
            event.preventDefault();
            this.prevPage();
        });
       
        this.nextButton.addEventListener('click', (event) => {
            event.preventDefault();
            this.nextPage();
        });

        this.render();
    }
        
    render = () => {       
        this.fetchPokemon(this.startIndex);       
    }

    prevPage = () => {       
      
        if(this.startIndex > 1) {
            this.startIndex--;
            this.fetchPokemon(this.startIndex);
        }
    }

    nextPage = () =>  {
        
        if(this.startIndex < this.maxPokemon) {
            this.startIndex++;
            this.fetchPokemon(this.startIndex);
        } 
    }
    

    fetchPokemon = async (id) => {

        if(!this.pokeCache[id]){
    
            const apiUrl = `${this.pokeAPI}/${id}`;
        
            const res     = await fetch(apiUrl);
            const pokemon = await res.json();
            
            this.pokeCache[id] = pokemon;
        
            this.displayPokemon(pokemon);
       
        }else{        
            this.displayPokemon(this.pokeCache[id]);
        }
        
    }

    displayPokemon = (pokemon) => {
       
        const types = pokemon.types.map(type => type.type.name);
        const type =  types.find(type => types.indexOf(type) > -1);

        const pokemonHTMLString = `
        <div class="pokemon ${type}" >
        <div class="img-container" onclick="app.selectPokemon(${pokemon.id})">
            <img  src="${pokemon.sprites.front_default}" />
        </div>    
        <h3  class="name">${pokemon.id}. ${pokemon.name}</h2>     
        </div>
        `;
        
        this.pokecontainer.innerHTML= pokemonHTMLString ;
    }

    selectPokemon = async (id) => {
        if(!this.pokeCachePopup[id]){

        const apiUrl = `${this.pokeAPI}/${id}`;
        const res  = await fetch(apiUrl);
        const pokemon = await res.json();
    
        this.pokeCachePopup[id] = pokemon;
             this.displayPopup(pokemon);
        }else{
            this.displayPopup(this.pokeCachePopup[id]);
        }
      
    }
    displayPopup = (pokemon) => {
        
        const types = pokemon.types.map(type => type.type.name);
        const type =  types.find(type => types.indexOf(type) > -1);

        const typeName  =  types.join(', ');
        const ability   =  pokemon.abilities.map( (ability) => ability.ability.name).join(', ');
        const image     =  pokemon.sprites['front_default'];
        const htmlString = `
        <div class="popup">
            <div class="pokemon ${type}" >
                <div class="img-container">
                    <img  src="${image}" />
                </div>    
                <h3  class="name">${pokemon.id}. ${pokemon.name}</h2>     
                <div>
                <p  class="pokemon-info">
                    <small>Height: </small> ${pokemon.height} | <small>Weight: </small> ${pokemon.weight}  
                    <br>
                    <small>Type: </small> ${typeName}
                    <br>
                    <small>Abilities: </small> ${ability}
                </p>
            </div>
            <button id="closeBtn" onclick="app.closePopup()">Close</button>
            </div>
        </div>
        `
    
        this.pokecontainer.innerHTML = htmlString + this.pokecontainer.innerHTML;
       
    }

    closePopup = () => {
        const popup = document.querySelector('.popup');        
        popup.parentElement.removeChild(popup);
    }
}

let app = new App();
app.init();

