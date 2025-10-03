export interface Course {
  id: string;
  title: string;
  description: string;
  creationDate: string;
  duration: number;
  authors: string[];
}
export interface CoursesError {
  message: string;
  code?: number;
}

export interface CoursesResponse {
  successful: boolean;
  result: Course[];
}
