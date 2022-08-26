# Heroku: https://cine-more.herokuapp.com

## Ferramentas utilizadas e tempo de experiencia

1. TypeScript (1 ano e meio de experiencia)
2. Nest.js (atualmente sem experiencia porem iniciando estudo)
3. TypeORM (1 ano de experiencia)
4. Swagger (atualmente sem experiencia por preferir o readme posso aprender se for um requisito obrigatorio)
5. Docker (8 meses de experiencia)
6. Redis (sem experiencia sem experiencia)
7. PostgreSQL (1 ano de experiencia)

Obs tirando o registro todas as rotas precisam do usuario logado e update, registro e deleção de filmes so por admins

## Rotas com o metodo post

### /api/user/register

**em caso de registro do admin**

<p>{
<p>	"email": "usuariox@gmadil.com",
<p>	"password": "1100",
<p>	"isAdm": true
<p>}

status code 201

**do contrario**

<p>{
<p>	"email": "usuariox@gmadil.com",
<p>	"password": "1100",
<p>}

status code 201

### /api/user/login/

**independente de ser admin ou não**

<p>{
<p>	"email": "usuariox@gmadil.com",
<p>	"password": "1100",
<p>}

status code 200

### /api/adm/newMovie

**apenas o admin pode postar filmes**

<p>{
<p>"title": "aquelefilme",
<p>"director": "string",
<p>"released": "07/11/2001",
<p>"duration": "20:3:4"
<p>}

status code 201

## Rotas com o metodo get

### /api/user/profile

**Profile do usuario**

<p>{
<p>"id": "792d156f-5365-400e-8e31-72567237891d",
<p>"email": "exemplo@gmadil.com",
<p>"password": "$2a$10$.MN8/.hTunLXdo7auqa26u1LkiHt7c2O2jUy7skU.5vbCRY9PuUkG",
<p>"isAdm": true
<p>}

status code 200

### /api/user/listMovies

**Retornar um array contendo todos os filmes na api**

<p>[ "movie": {
<p>"duration": "20:3:4",
<p>"released": "2001-07-11T03:00:00.000Z",
<p>"director": "string",
<p>"title": "aquelefilme",
<p>"id": "fe307626-24a0-4d9c-adee-12c55396db22"
<p>}]

status code 200

### /user/moviesbytitle/:titulo_do_filme

**deve retornar o filme com o titulo definido**

<p>"movie": {
<p>"duration": "20:3:4",
<p>"released": "2001-07-11T03:00:00.000Z",
<p>"director": "string",
<p>"title": "aquelefilme",
<p>"id": "fe307626-24a0-4d9c-adee-12c55396db22"
<p>}

status code 200

### /api/user/listByDirector/:diretor_do_filme

**deve retornar um array com todos os filmes feitos pelo diretor**

<p>[ "movie": {
<p>"duration": "20:3:4",
<p>"released": "2001-07-11T03:00:00.000Z",
<p>"director": "string",
<p>"title": "aquelefilme",
<p>"id": "fe307626-24a0-4d9c-adee-12c55396db22"
<p>}]

status code 200

## Rotas com o update(patch)

#### /api/user/update/profile

**o usuario so pode atualizar as proprias informações corpo da requisição**

<p>{
<p>	"email": "usuarioxyzolamundo@gmadil.com",
<p>	"password": "1111",
<p>}

status code 200

### /api/adm/update/:titulo_do_filme

**corpo da requisição**

<p>{
<p>"title": "aquele filme modificado",
<p>"director": "string",
<p>"released": "07/11/2022",
<p>"duration": "2:3:4"
<p>}

status code 200

## Rotas com o delete

### /api/user/delete

** o usuario deleta a propria conta**

status code 200

## /api/adm/delete/:titulo_do_filme

**so o adimin pode deletar o filme**

status code 200
