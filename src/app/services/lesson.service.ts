import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class LessonService{

    constructor(private http: Http) {}
      
       getLessons() {
            return this.http.get('http://127.0.0.1:3000/lesson').map((response:Response) => response.json());
        };
        
        
        postLessons(name, descrition, details){
            return this.http.post('http://127.0.0.1:3000/lesson').map((response:Response) => response.json());
        };
        
        
        addLessonToLanguage(lessonId, languageId){
          return this.http.put('http://127.0.0.1:3000/language/lesson/add').map((response:Response) => response.json());
        };
        
        getLessonByLanguage(lessonId){
            return this.http.get('http://127.0.0.1:3000/lesson/${lessonId}').map((response:Response) => response.json());
        };
}
