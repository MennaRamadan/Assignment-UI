import { Component,OnInit, Input} from '@angular/core';
import {LessonService} from '../services/lesson.service';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs';
import { Lessn } from '../models/lesson';
import { Lang } from '../models/language';
import { Exap } from '../models/example';


@Component({
	selector: 'list-example',
	templateUrl: './listExample.component.html',
    providers: [LessonService],
    styleUrls: ['./example.component.sass']
})


export class listExampleComponent {

       exaps : Exap[];
    
    constructor (private lessonService : LessonService){}
   
    ngOnInit(){
            this.lessonService.getLessons().subscribe(data =>{
               this.exaps  = data
           });
     }
     
    //  listAllExamples(){
    //      this.lessonService.getLessons().subscribe(data =>{
    //         this.exaps  = data
    //     });
    //  }

}



