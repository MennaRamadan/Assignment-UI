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
    public key: string = "secure_key";
    
    constructor (private loginService : LoginService){}
   
   
     ngOnInit(){
     }

     login(username){
        this.loginService.loginWithUserName().subscribe(data =>{
                debugger;
            this.token = data
        });
        localStorage.setItem(this.key, JSON.stringify(this.token));
     }

}



