import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../auth/services/auth.service';
import { Auth } from 'src/app/auth/interfaces/auth.interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  get auth(){
    return this.authService.auth;
  }
  //auth!: Auth; // undefined

  constructor(private router: Router,
              private authService :AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    this.router.navigate(['./auth']);

  }

}
