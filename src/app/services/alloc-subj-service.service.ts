import { Injectable } from '@angular/core';
import { WebServiceService } from './web-service.service';

@Injectable({
  providedIn: 'root'
})
export class AllocSubjServiceService {

  constructor(private webService:WebServiceService) { }

  allocateSubject(allocatedSubject:any){
    return this.webService.post('allocate-subject',allocatedSubject)
  }

  getAllocateSubject(){
    return this.webService.get('allocate-subject');
  }

  delete(id:any){
    return this.webService.delete('allocate-subject',id) 
 }

  getAllocateSubjectById(id:any){
    return this.webService.getById('allocate-subject',id);
  }
}
