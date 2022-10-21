import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }

fetchData=()=>{
  this.myapi.viewemployee().subscribe(
    (data)=>{
      this.empData=data
    }
  )
}
deleteemployee=(id:any)=>{
  let data={
    "id":id
  }
  this.myapi.deleteemployee(data).subscribe(
    (response)=>{
      alert("Deleted")
    }
  )
  this.fetchData()
}

  empData:any=[]

  ngOnInit(): void {
  }

}
