import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { StudentFeedComponent } from './components/student-feed/student-feed.component';
import { TeacherFeedComponent } from './components/teacher-feed/teacher-feed.component';

const routes: Routes = [
  {path: "", component: IndexComponent},
  {path: "student", component: StudentFeedComponent},
  {path: "teacher", component: TeacherFeedComponent},
  {path: "**", pathMatch: 'full', redirectTo: ""},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
