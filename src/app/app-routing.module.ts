import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllocateClassroomComponent } from './components/allocate-classroom/allocate-classroom.component';
import { AllocateReportComponent } from './components/allocate-report/allocate-report.component';
import { AllocateSubjectsComponent } from './components/allocate-subjects/allocate-subjects.component';
import { ClassroomComponent } from './components/classroom/classroom.component';
import { HomeComponent } from './components/home/home.component';
import { StudentsComponent } from './components/students/students.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { TeachersComponent } from './components/teachers/teachers.component';

const routes: Routes = [

{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'home', component:HomeComponent },
{ path: 'teacher', component:TeachersComponent },
{ path: 'student', component:StudentsComponent },
{ path: 'classroom', component:ClassroomComponent },
{ path: 'subjects', component:SubjectsComponent },
{ path: 'allocate-classroom', component:AllocateClassroomComponent },
{ path: 'allocate-subjects', component:AllocateSubjectsComponent },
{ path: 'reports', component:AllocateReportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
