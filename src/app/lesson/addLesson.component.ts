import { Component,OnInit, Input} from '@angular/core';
import {LessonService} from '../services/lesson.service';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs';
import { Lessn } from '../models/lesson';
import { Lang } from '../models/language';

@Component({
	selector: 'add-lesson',
	templateUrl: './addLesson.component.html',
    providers: [LessonService],
    styleUrls: ['./lesson.component.sass']
})


export class addLessonComponent {

    lessons : Lessn;
    
    constructor (private lessonService : LessonService){}
   
    ngOnInit(){
     }
     
     addNewLesson(name, descrition, details){
          this.lessonService.postLessons(name, descrition, details).subscribe(data =>{
            console.log(data);
        });
     }

}



