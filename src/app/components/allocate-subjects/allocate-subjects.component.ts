import { Component, OnInit } from '@angular/core';
import { Subjects } from 'src/app/models/subjects';
import { Teachers } from 'src/app/models/teachers';
import { AllocSubjServiceService } from 'src/app/services/alloc-subj-service.service';
import { SubjectServiceService } from 'src/app/services/subject-service.service';
import { TeacherServiceService } from 'src/app/services/teacher-service.service';

@Component({
  selector: 'app-allocate-subjects',
  templateUrl: './allocate-subjects.component.html',
  styleUrls: ['./allocate-subjects.component.css']
})
export class AllocateSubjectsComponent implements OnInit {

  constructor(
    private teacherService:TeacherServiceService, 
    private subjectService:SubjectServiceService,
    private allocateSub: AllocSubjServiceService) { }

  teachers: Teachers[] = [];
  subjects : Subjects[]=[];
  selectedTeacherID :string = '';
  selectedSubjectID :string = '';
  allocatedSubjects :any=[]


  ngOnInit(): void {
    this.getTeachers();
    this.getSubject();
    this.getAllocatedSubjects()
  }

  onSelect(val:any){
    this.selectedTeacherID = val;
    console.log(val);
    
  }

  allocateSubject(){
    this.allocateSub.allocateSubject(
      {
        teacherID:this.selectedTeacherID,
        subjectID : this.selectedSubjectID
      }
    ).subscribe((data:any)=>{
      let name = data.classroomName;
      alert(`inserted successfully`)
      this.getAllocatedSubjects();   
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

  getTeacherByID(id:any){
    this.teacherService.getTeacherById(id)
      .subscribe((data:any)=>{
        return data;        
      })
  }

  onSelectSub(val:any){
    this.selectedSubjectID = val;
  }

  getSubject(){
    this.subjects=[];
    this.subjectService.getSubject()
      .subscribe((data:any)=>{
        this.subjects=data;
      })
  }

  getTeachers(){
    this.teachers=[];
    this.teacherService.getTeacher()
      .subscribe((data:any)=>{
        this.teachers=data;        
      })
  }

  deleteAllocatedSubject(id:any){
    this.allocateSub.delete(id)
    .subscribe((data:any)=>{console.log(data);})
    alert('Deleted Successfully!')
    this.getAllocatedSubjects();
  }

}
