import { TestBed, async , inject } from '@angular/core/testing';
import { addExampleComponent } from './addExample.component';

describe('addExampleComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        addExampleComponent
      ],
    }).compileComponents();
  }));


  it('should contain addNewExample',
      inject([addExampleComponent], (service: addExampleComponent) => {
         expect(service.addNewExample).toBeTruthy(); 
      }
  ));
});
