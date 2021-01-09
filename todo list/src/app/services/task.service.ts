import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseUrl="http://localhost:3000"

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }
  add(label)
    {
        return this.http.post(baseUrl+"/users/additem",{label});
    }
    gettask()
    {
        return this.http.get(baseUrl+"/users/gettodos");
    }
    deleteUser(id)
    {
      return this.http.delete(baseUrl+"/users/"+id);
    }
}
