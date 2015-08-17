var ToDo = (function () {
	var tableName = 'todo';
	var db;

	function ToDo() {
		db = new StorageManager(tableName);
		this.getDB = function () {
			return db;
		};
	};

	ToDo.prototype.insertToDo = function (name, done) {
		done = typeof done === 'undefined' ? false : done;
		var id = this.getDB().addData({
			'name': name,
			'done': done
		});
		return id;
	};

	ToDo.prototype.getToDos = function () {
		return this.getDB().getFullData();
	};

	ToDo.prototype.updateToDo = function (id, name, done) {
		return this.getDB().editData(id, name, done);
	};

	return ToDo;
})();