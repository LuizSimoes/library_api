# library_api

## Uma API simples para cadastrar livros
#### Contruído em NODE JS com EXPRESS
#### Utilizado banco de dados não relacional com MongoDB
#### Fazendo autenticação por JWT, utilizando o pacote jsonwebtoken
#### Suporte a upload de arquivos, utilizando a biblioteca Multer
#### Arquitetura MSC

### A API permite:
* Cadastrar usuários (endpoint '/users'.)
    * Verifica se os campos obrigatórios para cadastro (Email, Senha e Nome) foram preenchidos;
    * Verifica se o e-mail utilizado é válido e se já foi cadastrado;
    * Todos os usuários cadastrados por este endpoint deverão devem ser usuários comuns (users e não admins).
* Logar usuários (endpoint '/login'.);
    * Verifica se os campos obrigatórios para login (Email, Senha) foram preenchidos;
    * Verifica se os campos obrigatórios para login (Email, Senha) são válidos;
    * Gera um token JWT e retorna quando o login for bem sucedido;

Falta implementar:
* Cadastrar livros;
* Consultar lista de todos os livros;
* Consultar livros pelo ID;
* Editar informações de um livro específico;
* Exclusão das informações de um livro;
* Upload da imagem da capa do livro;
* Consulta da imagem da capa do livro.



