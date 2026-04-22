import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { QuestionComponent } from './Components/question/question.component';
import { ShowQuestionsComponent } from './Components/show-questions/show-questions.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone:true,
    imports: [MatToolbarModule, QuestionComponent
      ,ShowQuestionsComponent,RouterOutlet ,CommonModule],
})
export class AppComponent {
  title = 'ems-ui-local';
}
