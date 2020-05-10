import { Component, OnInit } from '@angular/core';
import IEmployee from './employee';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeList: IEmployee[];
  editEmployee: boolean;
  editEmpIndex: number =null;

  constructor() { }

  editEmp(index:number):void{
    this.editEmpIndex = index;
    this.editEmployee = !this.editEmployee;
  }

  updateEmp():void{this.editEmployee = !this.editEmployee;
  }

  ngOnInit(): void {


    this.employeeList = [
      {
        id: 100001,
        firstName: "Ram",
        lastName: "Kirshna",
        Dob: "01/01/2005",
        salary: 87000,
        department: "Project Management",
        city: "Chennai",
        emailId: "ram.krishna@gmail.com"
      },
      {
        id: 100002,
        firstName: "Siva",
        lastName: "Linga",
        Dob: "01/01/2005",
        salary: 87000,
        department: "Project Management",
        city: "Kolkata",
        emailId: "siva.linga@gmail.com"
      },
      {
        id: 100003,
        firstName: "Ganesh",
        lastName: "Sivan",
        Dob: "01/01/2005",
        salary: 87000,
        department: "Project Management",
        city: "Bangalore",
        emailId: "ganesh.sivan@gmail.com"
      },
      {
        id: 100004,
        firstName: "Mary",
        lastName: "Fernandes",
        Dob: "01/01/2005",
        salary: 87000,
        department: "Project Management",
        city: "Mumbai",
        emailId: "mary.fdnes@gmail.com"
      },
      {
        id: 100005,
        firstName: "Abdul",
        lastName: "Mohammed",
        Dob: "01/01/2005",
        salary: 87000,
        department: "Project Management",
        city: "Delhi",
        emailId: "abdul.md@gmail.com"
      }

    ]
  }

}
