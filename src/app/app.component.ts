import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todo } from './model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  todoList :Todo []=[];
  todo:Todo = this.initTodo;



  get initTodo ():Todo{
    return {
      Title:'',
      Id:null
    }
  }

  addTodo():void {
    console.log(this.todo)


    if(this.todo.Id){

    this.todoList = this.todoList.map(o=> {

      if(o.Id == this.todo.Id){
        o.Title = this.todo.Title;
      }
      return o;
    })


      // update logic
    }
    else {
      // create logic
      this.todo.Id = Date.now();
      this.todoList.push({...this.todo});
    }




    console.log(this.todoList)

    this.todo =this.initTodo;
  }

  editTodo(todo:Todo) :void{

    this.todo = {...todo};
  }

  delteTodo(id:number):void {
    this.todoList = this.todoList.filter(o=>o.Id!=id);

  }
}
