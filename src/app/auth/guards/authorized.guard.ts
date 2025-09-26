import {
  CanMatchFn,
  Route,
  UrlSegment,
  Router,
  UrlTree,
} from "@angular/router";
import { AuthService } from "../services/auth.service";
import { inject } from "@angular/core";

export const authorizedGuard: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
): boolean | UrlTree => {
  // Add your code here
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isAuthorised ? true : router.createUrlTree(["/login"]);
};
