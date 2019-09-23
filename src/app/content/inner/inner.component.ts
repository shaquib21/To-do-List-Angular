import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.css']
})
export class InnerComponent implements OnInit {
  a="";
  b="";
  todos=[
    {
      label: "Bring Milk",
      done: true,
      priority: 3
    },
    {
      label: "Drink Milk",
      done: false,
      priority: 2
    },
    {
      label: "Boil Milk",
      done: true,
      priority: 1
    }
  ];

  ngOnInit() {
  }
  addTodo(newTodoLabel){
    var newTodo = {
      label : newTodoLabel,
      priority : 1,
      done : false
    };
    this.todos.push(newTodo);

  }
  deleteTodo(todo){
    this.todos = this.todos.filter( t => t.label !== todo.label);
  }
  

  } 
