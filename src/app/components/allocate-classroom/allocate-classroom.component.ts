import { Component, OnInit } from '@angular/core';
import { Classroom } from 'src/app/models/classroom';
import { Teachers } from 'src/app/models/teachers';
import { AllocClassroomServiceService } from 'src/app/services/alloc-classroom-service.service';
import { ClassroomServiceService } from 'src/app/services/classroom-service.service';
import { TeacherServiceService } from 'src/app/services/teacher-service.service';

@Component({
  selector: 'app-allocate-classroom',
  templateUrl: './allocate-classroom.component.html',
  styleUrls: ['./allocate-classroom.component.css']
})
export class AllocateClassroomComponent implements OnInit {

  constructor(
    private teacherService:TeacherServiceService, 
    private classService:ClassroomServiceService,
    private allocClassroom : AllocClassroomServiceService) { }

  teachers: Teachers[] = [];
  classroom : Classroom[] = []
  allocatedClassroom :any =[];
  selectedTeacherID = '';
  selectedClassID = '';

  
  ngOnInit(): void {
    this.getTeachers();
    this.getClassroom()
    this.getAllocatedClassroom()
  }

  onSelect(val:any){
    this.selectedTeacherID = val;
  }

  onSelectClass(val:any){
    this.selectedClassID = val;
  }

  getClassroom(){
    this.classroom=[];
    this.classService.getClassroom()
      .subscribe((data:any)=>{
        this.classroom=data;
      })
  }

  getTeachers(){
    this.teachers=[];
    this.teacherService.getTeacher()
      .subscribe((data:any)=>{
        this.teachers=data;        
      })
  }

  getAllocatedClassroom(){
    this.allocatedClassroom=[];
    this.allocClassroom.getAllocateClassroom()
      .subscribe((data:any)=>{
        this.allocatedClassroom=data;
      })
  }

  deleteAllocatedClassroom(id:any){
    this.allocClassroom.delete(id)
    .subscribe((data:any)=>{console.log(data);})
    alert('Deleted Successfully!')
    this.getAllocatedClassroom();
  }

  allocateClassroom(){
    this.allocClassroom.allocateClassroom(
      {
        teacherID:this.selectedTeacherID,
        classroomID : this.selectedClassID
      }
    ).subscribe((data:any)=>{
      let name = data.classroomName;
      alert(`inserted successfully`)
      this.getAllocatedClassroom();   
  })
  }

}
