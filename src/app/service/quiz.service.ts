import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../model/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  // public getQuizQuestion(): Observable<Question[]> {
  //   return this.http.get<Question[]>("https://raw.githubusercontent.com/ShaneWatson7961/quizData/main/quizInterview.json");
  // }

  public getQuizQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>("http://localhost:3000/question");
  }
}