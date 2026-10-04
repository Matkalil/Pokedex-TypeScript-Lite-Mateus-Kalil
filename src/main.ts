// console.log("Pokédex TypeScript Lite iniciada!");

// import { PokeApiService } from "./services/PokeApiService";

// async function main(): Promise<void> {
//   const api = new PokeApiService();
//   console.log(await api.buscarPokemon("pikachu"));
//   console.log(await api.buscarPokemon("Charizard"));
//   console.log(await api.buscarPokemon("pokemon-inexistente"));
// }

// main(); //Temporário

// import { PokeApiService } from "./services/PokeApiService";
// import { CatalogoPokemon } from "./services/CatalogoPokemon";

// async function main(): Promise<void> {
//   const api = new PokeApiService();
//   const catalogo = new CatalogoPokemon();

//   const pikachu = await api.buscarPokemon("pikachu");
//   if (pikachu !== null) {
//     catalogo.adicionar(pikachu); // primeira vez: deve dar [OK]
//     catalogo.adicionar(pikachu); // segunda vez: deve dar [AVISO]
//   }

//   const charmander = await api.buscarPokemon("charmander");
//   if (charmander !== null) {
//     catalogo.adicionar(charmander); // deve dar [OK] com o nome charmander
//   }
// }

// main();

//import { PokeApiService } from "./services/PokeApiService";
//import { CatalogoPokemon } from "./services/CatalogoPokemon";

// async function main(): Promise<void> {
//   const api = new PokeApiService();
//   const catalogo = new CatalogoPokemon();

//   catalogo.listar(); // deve mostrar o aviso de catálogo vazio

//   const pikachu = await api.buscarPokemon("pikachu");
//   if (pikachu !== null) {
//     catalogo.adicionar(pikachu);
//     catalogo.adicionar(pikachu);
//   }

//   const charmander = await api.buscarPokemon("charmander");
//   if (charmander !== null) {
//     catalogo.adicionar(charmander);
//   }

//   catalogo.listar(); // deve mostrar os dois Pokémon
// }
// main();
import { PokeApiService } from "./services/PokeApiService";
import { CatalogoPokemon } from "./services/CatalogoPokemon";

async function main(): Promise<void> {
  const api = new PokeApiService();
  const catalogo = new CatalogoPokemon();

  catalogo.listar();

  const pikachu = await api.buscarPokemon("pikachu");
  if (pikachu !== null) {
    catalogo.adicionar(pikachu);
    catalogo.adicionar(pikachu);
  }

  const charmander = await api.buscarPokemon("charmander");
  if (charmander !== null) {
    catalogo.adicionar(charmander);
  }

  catalogo.listar();

  catalogo.remover(25);  // deve dar [OK]
  catalogo.remover(999); // deve dar [AVISO]
  catalogo.listar();     // deve mostrar só o charmander
}

main();