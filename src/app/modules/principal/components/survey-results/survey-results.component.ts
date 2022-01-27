import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Global } from 'src/app/models/global';
import { SurveyService } from 'src/app/_services/survery/survey.service';


@Component({
  selector: 'app-survey-results',
  templateUrl: './survey-results.component.html',
  styleUrls: ['./survey-results.component.scss']
})
export class SurveyResultsComponent implements OnInit {
  public music_genre: FormControl;
  public musicGenreList:string[];
  public DEFAULT_OPC:string = 'Todos';
  public preload:boolean;
  public listCount:any[];
  public chart: any;
  displayedColumns:string[] = ['email','genero']
  dataSource:any[];

  constructor(private surveyService:SurveyService) {
    this.musicGenreList = [];
    this.dataSource=[];
    this.preload=false;
    this.musicGenreList.push(this.DEFAULT_OPC);
    this.musicGenreList.push(...Global.MUSIC_GENRES);
    this.music_genre = new FormControl(this.DEFAULT_OPC, [Validators.required,Validators.minLength(2),Validators.maxLength(100)]);
    this.listCount=[];
   }

  ngOnInit(): void {
    this.preload=true;
    this.loadResults();
  }

  loadResults(){
    this.surveyService.findAll().subscribe(res=>{
      this.dataSource = res;
      this.preload=false;
    });
  }

  changeGenre(value:string){
    this.preload=true;
    this.surveyService.findByMusiGenre(value).subscribe(res=>{
      this.dataSource = res;
      this.preload=false;
    })
  }

  getErrorMessageMusicGenre() {
    return this.music_genre.hasError('required')
      ? 'Este campo es obligatorio'
      : '';
  }
}
