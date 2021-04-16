<h1>Avaliação nibble</h1>

 <h2>Link do projeto em deploy no heroku: <a src="https://gestao-nibble.herokuapp.com/"> Clique aqui </a> ! </h2>
 
 
<p>Para testar a aplicação modo de desenvolvimento </p>
<p>Clone o projeto  depois modifique o arquivo "ormconfig.js" de :</p>

<p>
    module.exports = {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    extra: {
    ssl: {
    rejectUnauthorized: false,
    },
    },
    entities: ['./dist/modules/**/typeorm/entities/*.js'],
    migrations: ['./dist/shared/typeorm/migrations/*.js'],
    cli: {
    migrationsDir: './src/shared/typeorm/migrations',
    },
</p>
<p>Para:</p>
<p>
    module.exports = {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    extra: {
    ssl: {
    rejectUnauthorized: false,
    },
    },
    entities: ['./src/modules/**/typeorm/entities/*.ts'],
    migrations: ['./src/shared/typeorm/migrations/*.ts'],
    cli: {
    migrationsDir: './src/shared/typeorm/migrations',
    },
</p>

<ul>
  <strong>Rotas da aplicação</strong>
  <li>
  client: com metodos post, delete, put, get
  </li>
  <li>
  client/address com metodos post
  </li>
   <li>
  client/cpf com metodos get
  </li>
  <li>
  client/email com metodos get
  </li>
   <li>
  address: Com metodos Put and delete
  </li>
</ul>
