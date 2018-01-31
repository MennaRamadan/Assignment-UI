import { TestBed, async , inject } from '@angular/core/testing';
import { addLessonComponent } from './addLesson.component';

describe('addLessonComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        addLessonComponent
      ],
    }).compileComponents();
  }));


  it('should contain addNewLesson',
      inject([addLessonComponent], (service: addLessonComponent) => {
         expect(service.addNewLesson).toBeTruthy(); 
      }
  ));
});
