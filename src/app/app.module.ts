import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { QuestionComponent } from './Components/question/question.component';

import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, provideHttpClient  } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { ShowQuestionsComponent } from './Components/show-questions/show-questions.component';

@NgModule({
  declarations: [
  
    
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    AppRoutingModule,
    MatButtonModule,
    MatMenuModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatTableModule,
    AppRoutingModule
  ],
  providers: [MatSnackBar],
  bootstrap: []
})
export class AppModule { }
