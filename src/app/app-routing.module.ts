import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//component
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



const routes : Routes = [
  { path: '', pathMatch: 'full', component:languageComponent },
  { path: 'langauges', pathMatch: 'full', component:languageComponent },
  { path: 'lesson', pathMatch: 'full', component:lessonComponent },  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
})
export class AppRoutingModule { }