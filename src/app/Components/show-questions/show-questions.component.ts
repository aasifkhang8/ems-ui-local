import { ChangeDetectorRef, Component } from '@angular/core';
import { AllServiceService } from '../../AllService/all-service.service';
import { SharedService } from '../../Services/Shared/shared.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-show-questions',
  templateUrl: './show-questions.component.html',
  styleUrl: './show-questions.component.css',
  standalone:true,
  imports:[MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule,MatToolbarModule,MatMenuModule,
      MatIconModule,MatSelectModule,FormsModule,MatProgressSpinnerModule,MatTableModule]
})
export class ShowQuestionsComponent {
  
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
    insertedBy: string = '';
    updatedBy: string = '';

    questionsList: any;
  
    constructor(private service: AllServiceService, private sharedService:SharedService,
      private cdr: ChangeDetectorRef
    ) {}

    ngOnInit(){
      this.findByTempQuestionsId();
    }

    findByTempQuestionsId(){
    let filter: any = {};
    filter['id'] = '1';
    this.service.findByTempQuestionsId(filter)
      .then(res => res.json())
      .then(json => {
        this.questionsList = json.data;
        console.log(this.questionsList);
        // this.cdr.markForCheck();
      });
    }
}
