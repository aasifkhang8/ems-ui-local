import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { QuestionComponent } from './Components/question/question.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone:true,
    imports: [MatToolbarModule, QuestionComponent],
})
export class AppComponent {
  title = 'ems-ui-local';
}
