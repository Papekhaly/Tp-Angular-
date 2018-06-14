import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public email :string 
  public password :string 

  constructor() { }

  ngOnInit() {
    
  }

  
}

