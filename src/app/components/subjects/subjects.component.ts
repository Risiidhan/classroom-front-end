import { Component, OnInit } from '@angular/core';
import { SubjectServiceService } from 'src/app/services/subject-service.service';
import { Subjects } from 'src/app/models/subjects';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  constructor(private subjectService : SubjectServiceService) { }

  subjects : Subjects[]=[];
  idOfSubjectToEdit : string = '';
  subjectToUpdate:any=[{}];


  ngOnInit(): void {
    this.getSubject()
  }

  addSubject(form:any){
    let subjectName = form.subject;

    this.subjectService.addSubject(
      {subjectName:subjectName}
      )
      .subscribe((data:any)=>{
          let name = data.subjectName;
          alert(`inserted ${name} successfully`)
          this.getSubject();   
          form.subject='';
      })
  }

  editSubject(id:any){
    this.idOfSubjectToEdit = id
    this.getSubByID();

  }

  updateSubject(form:any){
    if(!this.idOfSubjectToEdit){
      return alert('Please select an edit option to update')
    }

    this.subjectService.updateSubject(
      this.idOfSubjectToEdit,
      {subjectName:form.subject}
    )
      .subscribe((data:any)=>{
        this.getSubject();
        this.idOfSubjectToEdit = '';
      })

  }


  deleteSubject(id:any){
    this.subjectService.deleteSubject(id)
      .subscribe((data:any)=>{console.log(data);})
      alert('Deleted Successfully!')
      this.getSubject();
  }


  getSubByID(){
    this.subjectToUpdate=[]

    this.subjectService.getSubjectById(this.idOfSubjectToEdit)
      .subscribe((data:any)=>{
        this.subjectToUpdate=data;
      })
  }

  getSubject(){
    this.subjects=[];
    this.subjectService.getSubject()
      .subscribe((data:any)=>{
        this.subjects=data;
      })
  }

}
