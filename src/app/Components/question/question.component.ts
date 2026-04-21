import { ChangeDetectorRef, Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { AllServiceService } from '../../AllService/all-service.service';
import { SharedService } from '../../Services/Shared/shared.service';
import { AppConstants } from '../../Services/Constants/app.constant';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrl: './question.component.css',
    standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule,MatToolbarModule,MatMenuModule,
    MatIconModule,MatSelectModule,FormsModule,MatProgressSpinnerModule,MatTableModule
  ],
})

export class QuestionComponent {
  @Input() value: String = '';
  question: string = '';
  optionA: string = '';
  optionB: string = '';
  optionC: string = '';
  optionD: string = '';
  optionE: string = '';
  optionF: string = '';
  correctOption: string = '';
  optionTypeId: string = '';
  questionLevelId: string = '';
  isActive: string = '';
  insertedBy: string = 'SYSTEM';
  updatedBy: string = 'SYSTEM';

  constructor(private service: AllServiceService, private sharedService:SharedService,
    private cdr: ChangeDetectorRef
  ) {}

  saveQuestion(){
      let filter: any = {}
      
      filter['question'] = this.question;
      filter['optionA'] = this.optionA;
      filter['optionB'] = this.optionB;
      filter['optionC'] = this.optionC;
      filter['optionD'] = this.optionD;
      filter['optionE'] = this.optionE;
      filter['optionF'] = this.optionF;
      filter['is_active'] = this.isActive ? this.isActive : AppConstants.ACTIVE;
      filter['correctOption'] = this.correctOption;
      filter['optionTypeId'] = this.optionTypeId;
      filter['questionLevelId'] = this.questionLevelId;
      filter['insertedBy'] = this.insertedBy;
      filter['updatedBy'] = this.updatedBy;
      {
}
      this.service.saveQuestions(filter).then(
        res => res.json()
      ).then(
        json => {
          this.sharedService.success(json.message);
        }
      );
  }

  clearButton(){}
}
