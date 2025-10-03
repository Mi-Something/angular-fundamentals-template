import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import * as CoursesActions from "./courses.actions";
import { CoursesService } from "@app/services/courses.service";

@Injectable()
export class CoursesEffects {
  constructor() {}

  // Add your code here
}
