import { PokeApiService } from "./services/PokeApiService";
import { CatalogoPokemon } from "./services/CatalogoPokemon";
import { TerminalController } from "./controllers/TerminalController";

async function main(): Promise<void> {
 const api = new PokeApiService();
 const catalogo = new CatalogoPokemon();
 const controller = new TerminalController(api, catalogo);
 await controller.executarDemo();
}  

main();