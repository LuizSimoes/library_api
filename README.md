# library_api

## Uma API simples para cadastrar livros
* Construído em NODE JS com EXPRESS
* Utilizado banco de dados não relacional com MongoDB
* Fazendo autenticação por JWT, utilizando o pacote jsonwebtoken
* Suporte a upload de arquivos, utilizando a biblioteca Multer
* Arquitetura MSC

### A API permite:
1. Cadastrar usuários comuns (endpoint '/users'.)
    * Verifica se os campos obrigatórios para cadastro (Email, Senha e Nome) foram preenchidos;
    * Verifica se o e-mail utilizado é válido e se já foi cadastrado;
    * Todos os usuários cadastrados por este endpoint deverão devem ser usuários comuns (users e não admins).
2. Logar usuários (endpoint '/login'.);
    * Verifica se os campos obrigatórios para login (Email, Senha) foram preenchidos;
    * Verifica se os campos obrigatórios para login (Email, Senha) são válidos;
    * Gera um token JWT e retorna quando o login for bem sucedido;

#### Falta implementar:
3. Cadastrar livros;
4. Consultar lista de todos os livros;
5. Consultar livros pelo ID;
6. Editar informações de um livro específico;
7. Exclusão das informações de um livro;
8. Upload da imagem da capa do livro;
9. Consulta da imagem da capa do livro.
10. Usuários ADMINs



