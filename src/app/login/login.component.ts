import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isSignUpMode = false;
  
  ngOnInit(): void {
  }

  toggleMode() {
    this.isSignUpMode = !this.isSignUpMode;
  }
}
