import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Question } from 'src/app/model/quiz.model';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
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
    this.service.getQuizQuestion().subscribe((res) => {
      this.quizQuestions = res;
    }, (err) => {
      console.log(err);
    });
  }
}
