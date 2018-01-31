import { TestBed, async , inject } from '@angular/core/testing';
import { exampleComponent } from './example.component';

describe('exampleComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        exampleComponent
      ],
    }).compileComponents();
  }));


  it('should contain getExampleByLesson',
      inject([exampleComponent], (service: exampleComponent) => {
         expect(service.getExampleByLesson).toBeTruthy(); 
      }
  ));
});
