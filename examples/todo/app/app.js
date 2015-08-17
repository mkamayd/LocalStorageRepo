/// <reference path="../typings/angularjs/angular.d.ts"/>
var myApp = angular.module('ToDoList', []);

myApp.controller('ToDoMainController', function ($scope) {
	var todObj = new ToDo();
	$scope.todoItem = {
		'name': '',
		'done': false
	};
	$scope.todoList = todObj.getToDos();
	$scope.addToDo = function () {
		var id = null;
		if ($scope.todoItem.name !== '') {
			id = todObj.insertToDo($scope.todoItem.name, $scope.todoItem.done);
			$scope.todoList.push({
				'id': id,
				'name': $scope.todoItem.name,
				'done': $scope.todoItem.done
			});
			$scope.todoItem.name = '';
		}
	};
	/**
	 * Method responsible of updating a single item in the todoList
	 * @param {object} item - the complete item to perform the update
	 */
	$scope.updateItem = function (item) {
		var result = todObj.updateToDo(item.id, {
			'id': item.id,
			'name': item.name,
			'done': item.done
		});
		if(result){
			Materialize.toast('Changes saved', 3000);
		}
	};
});

//window.onload = function () {
//
//};