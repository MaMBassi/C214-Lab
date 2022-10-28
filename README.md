<h1 align="center"> C214 - Laboratório </h1>
<p align="center"> Exercícios práticos da disciplina C214-L1</p>

<p align="center">
<img src="https://img.shields.io/static/v1?label=License&message=MIT&color=00bfff&style=plastic"/>

<img src="https://img.shields.io/static/v1?label=LP&message=JavaScript&color=daa520&style=plastic"/>

<img src="https://img.shields.io/static/v1?label=GD&message=NodeJS&color=9acd32&style=plastic"/>

<img src="https://img.shields.io/static/v1?label=IDE&message=vscode&color=5f9ea0&style=plastic"/>
</p>

<h4 align="center"> :small_orange_diamond: Em desenvolvimento... </h4>

### :books: Exercícios Práticos

- [x] Aula 02: Revisão POO
- [x] Aula 03: Calculadora
- [x] Aula 04: GitHub
- [x] Aula 05: ReadMe
- [x] Aula 06: API
- [x] Aula 07: Teste unitário
- [x] Aula 08 e 09: API Carro + Teste unitário + Teste Mock
- [ ] Aula 10: CI/CD
- [x] Aula 11: Design Patterns

### :point_right: Pré-requisitos

Para executar os projetos é preciso ter instalado nas máquinas:
- [Node.js](https://nodejs.org/en/download/)
- Editor de sua escolha. Por exemplo, [VSCode](https://code.visualstudio.com/download)

### :heavy_check_mark: Execução

Para a execução dos projetos, é possível fazer o download do código direto do GitHub ou através do git clone (link do repositorio). Contudo, para a segunda opção, é necessário ter o [Git](https://git-scm.com) instalado.

- Abrir o arquivo no seu editor escolhido.

- Abrir o terminal do editor.

- Instalar as dependências: npm install

- Executar o arquivo: npm start

### :computer: Tecnologias

- Node.js
- JavaScript

### :woman: Autora
:link: https://github.com/MaMBassi

### :small_blue_diamond: Licença
MIT

### Aula 06

Para executar o código dessa aula, também é preciso instalar outras dependências. Os comandos para utilizar no terminal IDE:

  npm install --save express
  
  npm install --save cors
  
  npm install --save http-status-codes
  
  npm install --save validate.js
  
  npm install --save moongose
  
  npm install --save uuid
  
A API tem as operações de CRUD completo para criar os filmes no banco de dados MongoDB e lista-los a partir do parâmetro gênero.

Parâmetros do filme: nome, diretor, gênero, ano e duração.

### Aula 07

Os scripts dos testes unitários estão na pasta test.

- response_status.test: script para os testes em relação aos status codes;

- validation: script para os testes de validação da operação Create.

Para executar o teste, é preciso instalar o Jest: npm install --save jest

Após essa etapa, como o package.json já está alterado para executar o teste, é preciso apenas escrever o comando: npm test

Ao terminar os testes, é gerado uma pasta coverage com o relatório do teste.

### Aulas 08 e 09

As aulas 08 e 09 são um compilado das aulas 06 e 07 aplicado no tema Carro.

A API tem as operações de CRUD completo para criar os carros no banco de dados MongoDB e lista-los a partir do parâmetro marca. Para verificarmos a execução básica da API, é preciso escrever o comando: npm start.

Parâmetros do carro: marca, modelo, combustível, ano e cor.

Para os testes unitários e mock, é preciso instalar o jest. O package.json já está alterado para executar os testes e gerar a pasta coverage com o relatório do teste. Dessa maneira, é preciso apenas escrever o comando, npm test.

### Aula 10

### Aula 11

O arquivo Soma.js é uma classe que recebe como parâmetro dois números. Há um método (getSoma) para retornar a soma desses números.

O arquivo factory.js realiza o mesmo processo que a classe Soma, mas de uma maneira mais simplificada, sem precisar utilizar o comando new para a criação da instância do objeto.

Para a execução dos programas, utilizou-se a extensão Code Runner.
