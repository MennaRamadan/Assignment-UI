import { Component,OnInit, Input } from '@angular/core';
import {ExampleService} from '../services/example.services';
import {LessonService} from '../services/lesson.service';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs';
import { Exap } from '../models/example';
import { Lessn } from '../models/lesson';


@Component({
	selector: 'add-example-lesson',
	templateUrl: './addExampleToLesson.component.html',
    providers: [ExampleService,LessonService],
    styleUrls: ['./example.component.sass']
})



export class addExampleToLessonComponent {

    exaps : Exap[];
    lessons:  Lessn[];
    
    constructor (private exampleService : ExampleService, private lessonService: LessonService){}

      ngOnInit(){
     }
     
    listAllLessons(){
      // this.lessons =  this.lessonService.getLessons();
     }
     
     listAllExamples(){
        //this.exaps = this.ExampleService.getExamples();
     }
     
     addExampleToLesson(){
        //this.ExampleService.addExampleToLesson(examplId,lessonId);
     }
}




