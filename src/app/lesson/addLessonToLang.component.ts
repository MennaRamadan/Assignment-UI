import { Component,OnInit, Input} from '@angular/core';
import {LessonService} from '../services/lesson.service';
import {LangugesService} from '../services/languages.service';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs';
import { Lessn } from '../models/lesson';
import { Lang } from '../models/language';

@Component({
	selector: 'add-lesson-Lang',
	templateUrl: './addLessonToLang.component.html',
    providers: [LessonService,LangugesService],
    styleUrls: ['./lesson.component.sass']
})


export class addLessonToLangComponent {

    lessons : Lessn[];
    languages : Lang[];
    
    
    constructor (private lessonService : LessonService, private langugesService: LangugesService){}
   
    ngOnInit(){
     }
     
     listAllLessons(){
       //this.lessons =  this.lessonService.getLessons();
     }
     
     listAllLanguages(){
        //this.languages = this.langugesService.getLanguages();
     }
     
     addLessonToLang(){
        //this.lessonService.addLessonToLanguage(lessonId, languageId);
     }

}



