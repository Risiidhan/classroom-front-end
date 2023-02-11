import { Component, OnInit } from '@angular/core';
import { Students } from 'src/app/models/students';
import { AllocSubjServiceService } from 'src/app/services/alloc-subj-service.service';
import { StudentServiceService } from 'src/app/services/student-service.service';

@Component({
  selector: 'app-allocate-report',
  templateUrl: './allocate-report.component.html',
  styleUrls: ['./allocate-report.component.css']
})
export class AllocateReportComponent implements OnInit {

  constructor(private stdService:StudentServiceService,
              private allocateSub: AllocSubjServiceService) { }

  students: Students[] = [];
  allocatedSubjects :any=[]


  selectStudent:any={
    "firstName": "",
    "lastName": "",
    "contactPerson": "",
    "contactNo": null,
    "email": "",
    "dob": "",
    "age": 0,
    "classroomID": "63e5ec5497a29a1c0a381b31",
    "__v": 0,
    "classroomDetails": {
      "_id": "63e5ec5497a29a1c0a381b31",
      "__v": 0,
      "classroomName": ""
    }
  }

  ngOnInit(): void {
    this.getStudents()
    this.getAllocatedSubjects();
  }

  onSelectClass(id:any){
    this.getSubByID(id) 
  }

  getSubByID(id:any){
    this.selectStudent=[]
    this.stdService.getStudentById(id)
      .subscribe((data:any)=>{
        this.selectStudent=data
      })
  }

  getStudents(){
    this.students=[];
    this.stdService.getStudent()
      .subscribe((data:any)=>{
        this.students=data;
      })
  }

  getAllocatedSubjects(){
    let modifiedArr;
    this.allocatedSubjects=[];
    this.allocateSub.getAllocateSubject()
      .subscribe((data:any)=>{
        this.allocatedSubjects=data;        
      })
  }

}
