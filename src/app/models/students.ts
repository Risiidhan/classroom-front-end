export interface Students {
    _id?: number;
    classroomDetails:{
        classroomID?:string,
        classroomName:string
    },
    firstName: string; 
    lastName: string; 
    contactPerson: string; 
    contactNo: number; 
    email: string; 
    dob: string,
    age?:number,
    classroomID?:string

}
