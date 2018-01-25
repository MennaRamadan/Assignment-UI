import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class LangugesService{

    constructor(private http: Http) {}
       data:any;
       getLanguages() {
           
           return this.http.get('http://127.0.0.1:3000/language').map(res =>
                res.json()
           );
        };
        
        
        postLanguage(lang){
            //return this.http.post('http://127.0.0.1:3000/language').map((response:Response) => response.json());
        };
}
