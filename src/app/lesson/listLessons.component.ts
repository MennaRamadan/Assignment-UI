import { Component,OnInit, Input} from '@angular/core';
import {LessonService} from '../services/lesson.service';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs';
import { Lessn } from '../models/lesson';
import { Lang } from '../models/language';
import {Exap} from '../models/example'

@Component({
	selector: 'list-lesson',
	templateUrl: './listLessons.component.html',
    providers: [LessonService],
    styleUrls: ['./lesson.component.sass']
})


export class listLessonComponent {

    lessons : Lessn[];
    
    constructor (private lessonService : LessonService){}
   
    ngOnInit(){
            this.lessonService.getLessons().subscribe(data =>{
               this.lessons = data
           });
     }
     
    //  listAllLessons(){
    //      this.lessonService.getLessons().subscribe(data =>{
    //         this.lessons = data
    //     });
    //  }

}



