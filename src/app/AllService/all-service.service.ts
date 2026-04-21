import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllServiceService {
  
constructor(private http: HttpClient) { }

  public url: string = 'http://localhost:8080/api';
  // public url: string = 'https://emailsenddemo-sit-933999908431.asia-south1.run.app/api';

saveQuestions(data: any) {
    return fetch(this.url + `/tempQuestions/saveTempQuestions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
  }

  findAllTempQuestions(data: any) {
    return fetch(this.url + `/tempQuestions/findAllTempQuestions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
  }
}
