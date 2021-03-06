import { Component,OnInit } from '@angular/core';
import {LangugesService} from '../services/languages.service';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs';
import { Lang } from '../models/language';


@Component({
	selector: 'add-language',
	templateUrl: 'addLanguage.component.html',
    providers: [LangugesService],
    styleUrls: ['./language.component.sass']
})


export class addLanguageComponent {


    lang: Lang;
    
    constructor (private languageService : LangugesService){}
   
   
     ngOnInit(){
     }
     
     
     addNewLanguage(name, title, introduction){
        this.languageService.postLanguage(name, title, introduction).subscribe(data =>{
            console.log(data);
        });
     }

}



