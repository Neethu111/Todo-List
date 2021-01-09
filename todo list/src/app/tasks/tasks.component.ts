import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import sweetalert from 'sweetalert2';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';




@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  items: [];
  constructor(private taskservice: TaskService) { }

  ngOnInit(): void {
    this.loadtask();
  }
  
  loadtask(){
    this.taskservice.gettask()
      .subscribe((data: any) => {

        this.items = data.items;
      })
  }

  deleteUser(id){
    this.taskservice.deleteUser(id)
    .subscribe((data:any)=>{
      sweetalert.fire("Task deleted successfully!", data.message, "success");
      this.loadtask();
      

    },data=>{
      sweetalert.fire(" failed", "You provided invalid message", "error");
    }
    );
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }
  

}
