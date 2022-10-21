import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor() { }

  empcode=""
  name=""
  designation=""
  salary=""
dob=""
phone=""
email=""
company=""
doj=""

status:boolean=false

readValue=()=>{
  let data={
    "empcode":this.empcode,
"name":this.name,
"designation":this.designation,
"salary":this.salary,
"dob":this.dob,
"phone":this.phone,
"email":this.email,
"company":this.company,
"doj":this.doj
  }
  console.log(data)

}


  ngOnInit(): void {
  }

}
