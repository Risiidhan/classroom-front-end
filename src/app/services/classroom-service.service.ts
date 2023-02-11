import { Injectable } from '@angular/core';
import { WebServiceService } from './web-service.service';

@Injectable({
  providedIn: 'root'
})
export class ClassroomServiceService {

  constructor(private webService:WebServiceService) { }

  addClassroom(classroom:any){
    return this.webService.post('classroom',classroom)
  }

  getClassroom(){
    return this.webService.get('classroom');
  }

  getClassroomById(id:any){
    return this.webService.getById('classroom',id);
  }

  deleteClassroom(id:any){
    return this.webService.delete('classroom',id)
  }

  updateClassroom(id:any, body:any){
    return this.webService.patch('classroom',body,id)
  }
}
