import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './Components/question/question.component';
import { ShowQuestionsComponent } from './Components/show-questions/show-questions.component';

const routes: Routes = [
  {
    path:'',
    component:QuestionComponent,
    pathMatch:"full"
  },
  {
    path:'showQuestions',
    component:ShowQuestionsComponent,
    pathMatch:"full"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
