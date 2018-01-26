import { Component,OnInit, Input } from '@angular/core';
import {ExampleService} from '../services/example.services';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs';
import { Exap } from '../models/example';
import { Lessn } from '../models/lesson';


@Component({
	selector: 'add-example',
	templateUrl: './addExample.component.html',
    providers: [ExampleService],
    styleUrls: ['./example.component.sass']
})


export class addExampleComponent {

    @Input() less: Lessn;
    exap : Exap;
    
    constructor (private exampleService : ExampleService){}

      ngOnInit(){
     }
     
     addNewExample(name, description){
        this.exap.name= name;
        this.exap.description = description
        this.exampleService.postExample(this.exap);
     }
}




