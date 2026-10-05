import type { PokemonResumo } from "../models/Pokemon";

export function formatarPokemon(pokemon: PokemonResumo): string {
  const formatacao = `#${pokemon.id} - ${pokemon.nome} | Tipos: ${pokemon.tipos.join(", ")} | Altura: ${pokemon.altura} | Peso: ${pokemon.peso}`;
  return formatacao;
}
