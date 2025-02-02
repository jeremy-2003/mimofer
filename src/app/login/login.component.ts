import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  loginError: boolean = false;
  hearts: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
  }
  onSubmit() {
    if (this.username === 'Mimofer34' && this.password === 'momimimo15') {
      console.log('Acceso concedido');
      this.router.navigate(['/home']);
      this.loginError = false;
      
    } else {
      console.log('Acceso denegado');
      this.loginError = true;
    }
  }
}