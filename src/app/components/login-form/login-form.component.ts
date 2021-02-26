import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})


export class LoginFormComponent implements OnInit {
  @Input() isLogin: any;
  constructor(private router: Router) { }
  route: any;
  submitEnable: boolean = false;
  emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  namePattern = /^[a-zA-Z]+(?:\s+[a-zA-Z]+)*$/;
  pwdPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  userForm = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPwd: '',
  };
  formError = {
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    confirmPwd: false,
  }
  ngOnInit() {

  }
  validateField(field: string) {
    switch (field) {
      case "firstName": {
        this.formError.firstName = !this.namePattern.test(this.userForm.firstName);
        break;
      };
      case "lastName": {
        this.formError.lastName = !this.namePattern.test(this.userForm.lastName);
        break;
      };
      case "email": {
        this.formError.email = !this.emailPattern.test(this.userForm.email);
        break;
      };
      case "password": {
        this.formError.password = !this.pwdPattern.test(this.userForm.password);
        break;
      };
      case "confirmPwd": {
        this.formError.confirmPwd = false;
        if (this.userForm.password) {
          this.formError.confirmPwd = !(this.userForm.password === this.userForm.confirmPwd);
        }
        break;
      };
    }
    this.enableSubmit();
  }
  enableSubmit() {
    if (this.isLogin) {
      if (this.userForm.email && !this.formError.email && this.userForm.password && !this.formError.password)
        this.submitEnable = true;
      else this.submitEnable = false;
    }
    else {
      this.submitEnable = this.userForm.email && !this.formError.email
        && this.userForm.firstName && !this.formError.firstName
        && this.userForm.lastName && !this.formError.lastName
        && this.userForm.confirmPwd && !this.formError.confirmPwd
        ? true : false;
    }
  }
  login() {
    this.router.navigate(['/home']);
  }
}
