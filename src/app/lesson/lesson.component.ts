import { Component,OnInit, Input} from '@angular/core';
import {LessonService} from '../services/lesson.service';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs';
import { Lessn } from '../models/lesson';
import { Lang } from '../models/language';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'lesson-Data',
	templateUrl: './lesson.component.html',
    providers: [LessonService],
    styleUrls: ['./lesson.component.sass']
})


export class lessonComponent {

    @Input() lang: Lang;
    lesson : Lessn;
    
    constructor(private lessonService : LessonService,private activatedRoute: ActivatedRoute) {
        this.activatedRoute.queryParams.subscribe(params => {
              let lessonId = params['_id']; 
           this.lessonService.getLessonByLanguage(lessonId).subscribe(data =>{
                this.lesson = data
            });;
          });
      }
}


