import { Injectable } from '@angular/core';
import { WebServiceService } from './web-service.service';

@Injectable({
  providedIn: 'root'
})
export class SubjectServiceService {

  constructor(private webService:WebServiceService) { }

  addSubject(subject:any){
    return this.webService.post('subject',subject)
  }

  getSubject(){
    return this.webService.get('subject');
  }

  getSubjectById(id:any){
    return this.webService.getById('subject',id);
  }

  deleteSubject(id:any){
    return this.webService.delete('subject',id)
  }

  updateSubject(id:any, body:any){
    return this.webService.patch('subject',body,id)
  }
}
