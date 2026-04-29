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

    
// Timer variables
  timeLeft: number = 3600; // 1 hour in seconds
  displayTime: string = '01:00:00';
    
    data = {
    a: { items: [{ id: 1, name: 'alpha' }, { id: 2, name: 'beta' }
      ,{id: 3, name: 'gamma' }, { id: 4, name: 'delta' },{ id: 5, name: 'epsilon' }, { id: 6, name: 'zeta' }
    ] },
    b: { items: [{ id: 3, name: 'gamma' }, { id: 4, name: 'delta' }] },
    c: { items: [{ id: 5, name: 'epsilon' }, { id: 6, name: 'zeta' }] }
  };

  selectedItem: any = null;

  
    constructor(private service: AllServiceService, private sharedService:SharedService,
      private cdr: ChangeDetectorRef
    ) {

    }

    ngOnInit(){
      // this.findByTempQuestionsId();
      this.findQuestions();
          this.startTimer();
    }

    findByTempQuestionsId(){
    let filter: any = {};
    filter['id'] = '1';
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

//this one is working
// if (typeof this.MathJax !== 'undefined') {
//       this.MathJax.typeset();
//     } else {
//       console.log(this.MathJax);
//       console.error('MathJax not loaded');
//     }
  }

  selectItem(item: any) {
    this.selectedItem = item;
  }

  startTimer() {
    setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        this.displayTime = this.formatTime(this.timeLeft);
      }
    }, 1000);
  }

  formatTime(seconds: number): string {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${this.pad(h)}:${this.pad(m)}:${this.pad(s)}`;
  }

  pad(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }

  
    findQuestions(){
    let filter: any = {};
    filter['id'] = '1';
    this.service.findQuestions(filter)
      .then(res => res.json())
      .then(json => {
         this.data =  json;
         console.log(json)
      });

       
    }



}
