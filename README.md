<<<<<<< HEAD
# PROVA
=======
# Unifaat :: Devweb :: PROVA <a name="Projeto de Sistema de Gerenciamento Escolar Infantil"></a>

## 📑 Sumário

- [Instalação e Execução](#instalacao-e-execucao)
- [👨‍🔬 Testando API](#Testando-API)
  - [👨‍🎓 Criar um aluno](#criar-aluno)
  - [👨‍🏫 Listar um aluno](#listar-aluno)
  - [👨‍🏫 Criar um professor](#criar-um-professor)
  - [📒 Criar uma materia](#criar-materia)
- [🧵 Teste da Tabela (postgreSQL)](#teste-tabela)
- [📦 Bibliotecas Utilizadas](#bibliotecas-utilizadas)
- [📁 Estrutura de Diretórios (raiz)](#estrutura-de-diretorios-raiz)
- [🧾 Como Criar um Novo Documento Swagger](#swagger)
- [🐳 Containers e Imagens Docker](#containers-e-imagens-docker)

---

## Instalação e Execução <a name="instalacao-e-execucao"></a>

### Siga os passos abaixo para rodar o projeto via Docker:

1. Clonar o repositório:

   ```sh
   git clone https://github.com/Zone5517/PROVA.git
   ```

2. Entrar na pasta do projeto:

   ```sh
   cd '.\final 1.0\'
   ```

3. Instalar as dependências:

   ```sh
   npm install
   ```

4. Subir a aplicação com Docker Compose:

   ```sh
   docker compose up --build
   ```

5. Acesse a API no navegador ou em ferramentas como Insomnia/Postman:

   ```sh
   http://localhost:3000
   ```

   ## Acesse <a name="Testando API"></a>

- Servidor: [http://localhost:3000](http://localhost:3000)

---

## 👨‍🔬 Como Criar API <a name="Testando-API"></a>

### 👨‍🎓 Criar um aluno <a name="criar-aluno"></a>

Exemplo
```js
curl -X POST http://localhost:3000/alunos \
  -H "Content-Type: application/json" \
  -d '{"nome":"Lucas","idade":7}'
```

### 👩‍🎓 Listar alunos: <a name="Listar-aluno"></a>

```js
curl http://localhost:3000/alunos
  ...
  # Buscar aluno por ID: cada aluno tem seu id para procurar mude o numero no final do comando /1
  ...
    curl http://localhost:3000/alunos/1 

    # Deletar Aluno por ID: novamente mude o numero no final confrome o id do aluno /1
    ...
    curl -X DELETE http://localhost:3000/alunos/1

```

### 👩‍🏫 Criar um Professor <a name="criar-um-professor"></a>
```js
curl -X POST http://localhost:3000/professores \
  -H "Content-Type: application/json" \
  -d '{"nome": "Ana", "disciplina": "Matemática"}'
```
### 👩‍🏫 Listar professor: <a name="Listar-aluno"></a>

```js
 curl http://localhost:3000/professores

  ...
  # atualizar materia por ID: cada professor tem seu id para procurar mude o numero no final do comando /1 
  e depois escolha a materia de sua preferencia
  ...
    curl -X PUT http://localhost:3000/professores/1 \
  -H "Content-Type: application/json" \
  -d '{"nome":"João", "disciplina":"História"}'

    # Deletar professor por ID: novamente mude o numero no final confrome o id do professor /1
    ...
    curl -X DELETE http://localhost:3000/professore/2
```

### 📒 Criar uma materia: <a name="Criar-materia"></a>

```js
 curl http://localhost:3000/materias
  ...
  # Criar materia  
Substitua os valores conforme necessário:

"nome": nome da matéria.

"carga_horaria": número de horas (por exemplo, 40 ou 60).

  ...
    curl -X POST http://localhost:3000/materias \
  -H "Content-Type: application/json" \
  -d '{"nome":"Matemática", "carga_horaria":40}'

    # Deletar materia por ID: novamente mude o numero no final conforme o id da materia /1
    ...
    curl -X DELETE http://localhost:3000/materias/1
```

  ### 💻 Teste da Tabela  <a name="teste-tabela"></a>
Exemplo
```js
docker ps 
ira listar todos os containers assim precisando copiar o nome que contenha a porta 5433:5432

# em seguida de o comando "docker exec -it  prova-main-db-1 bash" para se conectar a tabela
# apos isso execute "psql -U postgres -d escola" e ira ficar no chat "escola=#"
# e assim escrevendo "\dt" ira mostrar uma tabela com Alunos, Professores e Materia
```
   ### tabela
![Tabela](./tabela.jpeg)


apos isso voce ira conseguir acessar as informações de cada uma com o comando "SELECT * FROM "Alunos";"
precisando so trocar Alunos por professor ou materia.