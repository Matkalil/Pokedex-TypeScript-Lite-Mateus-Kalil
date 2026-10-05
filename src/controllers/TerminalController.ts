import type { PokeApiService } from "../services/PokeApiService";
import type { CatalogoPokemon } from "../services/CatalogoPokemon";
import { formatarPokemon } from "../utils/textFormatters";
export class TerminalController {
  private api: PokeApiService;
  private catalogo: CatalogoPokemon;

  constructor(api: PokeApiService, catalogo: CatalogoPokemon) {
    this.api = api;
    this.catalogo = catalogo;
  }

  listar(): void {
    this.catalogo.listar();
  }

  remover(id: number): void {
    this.catalogo.remover(id);
  }

  async buscarEAdicionar(nomeOuId: string): Promise<void> {
    const pokemon = await this.api.buscarPokemon(nomeOuId);
    if (pokemon === null) {
      return;
    }
    console.log(`[OK] Pokémon encontrado: ${pokemon.nome}`);
    console.log(formatarPokemon(pokemon));
    this.catalogo.adicionar(pokemon);
  }

  async executarDemo(): Promise<void> {
    await this.buscarEAdicionar("Pikachu");
    await this.buscarEAdicionar("Charmander"); //ToLowerCase()
    await this.buscarEAdicionar("Pikachu"); //Testa duplicado
    await this.buscarEAdicionar("Pokemon-inexistente"); //Erro 404
    this.listar();
    this.remover(25);
    this.listar();
  }
}
