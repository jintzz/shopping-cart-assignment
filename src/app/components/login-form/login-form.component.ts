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
  emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
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
        console.log('firstName is', this.userForm.firstName);
        this.formError.firstName = this.namePattern.test(this.userForm.firstName) ? false : true;
        break;
      };
      case "lastName": {
        console.log('firstName is', this.userForm.lastName);
        this.formError.lastName = this.namePattern.test(this.userForm.lastName) ? false : true;
        break;
      };
      case "email": {
        console.log('firstName is', this.userForm.email);
        this.formError.email = this.emailPattern.test(this.userForm.email) ? false : true;
        break;
      };
      case "password": {
        console.log('firstName is', this.userForm.password);
        this.formError.password = this.pwdPattern.test(this.userForm.password) ? false : true;
        break;
      };
      case "confirmPwd": {
        console.log('firstName is', this.userForm.confirmPwd);
        this.formError.confirmPwd = this.userForm.password ?
          this.userForm.password === this.userForm.confirmPwd ?
            false : true : false;
        break;
      };
    }
    this.enableSubmit();
  }
  enableSubmit() {
    console.log(this.formError)
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
