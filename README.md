<h1>Avaliação nibble</h1>
<h2>Back-end da aplicação </h2>
 <h2>Link do projeto em produção no heroku: "https://gestao-nibble.herokuapp.com/" </h2>
 
 <h2>O email que recebe as notifações é o testenodemailer@gmail.com</h2>
 <p> Para selecionar o email desejado que recebera as noticações de novos usuarios cadastrados</p>
 <p>para altera o email bastar mudar o email e consequentemente a senha no diretorio ./src/modules/client/services/CreateClientService.ts </p>
 
 
<p>Para testar a aplicação modo de desenvolvimento </p>
<p>Clone o projeto  depois modifique o arquivo "ormconfig.js" de :</p>

<p>
    module.exports = { <br>
    type: 'postgres', <br>
    url: process.env.DATABASE_URL, <br>
    extra: {<br>
    ssl: {<br>
    rejectUnauthorized: false,<br>
    },<br>
    },<br>
    entities: ['./dist/modules/**/typeorm/entities/*.js'],<br>
    migrations: ['./dist/shared/typeorm/migrations/*.js'],<br>
    cli: {<br>
    migrationsDir: './src/shared/typeorm/migrations',<br>
    },<br>
</p>
<p>Para:</p>
<p>
    module.exports = {<br>
    type: 'postgres',<br>
    url: process.env.DATABASE_URL,<br>
    extra: {<br>
    ssl: {<br>
    rejectUnauthorized: false,<br>
    },<br>
    },<br>
    entities: ['./src/modules/**/typeorm/entities/*.ts'],<br>
    migrations: ['./src/shared/typeorm/migrations/*.ts'],<br>
    cli: {<br>
    migrationsDir: './src/shared/typeorm/migrations',<br>
    },<br>
</p>

<p>Depois bastar dar o comando "yarn dev" </p>

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
