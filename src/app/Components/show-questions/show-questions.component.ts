declare var MathJax: any;
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
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-questions',
  templateUrl: './show-questions.component.html',
  styleUrl: './show-questions.component.css',
  standalone:true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatToolbarModule, MatMenuModule,
    MatIconModule, MatSelectModule, FormsModule, MatProgressSpinnerModule, MatTableModule,CommonModule]
})
export class ShowQuestionsComponent {
  
    id: string = '';
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

    MathJax: any;

  
    constructor(private service: AllServiceService, private sharedService:SharedService,
      private cdr: ChangeDetectorRef
    ) {

    }

    ngOnInit(){
      this.findByTempQuestionsId();
    }

    findByTempQuestionsId(){
    let filter: any = {};
    filter['id'] = '5';
    this.service.findByTempQuestionsId(filter)
      .then(res => res.json())
      .then(json => {
        // this.questionsList = JSON.stringify(json.data[0]);
         this.questionsList =  json.data[0];
         
         this.optionA=`\\(${this.questionsList.option_a}\\)`;
        console.log(this.questionsList);
        // setTimeout(() => this.MathJax.typeset(), 0);
        // this.cdr.markForCheck();
      });

       
    }

    ngAfterViewInit(){
    if (window && (window as any).MathJax) {
    (window as any).MathJax.typesetPromise();
} else {
    console.warn('MathJax not yet loaded from CDN');
}

// async renderMath() {
//   const mj = (window as any).MathJax;
  
//   if (mj && mj.startup) {
//     // Wait for the library to be ready before calling methods
//     await mj.startup.promise;
//     await mj.typesetPromise();
//   }
// }

if (typeof this.MathJax !== 'undefined') {
      this.MathJax.typeset();
    } else {
      console.log(this.MathJax);
      console.error('MathJax not loaded');
    }
  }



}
