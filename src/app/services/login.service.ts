import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class LoginService{

    constructor(private http: Http) {}
       data:any;
       loginWithUserName() {
           return this.http.get('http://127.0.0.1:3000/language').map(res =>res.json());
        };
}
