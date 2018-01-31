import { TestBed, async , inject } from '@angular/core/testing';
import { languageComponent } from './language.component';

describe('languageComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        languageComponent
      ],
    }).compileComponents();
  }));


  it('should contain service inside init',
      inject([languageComponent], (service: languageComponent) => {
         expect(service.ngOnInit).toBeTruthy(); 
      }
  ));
});
