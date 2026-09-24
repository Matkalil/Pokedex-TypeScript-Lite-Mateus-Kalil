import type { PokemonApiResponse, PokemonResumo } from "../models/Pokemon";

export class PokeApiService {
  private readonly baseUrl: string = "https://pokeapi.co/api/v2/pokemon";

  async buscarPokemon(nomeOuId: string): Promise<PokemonResumo | null> {
    const nomeFormatado = nomeOuId.toLowerCase().trim();
    const url = `${this.baseUrl}/${nomeFormatado}`;

    try {
      const resposta = await fetch(url);
      if (!resposta.ok) {
        console.log(`[ERRO] Pokémon não encontrado: ${nomeFormatado}.`);
        return null;
      }

      //converte a resposta em JSON
      const dados = (await resposta.json()) as PokemonApiResponse;

      //  mapeia os dados da API
      const pokemon: PokemonResumo = {
        id: dados.id,
        nome: dados.name,
        tipos: dados.types.map((item) => item.type.name),
        altura: dados.height,
        peso: dados.weight,
      };
      return pokemon;
    } catch (erro) {
      const mensagem = erro instanceof Error ? erro.message : String(erro);
      console.log(`[ERRO] Não foi possível conectar à PokeAPI: ${mensagem}`);
      return null;
    }
  }
}
