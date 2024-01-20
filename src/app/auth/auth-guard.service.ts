import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable, tap } from 'rxjs';

@Injectable()
export class AuthGuard {

  constructor(private authService: AuthService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> {
    return this.authService.canActivateProtectedRoutes$
      .pipe(tap(x => console.log('You tried to go to ' + state.url + ' and this guard said ' + x)));
  }

}
