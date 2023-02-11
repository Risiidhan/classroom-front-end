import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './components/students/students.component';
import { ClassroomComponent } from './components/classroom/classroom.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { AllocateSubjectsComponent } from './components/allocate-subjects/allocate-subjects.component';
import { AllocateClassroomComponent } from './components/allocate-classroom/allocate-classroom.component';
import { AllocateReportComponent } from './components/allocate-report/allocate-report.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    ClassroomComponent,
    TeachersComponent,
    SubjectsComponent,
    AllocateSubjectsComponent,
    AllocateClassroomComponent,
    AllocateReportComponent,
    HomeComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
