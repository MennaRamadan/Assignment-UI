import { TestBed, async , inject } from '@angular/core/testing';
import { listExampleComponent } from './listExamples.component';

describe('listExampleComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        listExampleComponent
      ],
    }).compileComponents();
  }));


  it('should contain listAllExamples',
      inject([listExampleComponent], (service: listExampleComponent) => {
         expect(service.ngOnInit).toBeTruthy(); 
      }
  ));
});
