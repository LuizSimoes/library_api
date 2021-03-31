# library_api

### Uma API simples para cadastrar livros, a qual permite:
* Cadastrar usuários (endpoint '/users'.)
    * Verifica se os campos obrigatórios para cadastro (Email, Senha e Nome) foram preenchidos;
    * Verifica se o e-mail utilizado é válido e se já foi cadastrado;
    * Todos os usuários cadastrados por este endpoint deverão devem ser usuários comuns (users e não admins).
* Logar usuários (endpoint '/login'.);
    * Verifica se os campos obrigatórios para login (Email, Senha) foram preenchidos;
    * Verifica se os campos obrigatórios para login (Email, Senha) são válidos;
    * Gera um token JWT e retorna quando o login for bem sucedido;

* Cadastrar livros;
* Consultar lista de todos os livros;
* Consultar livros pelo ID;

#### Contruído em NODE JS com EXPRESS
#### Utilizado banco de dados não relacional com MongoDB
#### Arquitetura de camada MSC

