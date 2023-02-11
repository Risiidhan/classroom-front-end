import { Injectable } from '@angular/core';
import { WebServiceService } from './web-service.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherServiceService {

  constructor(private webService: WebServiceService) { }

  
  addTeacher(teacher:any){
    return this.webService.post('teacher',teacher)
  }

  getTeacher(){
    return this.webService.get('teacher');
  }

  getTeacherById(id:any){
    return this.webService.getById('teacher',id);
  }

  deleteTeacher(id:any){
    return this.webService.delete('teacher',id)
  }

  updateTeacher(id:any, body:any){
    return this.webService.patch('teacher',body,id)
  }

}
