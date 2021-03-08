import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentsComponent } from './components/parent/parents/parents.component';
import { StudentComponentComponent } from './components/student/student-component/student-component.component';
import { TeacherComponentComponent } from './components/teacher/teacher-component/teacher-component.component';

const routes: Routes = [

  {
    path: 'my-student-profile',
    component: StudentComponentComponent
  }
  ,
  {
    path: 'my-teacher-profile',
    component: TeacherComponentComponent
  },
  {
    path: 'my-parent-profile',
    component:ParentsComponent 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
