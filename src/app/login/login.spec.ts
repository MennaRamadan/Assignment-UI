import { TestBed, async , inject } from '@angular/core/testing';
import { loginComponent } from './login.component';

describe('loginComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        loginComponent
      ],
    }).compileComponents();
  }));


  it('should contain login',
      inject([loginComponent], (service: loginComponent) => {
         expect(service.login).toBeTruthy(); 
      }
  ));
});
