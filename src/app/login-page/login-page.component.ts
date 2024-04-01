import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  //For FORM Builder.
  // myForm: FormGroup;

  // constructor(private fb: FormBuilder){
  //   this.myForm = this.fb.group({
  //     name: '',
  //     email: ''
  //   });
  // }
  // onSubmit() {
  //   // Handle form submission
  //   console.log(this.myForm.value);
  // }

  //For new LOGIN Form
  signupUser: any[] = [];
  signupObj: any = {
    userName: '',
    email: '',
    password: ''
  };
  loginObj: any = {
    email: '',
    password: ''
  }

  onSignUp(){
    const isUserExist = this.signupUser
                        .find(user => user.email == this.signupObj.email 
                                      // && user.password == this.loginObj.password
                                      );
    if(isUserExist == undefined){
      this.signupUser.push(this.signupObj);
      console.log(this.signupUser);
      localStorage.setItem('signupUser', JSON.stringify(this.signupUser));
      this.signupObj = {
        userName: '',
        email: '',
        password: ''
      };
      alert('Signed up successfully!!!');
    }
    else alert('User already exist!!')
  }

  onLogin(){
    const isUserExist = this.signupUser
                        .find(user => user.email == this.loginObj.email 
                                      && user.password == this.loginObj.password);
    if(isUserExist != undefined){
      alert("Welcome back");
      this.loginObj = {
        email: '',
        password: ''
      }
    }
    else alert('Wrong credentials');
  }

  //if refreshed need to load again in signupUser
  ngOnInit(): void {
    const localData = localStorage.getItem('signupUser');
    if(localData != null){
      this.signupUser = JSON.parse(localData);
    }
  }

}
