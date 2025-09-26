import { inject } from "@angular/core";
import { CanActivateFn, Router, UrlTree } from "@angular/router";
import { AuthService } from "../services/auth.service";

export const notAuthorizedGuard: CanActivateFn = (): boolean | UrlTree => {
  // Add your code here
  const authService = inject(AuthService);
  const router = inject(Router);

  return !authService.isAuthorised ? true : router.createUrlTree(["/courses"]);
};
