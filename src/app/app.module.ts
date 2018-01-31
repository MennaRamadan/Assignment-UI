import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import {lessonComponent} from './lesson/lesson.component';
import {languageComponent} from './languages/language.component';
import {exampleComponent} from './example/example.component';
import {addLanguageComponent} from './languages/addLanguage.component';
import {addExampleComponent} from './example/addExample.component';
import {addLessonComponent} from './lesson/addLesson.component';
import {listLessonComponent} from './lesson/listLessons.component';
import {listExampleComponent} from './example/listExamples.component';
import {addLessonToLangComponent} from './lesson/addLessonToLang.component';
import {addExampleToLessonComponent} from './example/addExampleToLesson.component';
import {loginComponent} from './login/login.component';

import {ExampleService} from './services/example.services';
import {LangugesService} from './services/languages.service';
import {LessonService} from './services/lesson.service';
import {LoginService} from './services/login.service';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule , Routes } from '@angular/router';

const appRoutes : Routes = [
  { path: 'login', component:loginComponent },
  { path: 'language' , component:languageComponent },
  { path: '' ,redirectTo: '/login', pathMatch:'full' },
  { path: '**' ,redirectTo: '/login', pathMatch:'full' }
  
];

@NgModule({
  declarations: [
    AppComponent,
    lessonComponent,
    languageComponent,
    exampleComponent,
    addLanguageComponent,
    addExampleComponent,
    addLessonComponent,
    listLessonComponent,
    listExampleComponent,
    addLessonToLangComponent,
    addExampleToLessonComponent,
    loginComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule,
    HttpModule,
    // AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ExampleService,LangugesService,LessonService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }


