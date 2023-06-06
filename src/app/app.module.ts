import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexComponent } from './components/index/index.component';
import { TeacherFeedComponent } from './components/teacher-feed/teacher-feed.component';
import { StudentFeedComponent } from './components/student-feed/student-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    TeacherFeedComponent,
    StudentFeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
