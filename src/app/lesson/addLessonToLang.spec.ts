import { TestBed, async , inject } from '@angular/core/testing';
import { addLessonToLangComponent } from './addLessonToLang.component';

describe('addLessonToLangComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        addLessonToLangComponent
      ],
    }).compileComponents();
  }));


  it('should contain addLessonToLang',
      inject([addLessonToLangComponent], (service: addLessonToLangComponent) => {
         expect(service.addLessonToLang).toBeTruthy(); 
      }
  ));

  it('should contain listAllLanguages',
      inject([addLessonToLangComponent], (service: addLessonToLangComponent) => {
         expect(service.listAllLanguages).toBeTruthy(); 
      }
  ));

  it('should contain listAllLessons',
      inject([addLessonToLangComponent], (service: addLessonToLangComponent) => {
         expect(service.listAllLessons).toBeTruthy(); 
      }
  ));
});
