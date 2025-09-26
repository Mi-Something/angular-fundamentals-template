import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { UserService, User } from "./user.service";

@Injectable({
  providedIn: "root",
})
export class UserStoreService {
  private name$$ = new BehaviorSubject<string | null>(null);
  private isAdmin$$ = new BehaviorSubject<boolean>(false);

  name$: Observable<string | null> = this.name$$.asObservable();
  isAdmin$: Observable<boolean> = this.isAdmin$$.asObservable();

  constructor(private userService: UserService) {}

  getUser() {
    this.userService
      .getUser()
      .pipe(
        tap((user: User) => {
          this.name$$.next(user.name);
          this.isAdmin$$.next(user.isAdmin);
        })
      )
      .subscribe();
    // Add your code here
  }

  get isAdmin() {
    return this.isAdmin$$.getValue();
    // Add your code here. Get isAdmin$$ value
  }

  set isAdmin(value: boolean) {
    this.isAdmin$$.next(value);
    // Add your code here. Change isAdmin$$ value
  }
}
