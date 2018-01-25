import { Component,OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs';
import {LoginService} from '../services/login.service';


@Component({
	selector: 'login-screen',
	templateUrl: './login.component.html',
    providers: [LoginService],
    styleUrls: []
})


export class loginComponent {


    token: any;
    
    constructor (private loginService : LoginService){}
   
   
     ngOnInit(){
     }

     login(username){
        this.loginService.loginWithUserName().subscribe(data =>{
                debugger;
            this.token = data
        });
     }

}



