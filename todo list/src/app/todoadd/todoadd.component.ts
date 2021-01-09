import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import sweetalert from 'sweetalert2';




@Component({
  selector: 'app-todoadd',
  templateUrl: './todoadd.component.html',
  styleUrls: ['./todoadd.component.css']
})
export class TodoaddComponent implements OnInit {
  label:"";
  


  constructor(private taskservice: TaskService) { }

  ngOnInit(): void {
  }
  onClick() {
    //alert("login")
    this.taskservice.add(this.label)
    .subscribe((data:any)=>{
      sweetalert.fire("Task added successfully!", data.message, "success");
      

    },data=>{
      sweetalert.fire(" failed", "You provided invalid message", "error");
    }
    );
  }
  onLabelChange(event){
    //lert(event.target.value)
    this.label=event.target.value;
  }


  

}
