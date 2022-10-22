# Objetivo / Especificação do Teste
#### Processo seletivo para desenvolvedor

Desenvolver uma interface para possibilitar a leitura da lista de indicados e vencedores
da categoria Pior Filme do Golden Raspberry Awards.

[Texoit](https:///www.texoit.com)

## Para visualizar o resultado acesse:

https://test-dev-texoit.netlify.app

[![Netlify Status](https://api.netlify.com/api/v1/badges/db1b787d-ccb6-48ab-905d-c0c6cbeb4de6/deploy-status)](https://app.netlify.com/sites/test-dev-texoit/deploys)

## A aplicação deverá ser composta por 2 views:

- Dashboard
- Lista de todos os filmes

## A página deve possuir um menu com links para as views.
- Os dados serão obtidos através de uma API 
https://tools.texoit.com/backend-java/api/movies.
- O detalhamento pode ser obtido na seção Formato da API. Deve-se também criar testes unitários e incluir um arquivo readme com as instruções para rodar o projeto.

## Requisitos do sistema:

1. O dashboard deve ser criado conforme especificado pelo anexo 1 (ver página de anexos) e deverá ser composto por 4
   painéis com os seguintes requisitos:
   * Mostrar em uma tabela os anos que veram mais de um vencedor;
   * Mostrar em uma tabela os três estúdios com mais vitórias
   * Mostrar em tabelas os produtores com maior e menor intervalo entre
   vitórias;
   * Exibir em tabela os vencedores de determinado ano selecionado através
   de um campo de busca.


2. A view que lista todos os filmes conforme especificado pelo anexo 2 (ver página
   de anexos). Deverá possuir paginação e conter ainda dois filtros:
   * Por ano;
   * Por vencedor.


3. Criar testes unitários de todas as funcionalidades.

## Requisitos não funcionais do sistema:

1. Responsividade mínima 768x1280;
2. Qualidade de código (legibilidade, lógica, indentação);
3. Boas práticas de implementação;
4. Documentação.
5. O código-fonte deve ser disponibilizado em um repositório git (Github, Gitlab, Bitbucket, etc).

## Author
>Jean Paul

>jeanpaulwebb@gmail.com

## Protótipos
![Protótipo 1](https://raw.githubusercontent.com/JeanPaulll/test-for-developer-vacancy-at-texo-it/master/src/assets/prototipos/1.png)
![Protótipo 2](https://raw.githubusercontent.com/JeanPaulll/test-for-developer-vacancy-at-texo-it/master/src/assets/prototipos/2.png)

## Test coverage
![Karma Jasmine](https://raw.githubusercontent.com/JeanPaulll/test-for-developer-vacancy-at-texo-it/master/src/assets/prototipos/3.png)
![Coverage](https://raw.githubusercontent.com/JeanPaulll/test-for-developer-vacancy-at-texo-it/master/src/assets/prototipos/4.png)
