import { TestBed, async , inject } from '@angular/core/testing';
import { listLessonComponent } from './listLessons.component';

describe('listLessonComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        listLessonComponent
      ],
    }).compileComponents();
  }));


  it('should contain service inside init',
      inject([listLessonComponent], (service: listLessonComponent) => {
         expect(service.listAllLessons).toBeTruthy(); 
      }
  ));
});
