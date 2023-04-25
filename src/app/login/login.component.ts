import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error = "";
  success = "";
  email = ""
  password = ""

  emptyFields () {
    if(this.email === "" || this.password === "")
      return true
    return false
  }
  login () {
    const correctEmail = "bilal@gmail.com";
    const confirmPassword = "123";
    if(this.email === correctEmail && confirmPassword === this.password){
      this.success = "You have successfully logged in"
      this.error = ""
      this.email = ""
      this.password = "";
    }
    else{
      this.error = "Invalid credentials"
      this.success = ""
    }
  }

  getColor () {
    if(this.error){
      return 'red'
    }
  }
}


