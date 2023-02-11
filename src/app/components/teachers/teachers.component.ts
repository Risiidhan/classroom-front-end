import { Component, OnInit } from '@angular/core';
import { Teachers } from 'src/app/models/teachers';
import { TeacherServiceService } from 'src/app/services/teacher-service.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  constructor(private teacherService:TeacherServiceService) { }

  teachers: Teachers[] = [];
  idOfTeacherToEdit = '';
  teacherToUpdate:any = [{}]

  ngOnInit(): void {
    this.getTeachers();
  }

  addTeacher(form:any){
    
    this.teacherService.addTeacher(
      {
        firstName: form.firstname,
        lastName: form.lastname, 
        contactNo: form.contactNo, 
        email: form.email, 
      }
      )
      .subscribe((data:any)=>{
          let name = data.firstName + data.lastName;
          alert(`inserted ${name} successfully`)
          this.getTeachers();   
      })
  }

  updateTeacher(form:any){
    if(!this.idOfTeacherToEdit){
      return alert('Please select an edit option to update')
    }

    this.teacherService.updateTeacher(
      this.idOfTeacherToEdit,
      { 
        firstName: form.firstname,
        lastName: form.lastname, 
        contactNo: form.contactNo, 
        email: form.email
      }
    )
      .subscribe((data:any)=>{
        this.getTeachers();
        this.idOfTeacherToEdit = '';
      })
  }

  getTeachers(){
    this.teachers=[];
    this.teacherService.getTeacher()
      .subscribe((data:any)=>{
        this.teachers=data;        
      })
  }

  editTeacher(id:any){
    this.idOfTeacherToEdit = id
    this.getTeacherByID();
  }

  getTeacherByID(){
    this.teacherToUpdate=[]

    this.teacherService.getTeacherById(this.idOfTeacherToEdit)
      .subscribe((data:any)=>{
        this.teacherToUpdate=data;
      })
  }

  deleteTeacher(id:any){
    this.teacherService.deleteTeacher(id)
    .subscribe((data:any)=>{console.log(data);})
    alert('Deleted Successfully!')
    this.getTeachers();
  }

}
