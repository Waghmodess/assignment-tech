import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.css']
})
export class QuizQuestionComponent {
  @Input() question: any;
  @Input() form: FormGroup;
  public selectedQuestion: boolean;
  public selectedSubQuestion: boolean;
}
