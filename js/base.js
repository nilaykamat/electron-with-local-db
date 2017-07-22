$(document).ready(function(){
	showTodos();
	$("#btnSubmitTodo").click(function(){
		var todoo = $("#txtToDo").val();
		addTodo(todoo);
	});
});

function redrawTodosUI(todos){
	$("#todolist").html('');
	console.log(todos);
	for(var i = 0; i < todos.length; i++){
		var item = todos[i];
		var list = "<li>";
		list += item.doc.title;
		list += " &nbsp; :: &nbsp;";
		list += item.doc._id;
		list += "</li>";
		$("#todolist").append(list);
	}
}