<h1 align="center">
  <img alt="GYMPOINT" title="GYMPOINT" src=".github/gympoint.png" width="200px" />
  <br>
</h1>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/dhemesmota/gympoint">
  
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/dhemesmota/gympoint">
  
  <img alt="GiHub Issues" src="https://img.shields.io/github/issues/dhemesmota/gympoint" >
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/dhemesmota/gympoint">
  
  <img alt="GitHub License" src="https://img.shields.io/github/license/dhemesmota/gympoint">

</p>

<h4 align="center">Aplicativo gerenciador de academia</h4>
<p align="center">:construction: Em desenvolvimento.</p>


<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#wrench-ferramentas">Ferramentas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#clipboard-funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#page_with_curl-instruções">Instruções</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#paperclip-arquivos">Arquivos</a>
</p>


## :rocket: Tecnologias

Este projeto está sendo desenvolvido com as seguintes tecnologias:

- [ ] [ReactJS][reactjs]
- [ ] [React Native][react-native]
- [x] [Node.JS][nodejs]

## :wrench: Ferramentas

- [Sentry Node][sentrynode]
- [Bcryptjs][bcryptjs]
- [Bee Queue][bee-queue]
- [Date-fns][date-fns]
- [Dotenv][dotenv]
- [Prettier][prettier]
- [Express][express]
- [JSON Webtoken][jsonwebtoken]
- [Mongoose][mongoose]
- [Multer][multer]
- [Nodemailer][nodemailer]
- [Sequelize][sequelize]
- [Yup][yup]
- [Eslint][eslint]
- [Nodemon][nodemon]
- [Sucrase][sucrase]
- [...][...]


## :clipboard: Funcionalidades
- Manter administradores
- Autenticação via JWT
- Upload de imagens
- Manter alunos
- Manter planos
- Manter matrículas
- Fazer chekins
- Solicitar ajuda
- Responder duvídas de alunos
- Notificações via e-mail

## :page_with_curl: Instruções 
Para executar esse aplicativo você precisa ter o [Git](https://git-scm.com), [Docker](https://www.docker.com), [Node.js v12][nodejs] ou superior, [Yarn](https://yarnpkg.com) ou [NPM](https://www.npmjs.com/get-npm) instalado no seu computador.<br>
No seu prompt de comando:
```bash
# Clone este repositório
$ git clone git@github.com:dhemesmota/gympoint.git

# Vá para o repositório
$ cd gympoint

# Crie um arquivo .env e configure as variáveis de ambiente

# Instale as dependências frontend
$ ...

# Instale as dependências mobile
$ ...

# Instale as dependências backend
$ cd backend
$ yarn install

# Configure os bancos de dados
## Postgres
$ docker run --name database -e POSTGRES_PASSWORD=123456 -p 5432:5432 -d postgres:11
## MongoDB
$ docker run --name mongogympoint -p 27017:27017 -d -t mongo
## Redis
$ docker run --name redisgympoint -p 6379:6379 -d -t redis:alpine

# Rodar aplicativo
$ yarn dev

# Abra um novo prompt
$ yarn queue
```

## :paperclip: Arquivos
:pushpin: [Insomnia](https://github.com/dhemesmota/gympoint/blob/master/Insomnia.json): arquivo contendo rotas da aplicação, 
deve ser importado no Insominia, se não tiver, bastar instalar em seu computador. [Link para download](https://insomnia.rest).

## :memo: Licença
Esse projeto está sob a licença MIT. Veja o arquivo [Licença](https://github.com/dhemesmota/gympoint/blob/master/LICENSE.md) 
para mais detalhes.

[reactjs]: https://pt-br.reactjs.org/
[react-native]: https://facebook.github.io/react-native/
[nodejs]: https://nodejs.org/en/
[react-router-dom]: https://www.npmjs.com/package/react-router-dom
[react-toastify]: https://github.com/fkhadra/react-toastify
[styled-components]: https://www.styled-components.com/
[eslint]: https://eslint.org/
[prettier]: https://prettier.io/
[axios]: https://github.com/axios/axios
[sentrynode]: https://www.npmjs.com/package/@sentry/node
[bcryptjs]: https://www.npmjs.com/package/bcryptjs
[bee-queue]: https://github.com/bee-queue/bee-queue
[date-fns]: https://date-fns.org/
[dotenv]: https://www.npmjs.com/package/dotenv
[express]: https://expressjs.com/pt-br/
[jsonwebtoken]: https://github.com/auth0/node-jsonwebtoken
[mongoose]: https://mongoosejs.com/
[multer]: https://github.com/expressjs/multer
[nodemailer]: https://nodemailer.com/about/
[sequelize]: https://sequelize.org/
[yup]: https://github.com/jquense/yup
[nodemon]: https://nodemon.io/
[sucrase]: https://github.com/alangpierce/sucrase
[...]: https://github.com/dhemesmota/gympoint

