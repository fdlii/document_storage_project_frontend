import { inject } from "@angular/core"
import { LoginService } from "../services/login-service"
import { Router } from "@angular/router"

export const canActivate = () => {
    const isLoggedIn = inject(LoginService).checkAuthStatus();
    console.log('Auth status:', isLoggedIn);
    if (isLoggedIn) {
        return true;
    }

    return inject(Router).createUrlTree(['/login']);
}