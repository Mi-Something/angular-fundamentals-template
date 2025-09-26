import { Injectable } from "@angular/core";
import {
  CanMatchFn,
  Route,
  UrlSegment,
  Router,
  UrlTree,
} from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthorizedGuard {
  // Add your code here
  constructor(private authService: AuthService, private router: Router) {}

  canMatch(route: Route, segments: UrlSegment[]): boolean | UrlTree {
    if (this.authService.isAuthorised) {
      return true;
    }
    return this.router.createUrlTree(["/login"]);
  }
}
