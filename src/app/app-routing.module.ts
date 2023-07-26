import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './compnents/dashboard/dashboard.component';
import { QuizQuestionComponent } from './compnents/quiz-question/quiz-question.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'question', component: QuizQuestionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
