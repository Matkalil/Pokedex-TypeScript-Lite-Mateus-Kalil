console.log("Pokédex TypeScript Lite iniciada!");

import { PokeApiService } from "./services/PokeApiService";

async function main(): Promise<void> {
  const api = new PokeApiService();
  console.log(await api.buscarPokemon("pikachu"));
  console.log(await api.buscarPokemon("Charmander "));
  console.log(await api.buscarPokemon("pokemon-inexistente"));
}

main(); //Temporário