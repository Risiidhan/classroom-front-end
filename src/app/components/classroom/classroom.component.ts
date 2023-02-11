import { Component, OnInit } from '@angular/core';
import { Classroom } from 'src/app/models/classroom';
import { ClassroomServiceService } from 'src/app/services/classroom-service.service';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']
})
export class ClassroomComponent implements OnInit {

  constructor(private classService:ClassroomServiceService) { }

  classroom : Classroom[] = []
  idOfClassroomToEdit = '';
  classroomToUpdate:any = [{}]

  ngOnInit(): void {
    this.getClassroom()
  }

  addClass(form:any){
    form = form.value
    let classroomName = form.Classroom;
    
    this.classService.addClassroom(
      {classroomName:classroomName}
      )
      .subscribe((data:any)=>{
          let name = data.classroomName;
          alert(`inserted ${classroomName} successfully`)
          this.getClassroom();   
          form.subject='';
      },
      error => (console.log(error))
      )
  }


  getClassroom(){
    this.classroom=[];
    this.classService.getClassroom()
      .subscribe((data:any)=>{
        this.classroom=data;
      })
  }

  editClassroom(id:any){
    this.idOfClassroomToEdit = id
    this.getSubByID();
  }

  updateClassroom(form:any){
    if(!this.idOfClassroomToEdit){
      return alert('Please select an edit option to update')
    }

    this.classService.updateClassroom(
      this.idOfClassroomToEdit,
      {classroomName:form.Classroom}
    )
      .subscribe((data:any)=>{
        this.getClassroom();
        this.idOfClassroomToEdit = '';
      })

  }


  deleteClassroom(id:any){
    this.classService.deleteClassroom(id)
      .subscribe((data:any)=>{console.log(data);})
      alert('Deleted Successfully!')
      this.getClassroom();
  }

  getSubByID(){
    this.classroomToUpdate=[]

    this.classService.getClassroomById(this.idOfClassroomToEdit)
      .subscribe((data:any)=>{
        this.classroomToUpdate=data;
      })
  }

}
