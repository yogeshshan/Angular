import { Component, OnInit } from '@angular/core';


export class ToDo {
  constructor(public id : number, public description :string, public done: boolean,public targetDate:Date ) {
   
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toDos = [
    new ToDo(1,'Dancing',false,new Date()),
    new ToDo(1,'Playing',false,new Date())
  ]
}
