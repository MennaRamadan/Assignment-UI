import { Component,OnInit, Input } from '@angular/core';
import {ExampleService} from '../services/example.services';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs';
import { Exap } from '../models/example';
import { Lessn } from '../models/lesson';


@Component({
	selector: 'example-Data',
	templateUrl: './example.component.html',
    providers: [ExampleService],
    styleUrls: ['./example.component.sass']
})


export class exampleComponent {

    @Input() less: Lessn;
    exap : Exap;
    
    constructor (private exampleService : ExampleService){}

      ngOnInit(){
     }


      getExampleByLesson(exampleId){
        this.exampleService.getExampleByLesson(exampleId).subscribe(data =>{
            this.exap =  = data
        });
     }
}




