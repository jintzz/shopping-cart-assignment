import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [LoginFormComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate form elements', () => {
    component.userForm = {
      firstName: 'xyz1',
      lastName: 'xyz1',
      email: "abc@",
      password: "45ggjj",
      confirmPwd: "hjgk@hg"
    };
    component.validateField('firstName');
    expect(component.formError.firstName).toBeTruthy();
    
    component.validateField('lastName');
    expect(component.formError.lastName).toBeTruthy();
    
    component.validateField('email');
    expect(component.formError.email).toBeTruthy();
    
    component.validateField('password');
    expect(component.formError.password).toBeTruthy();
    
    component.validateField('confirmPwd');
    expect(component.formError.confirmPwd).toBeTruthy();

  });
});
