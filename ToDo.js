function ToDoCtrl($scope) {
  
  $scope.todos = [
    {text:'Handin', done:false},         
    {text: 'Shopping', done:false}
  ];
  
  $scope.getTotalTodos = function () {
    return $scope.todos.length;
  };
  
  
  $scope.addTodo = function () {
    $scope.todos.push({text:$scope.formTodoText, done:false});
    $scope.formTodoText = '';
  };

    $scope.clearCompleted = function () {
        $scope.todos = $scope.todos.filter(function(todo){
            return !todo.done;
        });
    };
}