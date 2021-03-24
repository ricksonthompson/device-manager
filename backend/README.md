![](C:\Users\Rickson\Desktop\Sem título-1.png)

<h3 align="center">
  Sistema web de gerenciamento de dispositivos
</h3>

<blockquote align="center">“Só deseje as coisas as quais você está disposto a lutar!"</blockquote>



<p align="center">
  <a href="#rocket-sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#calendar-entrega">Entrega</a>&nbsp;&nbsp;&nbsp;
</p>


## :rocket: Sobre o desafio

Nesse desafio, desenvolvi uma aplicação de gerenciamento de dispositivos, treinando os meus conhecimentos em NodeJS junto ao TypeScript, incluindo o uso de banco de dados com TypeORM.

Essa aplicação armazena dispositivos e categorias e permite o cadastro dos mesmos.

### Instalação e execução do sistema

Agora navegue até a pasta criada e abra no Visual Studio Code, lembre-se de executar o comando `yarn` no seu terminal para instalar todas as dependências.

Tendo o repositório clonado e instalado as dependências, altere os seguintes caminhos para executar localmente:

```javascript
module.exports = {
  "type": "mysql",
  "host": "mysql.c2gbi1gy4eg3.us-east-2.rds.amazonaws.com",
  "port": 3306,
  "username": "admin",
  "password": "admin1234",
  "database": "db_devicemanager",
  "entities": [
    // "./src/models/*{.ts,.js}" para executar local
    "./dist/models/*{.ts,.js}"
  ],
  "migrations": [
    // "./src/database/migrations/*{.ts,.js}" para executar local
    "./dist/database/migrations/*{.ts,.js}"
  ],
  "cli": {
    // "./src/database/migrations" para gerar as migrations na pasta raíz
    "migrationsDir": "./dist/database/migrations"
  }
  }
```

:runner: Agora execute o seguinte comando para rodar as migrations no banco de dados:

```json
yarn typeorm migration:run
```

⚠️ Antes de rodar as migrations, crie um banco de dados faça o apontamento dele no arquivo `ormconfig.js`para que possa vizualizar a criação das tabelas ⚠️

Por fim, execute o seguinte comando para iniciar a aplicação localment:

```json
yarn dev:server
```

Prontinho, agora é só "brincar"!:computer:

Abaixo listei as rotas,  e os parâemetros e o compotamentos de cada uma delas.

Recomendo a utilização do [Insomnia](https://insomnia.rest/download) para fazer as requisições.

### Rotas da aplicação

Agora que você já está com o código clonado e pronto para continuar, você pode verificar o funcionamento das rotas:

- **`get /devices`**: A rota retorna todas os dispositivos registrados no banco de dados.

```json
[
  {
    "id": 53,
    "category_id": 22,
    "color": "Azul",
    "partNumber": 15721254,
    "created_at": "2021-03-24T08:43:38.000Z",
    "updated_at": "2021-03-24T08:43:38.000Z"
  },
  {
    "id": 54,
    "category_id": 21,
    "color": "Cinza",
    "partNumber": 15721254,
    "created_at": "2021-03-24T08:44:55.000Z",
    "updated_at": "2021-03-24T08:44:55.000Z"
  },
  {
    "id": 55,
    "category_id": 23,
    "color": "Preto",
    "partNumber": 15721254,
    "created_at": "2021-03-24T08:45:14.000Z",
    "updated_at": "2021-03-24T08:45:14.000Z"
  }
]
```

- **`post /devices`**: A rota deve receber `category_id`, `color`, e `partNumber` dentro do corpo da requisição, sendo o `category_id` o id da categoria. Ao cadastrar um novo dispositivo, ele é armazenado dentro do banco de dados na AWS RDS, possuindo os campos `id`, `name`, `category_id`, `color`, `partNumber`, `created_at` e `updated_at`.

  ```json
  {
    "category_id": 22,
    "color": "Azul",
    "partNumber": 15721254,
    "id": 53,
    "created_at": "2021-03-24T08:43:38.000Z",
    "updated_at": "2021-03-24T08:43:38.000Z"
  }
  ```

- **`delete /devices/:id`**: A rota deve deletar um dispositivo com o `id` presente nos parâmetros da rota;

- **`get /categories`**: A rota retorna todas as categorias registradas no banco de dados.

```json
[
  {
    "id": 21,
    "name": "Computador",
    "created_at": "2021-03-24T08:37:49.000Z",
    "updated_at": "2021-03-24T08:37:49.000Z"
  },
  {
    "id": 22,
    "name": "Smartphone",
    "created_at": "2021-03-24T08:39:16.000Z",
    "updated_at": "2021-03-24T08:39:16.000Z"
  },
  {
    "id": 23,
    "name": "Tablet",
    "created_at": "2021-03-24T08:39:27.000Z",
    "updated_at": "2021-03-24T08:39:27.000Z"
  }
]
```

- **`post /categories`**: A rota deve receber apenas `name` dentro do corpo da requisição. Ao cadastrar uma nova categoria, ela também é armazenada no banco de dados na AWS RDS, possuindo os campos `id`, `name`,`created_at` e `updated_at`.

  ```json
  {
    "name": "Computador",
    "id": 21,
    "created_at": "2021-03-24T08:37:49.000Z",
    "updated_at": "2021-03-24T08:37:49.000Z"
  }
  ```

- **`delete /categories/:id`**: A rota deve deletar uma categoria com o `id` presente nos parâmetros da rota;

## :calendar: Entrega

Após a realização do deploy da aplicação, foi disponilizado o código fonte por meio desse repositório cumprindo o prazo estipulado (23/01/2021)

---

Feito com :heart: by Rickson Thompson

