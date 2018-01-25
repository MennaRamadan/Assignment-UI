import { Component,OnInit } from '@angular/core';
import {LangugesService} from '../services/languages.service';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs';
import { Lang } from '../models/language';


@Component({
	selector: 'language-List',
	templateUrl: './language.component.html',
    providers: [LangugesService],
    styleUrls: ['./language.component.sass']
})


export class languageComponent {


    langs: any;
    
    constructor (private languageService : LangugesService){}
   
   
     ngOnInit(){
         this.languageService.getLanguages().subscribe(data =>{
             debugger;
            this.langs = data
        });
     }

}



