import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QuizService } from './service/quiz.service';
import { Question } from './model/quiz.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment-tech';

  public quizForm: FormGroup;
  public quizQuestions: Question[];

  constructor(private formBuilder: FormBuilder, private service: QuizService) { }

  public ngOnInit(): void {
    this.quizForm = this.formBuilder.group({
      question: [''],
      subQue: [''],
    });
    this.fetchQuizData();
  }

  private fetchQuizData(): void {
    this.service.getQuizQuestions().subscribe((res) => {
      this.quizQuestions = res;
    }, (err) => {
      console.log(err);
    });
  }
}