import { 
    CanActivate, 
    ActivatedRouteSnapshot, 
    RouterStateSnapshot,
    Router
 } from '@angular/router';
//import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot) {
        if (!this.authService.isAuthenticated) {
            return false;
            console.log("Not authenticated");
        } else {
            return true;
            console.log("Yes authenticated");
        }
    }            
}
/*    canActivate(route: ActivatedRouteSnapshot,
        _state: RouterStateSnapshot) {
            return this.authService.isAuthenticated();
} */


/*                : Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.isAuthenticated()
            .then(
                (authenticated: boolean) => {
                    if (authenticated) {
                        return true;
                    } else {
                        this.router.navigate(['/signin']);
                    }
                }
            );
*/