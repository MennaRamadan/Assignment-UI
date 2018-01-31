import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class ExampleService{

    constructor(private http: Http) {}
      
       getExamples() {
           return this.http.get('http://127.0.0.1:3000/example').map((response:Response) => response.json());
        };
        
        
        postExample(_exampleName, _exampleDescription){
            var data = {
                name: _exampleName,
                description: _exampleDescription
            };
            return this.http.post('http://127.0.0.1:3000/example', data).map((response:Response) => response.json());
        };
        
        
        addExampleToLesson(_exampleId, _lessonId){
            var data = {
                exampleId : _exampleId, 
                lessonId: _lessonId
            };
          return this.http.put('http://127.0.0.1:3000/lesson/example/add',data).map((response:Response) => response.json());
        };
        
        getExampleByLesson(exampleId){
            return this.http.get('http://127.0.0.1:3000/example/:exampleId').map((response:Response) => response.json());
        };
}
