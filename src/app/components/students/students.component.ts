import { Component, OnInit } from '@angular/core';
import { Students } from 'src/app/models/students';
import { ClassroomServiceService } from 'src/app/services/classroom-service.service';
import { StudentServiceService } from 'src/app/services/student-service.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {


  constructor(
    private stdService:StudentServiceService,
    private classService: ClassroomServiceService) { }

  students : Students[] = []
  idOfStdToEdit = '';
  stdToUpdate:any = {
    "_id": "",
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
      "classroomName": "C7"
    }
  }
  classroomNames :any=[];
  selectedClassroomID = '';

  ngOnInit(): void {
    this.getStudents()
    this.getClassroomNames()
  }

  onChange(dob:any){
   
    var today = new Date();
    var birthDate = new Date(dob.viewModel.toString());
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    this.stdToUpdate.age = age;
  }

  onSelect(val:any){
    this.selectedClassroomID = val;
  }


  addStudent(form:any){   
    this.stdService.addStudent(
      { firstName: form.firstname,
        lastName: form.lastname, 
        contactPerson: form.contactPerson, 
        contactNo: form.contactNo, 
        email: form.email, 
        dob: form.dob,
        age: form.age,
        classroomID:form.classroom 
      }
      )
      .subscribe((data:any)=>{
        try {
          let name = data.firstName + ' '+ data.lastName
          alert(`inserted ${name} successfully`)
          this.getStudents();   
        } catch (error) {
        }
      })
  }

  getClassroomNames(){
    this.classroomNames=[];
    this.classService.getClassroom()
      .subscribe((data:any)=>{
        this.classroomNames=data;
      })
  }

  getStudents(){
    this.students=[];
    this.stdService.getStudent()
      .subscribe((data:any)=>{
        this.students=data;
      })
  }

  editStudent(id:any){    
    this.idOfStdToEdit = id
    this.getSubByID();
  }

  updateStudent(form:any){
    if(!this.idOfStdToEdit){
      return alert('Please select an edit option to update')
    }

    this.stdService.updateStudent(
      this.idOfStdToEdit,
      { 
        firstName: form.firstname,
        lastName: form.lastname, 
        contactPerson: form.contactPerson, 
        contactNo: form.contactNo, 
        email: form.email, 
        dob: form.dob,
        age: form.age,
        classroomID:form.classroom
      }
    )
      .subscribe((data:any)=>{
        this.getStudents();
        this.idOfStdToEdit = '';
      })

  }


  deleteClassroom(id:any){
    this.stdService.deleteStudent(id)
      .subscribe((data:any)=>{console.log(data)
        this.getStudents();
      })
      alert('Deleted Successfully!')
  }

  getSubByID(){
    this.stdToUpdate=[]
    this.stdService.getStudentById(this.idOfStdToEdit)
      .subscribe((data:any)=>{
        this.stdToUpdate=data;
      })
  }

}
