// var Todo = require('../models/model');
var TodoController = require('../controllers/controller');

module.exports = function(app) {
	app.get('/todo', TodoController.GetTodo);

	app.post('/todo', TodoController.PostTodo);

	app.delete('/todo/:id', TodoController.DeleteTodo);

	app.put('/todo/:id', TodoController.UpdateTodo);
}