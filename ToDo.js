function ToDoCtrl($scope) {
//Denne function blev aldrig kaldt, for i din index.html stod der ng-controller="ToDoCtrl", men her hed den "TodoCtrl". Store om små bogstaver betyder noget.
  
  $scope.todos = [
    {text:'Learn AngularJS', done:false},         
    {text: 'Build an app', done:false}
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
        // Her var der en variabel, der hed "underscore", som jeg går ud fra blev brugt som slags en variabel for $scope.todos --> _.filter(...
            return !todo.done;
        });
    };
}