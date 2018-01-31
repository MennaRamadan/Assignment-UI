import { TestBed, async , inject } from '@angular/core/testing';
import { addExampleToLessonComponent } from './addExampleToLesson.component';

describe('addExampleToLessonComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        addExampleToLessonComponent
      ],
    }).compileComponents();
  }));


  it('should contain addExampleToLesson',
      inject([addExampleToLessonComponent], (service: addExampleToLessonComponent) => {
         expect(service.addExampleToLesson).toBeTruthy(); 
      }
  ));

  it('should contain listAllExamples',
  inject([addExampleToLessonComponent], (service: addExampleToLessonComponent) => {
     expect(service.listAllExamples).toBeTruthy(); 
  }
));

it('should contain listAllLessons',
inject([addExampleToLessonComponent], (service: addExampleToLessonComponent) => {
   expect(service.listAllLessons).toBeTruthy(); 
    }
)); 
});
