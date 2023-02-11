import { Injectable } from '@angular/core';
import { WebServiceService } from './web-service.service';

@Injectable({
  providedIn: 'root'
})
export class AllocClassroomServiceService {

  constructor(private webService:WebServiceService) { }

  allocateClassroom(allocatedClassroom:any){
    return this.webService.post('allocate-classroom',allocatedClassroom)
  }

  getAllocateClassroom(){
    return this.webService.get('allocate-classroom');
  }
  
  delete(id:any){
    return this.webService.delete('allocate-classroom',id) 
 }
}
