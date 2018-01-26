import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class ExampleService{

    constructor(private http: Http) {}
      
       getExamples() {
           return this.http.get('http://127.0.0.1:3000/example').map((response:Response) => response.json());
        };
        
        
        postExample(_example){
            return this.http.post('http://127.0.0.1:3000/example').map((response:Response) => response.json());
        };
        
        
        addExampleToLesson(){
          return this.http.put('http://127.0.0.1:3000/lesson/example/add').map((response:Response) => response.json());
        };
        
        getExampleByLesson(exampleId){
            return this.http.get('http://127.0.0.1:3000/example/:exampleId').map((response:Response) => response.json());
        };
}
