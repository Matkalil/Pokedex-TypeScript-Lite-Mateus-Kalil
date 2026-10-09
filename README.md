# Pokédex TypeScript Lite

Mini projeto de uma Pokédex com Node.js e TypeScript, executada pelo terminal.

## Sobre o projeto

A Pokédex TypeScript Lite é uma aplicação simples em Node.js com TypeScript que simula uma Pokédex. Ela consulta dados de Pokémon na [PokeAPI](https://pokeapi.co/), uma API pública e gratuita, e transforma a resposta em um objeto simplificado com nome, tipos, altura e peso.

Os Pokémon encontrados podem ser adicionados a um catálogo local mantido em memória durante a execução, que impede registros duplicados e permite listar e remover itens.

## Objetivo

Aplicar em um projeto prático os conteúdos do Módulo 01 da Carreira Tech do SENAI: Node.js, JavaScript no back-end, TypeScript (interfaces, tipagem de funções e classes), métodos de array, Promises com async/await, consumo de API com fetch, tratamento de erros, Git, GitHub, GitFlow e Kanban.

## Tecnologias utilizadas

- Node.js
- TypeScript
- tsx
- PokeAPI
- Git e GitHub

## Pré-requisitos

- Node.js (versão LTS)
- npm
- Git

## Como instalar

Clone o repositório:

```bash
git clone https://github.com/Matkalil/Pokedex-TypeScript-Lite-Mateus-Kalil.git
```

Acesse a pasta do projeto:

```bash
cd Pokedex-TypeScript-Lite-Mateus-Kalil
```

Instale as dependências:

```bash
npm install
```

## Como executar

```bash
npm run start
```

Scripts disponíveis:

| Script | Descrição |
|---|---|
| `npm run start` | Executa o fluxo de demonstração diretamente a partir do TypeScript |
| `npm run dev` | Executa em modo de desenvolvimento, reiniciando a cada alteração salva |
| `npm run build` | Compila o TypeScript para JavaScript na pasta `dist` |
| `npm run start:dist` | Executa a versão compilada com Node.js |
| `npm run typecheck` | Verifica erros de tipagem sem gerar arquivos |

## Funcionalidades

- Buscar Pokémon por nome ou ID na PokeAPI
- Tratar erro de Pokémon inexistente (status 404) e falhas de conexão
- Transformar a resposta da API em um objeto simplificado
- Adicionar Pokémon ao catálogo local
- Impedir Pokémon duplicado
- Listar o catálogo
- Remover Pokémon por ID
- Exibir mensagens claras no terminal

## Exemplos de execução

### Busca válida

Entrada testada:

```
pikachu
```

Saída obtida:

```
[OK] Pokémon encontrado: pikachu
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60
[OK] pikachu adicionado ao catálogo.
```

### Busca inválida

Entrada testada:

```
pokemon-inexistente
```

Saída obtida:

```
[ERRO] Pokémon não encontrado: pokemon-inexistente
```

### Duplicidade

Entrada testada:

```
adicionar pikachu duas vezes
```

Saída obtida:

```
[AVISO] pikachu já está no catálogo.
```

### Listagem

Saída obtida:

```
Catálogo atual:
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60
#4 - charmander | Tipos: fire | Altura: 6 | Peso: 85
```

### Remoção

Entrada testada:

```
remover ID 25
```

Saída obtida:

```
[OK] Pokémon removido do catálogo.
```

## Estrutura do projeto

```
Pokedex-TypeScript-Lite-Mateus-Kalil/
│
├── src/
│   ├── main.ts
│   ├── controllers/
│   │   └── TerminalController.ts
│   ├── services/
│   │   ├── PokeApiService.ts
│   │   └── CatalogoPokemon.ts
│   ├── models/
│   │   └── Pokemon.ts
│   └── utils/
│       └── textFormatters.ts
│
├── pc_box.json
├── package.json
├── package-lock.json
├── tsconfig.json
├── .gitignore
└── README.md
```

### Explicação dos arquivos

| Arquivo | Responsabilidade |
|---|---|
| `src/main.ts` | Ponto de entrada. Cria os serviços, injeta as dependências no controller e inicia o fluxo de demonstração |
| `src/controllers/TerminalController.ts` | Camada de interface. Coordena a busca, o catálogo e as mensagens exibidas no terminal |
| `src/services/PokeApiService.ts` | Camada de integração externa. Consulta a PokeAPI com fetch e mapeia a resposta |
| `src/services/CatalogoPokemon.ts` | Regras do catálogo em memória: adicionar sem duplicados, listar e remover |
| `src/models/Pokemon.ts` | Interfaces `PokemonResumo` (formato do projeto) e `PokemonApiResponse` (formato da API) |
| `src/utils/textFormatters.ts` | Função pura que formata um Pokémon em uma linha de texto |
| `pc_box.json` | Arquivo inicializado com `[]`, reservado para a persistência em arquivo (melhoria futura) |
| `tsconfig.json` | Configuração do compilador TypeScript em modo estrito (`strict`) |
| `package.json` | Scripts e dependências de desenvolvimento do projeto |

## Conceitos aplicados

### TypeScript e interfaces

A interface `PokemonResumo` define o formato simplificado usado em todo o projeto (id, nome, tipos, altura e peso). A `PokemonApiResponse` descreve apenas os campos da PokeAPI que são utilizados. Todos os métodos e funções têm parâmetros e retornos tipados, e o projeto roda em modo `strict`.

### Fetch e async/await

O `PokeApiService` monta a URL com o nome ou ID informado (convertido para minúsculas e sem espaços), faz a requisição com `fetch` e aguarda a resposta com `await`. O método retorna `Promise<PokemonResumo | null>`.

### Tratamento de erros

A busca verifica `resposta.ok`: se a API responder com 404, o sistema exibe `[ERRO] Pokémon não encontrado` e retorna `null`. Falhas de conexão são capturadas pelo bloco `try/catch`, e o programa continua funcionando sem quebrar.

### Métodos de array

| Método | Onde foi usado |
| `map` | Transformar o array `types` da API em uma lista de nomes de tipos |
| `some` | Verificar duplicidade ao adicionar e existência ao remover |
| `filter` | Remover o Pokémon pelo ID |
| `forEach` | Exibir cada Pokémon na listagem |
| `join` | Exibir os tipos separados por vírgula |

### Classe CatalogoPokemon

Possui o atributo privado `pokemons` (um array de `PokemonResumo`), protegido por encapsulamento, e os métodos `adicionar`, `listar` e `remover`. O `remover` devolve uma cópia do catálogo atualizado para que a lista original não seja alterada de fora da classe.

### Injeção de dependência

O `main.ts` cria o `PokeApiService` e o `CatalogoPokemon` e os entrega ao `TerminalController` pelo construtor. Assim, o controller apenas coordena as camadas, sem depender de como elas são criadas.

## Organização do Kanban

As tarefas foram organizadas no GitHub Projects, com as colunas Backlog, A Fazer, Em Andamento e Concluído. Cada tarefa foi registrada como Issue e fechada pelos commits correspondentes.

[Acessar o quadro Kanban](https://github.com/users/Matkalil/projects/1/views/1)

## Branches utilizadas

| Branch | Objetivo |
|---|---|
| `main` | Versão estável e entregável do projeto |
| `develop` | Integração das funcionalidades antes de irem para a `main` |
| `feat/pokedex` | Desenvolvimento das funcionalidades: configuração, busca na API e catálogo |
| `docs/readme` | Escrita da documentação |

## Vídeo de apresentação

[Assistir ao vídeo](COLE_AQUI_O_LINK_DO_VIDEO)

## Melhorias futuras

- Salvar o catálogo no arquivo `pc_box.json` com `fs/promises`
- Criar um menu interativo no terminal com `readline`
- Criar classes de erro customizadas com herança
- Exibir HP, ataque e defesa
- Filtrar o catálogo por tipo de Pokémon
- Validar em tempo de execução os dados recebidos da API