import { Injectable } from '@angular/core';
import { WebServiceService } from './web-service.service';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private webService:WebServiceService) { }

  
  addStudent(student:any){
    return this.webService.post('student',student)
  }

  getStudent(){
    return this.webService.get('student');
  }

  getStudentById(id:any){
    return this.webService.getById('student',id);
  }

  deleteStudent(id:any){
    return this.webService.delete('student',id)
  }

  updateStudent(id:any, body:any){
    return this.webService.patch('student',body,id)
  }
}
