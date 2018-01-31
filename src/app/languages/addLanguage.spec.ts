import { TestBed, async , inject } from '@angular/core/testing';
import { addLanguageComponent } from './addLanguage.component';

describe('addLanguageComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        addLanguageComponent
      ],
    }).compileComponents();
  }));


  it('should contain addNewLanguage',
      inject([addLanguageComponent], (service: addLanguageComponent) => {
         expect(service.addNewLanguage).toBeTruthy(); 
      }
  ));
});
