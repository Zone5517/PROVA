const express = require('express');
const app = express();
const db = require('./APP/config/database');
db.sync();
const alunoController = require('./APP/controllers/alunoController');
const alunoRoutes = require('./APP/routes/alunoRoutes'); // Importando as rotas de aluno
const professorRoutes = require('./APP/routes/professorRoutes'); // Importando as rotas de professor
const materiaRoutes = require('./APP/routes/materiaRoutes'); // Importando as rotas de matéria

app.use(express.json());

app.get('/', (req, res) => res.send('API da Escola 🚀'));

// Usando as rotas
app.use('/alunos', alunoRoutes);
app.use('/professores', professorRoutes);
app.use('/materias', materiaRoutes);
app.use('/api', alunoRoutes);

// Testando a conexão com o banco de dados
const sequelize = require('./APP/config/database');
sequelize.authenticate()
  .then(() => console.log('Conectado ao PostgreSQL'))
  .catch(err => console.error('Erro ao conectar ao banco de dados:', err));

// Iniciando o servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
