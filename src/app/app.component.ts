import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  title = 'openid-connect';
  isAuthenticated: boolean = false;

  constructor(private authService: AuthService) {
    console.log('this.authService',this.authService);
    this.authService.isAuthenticated$.subscribe(value => {
      this.isAuthenticated = value;
      if(!value) {
        this.login();
      }
    });
  }

  login() { 
    this.authService.login();
    this.isAuthenticated = true;
    console.log('this.authService',this.authService); 
  }

  logout() { 
    this.authService.logout();
    this.isAuthenticated = false;
  }

  refresh() { this.authService.refresh(); }
  reload() { window.location.reload(); }
  clearStorage() { localStorage.clear(); }
}