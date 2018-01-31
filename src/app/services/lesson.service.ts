import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class LessonService{

    constructor(private http: Http) {}
      
       getLessons() {
            return this.http.get('http://127.0.0.1:3000/lesson').map((response:Response) => response.json());
        };
        
        
        postLessons(_name, _descrition, _details){
            var data = {
                name: _name,
                descrition: _descrition,
                details: _details
            };
            return this.http.post('http://127.0.0.1:3000/lesson', data).map((response:Response) => response.json());
        };
        
        
        addLessonToLanguage(_lessonId, _languageId){
            var data = {
                lessonId: _lessonId,
                languageId : _languageId
            };
          return this.http.put('http://127.0.0.1:3000/language/lesson/add',data).map((response:Response) => response.json());
        };
        
        getLessonByLanguage(lessonId){
            return this.http.get('http://127.0.0.1:3000/lesson/${lessonId}').map((response:Response) => response.json());
        };
}
