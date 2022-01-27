import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Global } from 'src/app/models/global';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${Global.URL}survey`;
  }

  findByMusiGenre(music_genre: string) {
    return this.http.get<any>(`${this.baseUrl}/${music_genre}`);
  }

  saveSurvey = (survey:any) => {
    return this.http.post<any>(`${this.baseUrl}/save`, survey, { observe: 'response' });
  }

  findAll() {
    return this.http.get<any>(`${this.baseUrl}`);
  }

  countByMusicGenre(music_genre: String) {
    return this.http.get<any>(`${this.baseUrl}/count/${music_genre}`);
  }
  
}
