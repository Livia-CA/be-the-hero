/**o GET é usado para buscar uma informação no back-end
 * o POST é usado para criar uma informação no back-end
 * o PUT é usado para alterar uma informação o back-end
 * o DELETE é usado para deletar uma informação no back-end
 */

/**TIPOS DE PARÂMETROS
 * QUERY PARAMS: parâmetros nomeados enviados na rota após "?" (Filtros, paginação)  
 * ROUTE PARAMS: parâmetros utilizados para identificar recursos
 * REQUEST BORY: corpo da requisição, utilizando para criar ou alterar
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where()
   */
const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;