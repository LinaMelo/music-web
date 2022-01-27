import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Global } from 'src/app/models/global';
import { Survey } from 'src/app/models/survey';
import { SurveyService } from 'src/app/_services/survery/survey.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  public emailForm: FormControl;
  public music_genre: FormControl;
  public musicGenreList:String[];
  public showResults:boolean;
  public preload:boolean;

  constructor(private surveyService:SurveyService) { 
    this.preload = true;
    this.emailForm = new FormControl('', [Validators.required,Validators.email]);
    this.music_genre = new FormControl('', [Validators.required,Validators.minLength(2),Validators.maxLength(100)]);
    this.musicGenreList = Global.MUSIC_GENRES;
    this.showResults=false;
  }

  ngOnInit(): void {
    this.preload = false;
  }

  sendSurvey(){
    this.preload = true;
    if(this.emailForm.valid && this.music_genre.valid){
      //Se envia
      let survey:Survey = new Survey();
      survey.email = this.emailForm.value;
      survey.musicGenre=this.music_genre.value;

      this.surveyService.saveSurvey(survey).subscribe(res=>{
        console.log(res);
        Swal.fire({
          icon: "success",
          title: Global.MSG_SUCCESS_SURVEY
        });
        this.showResults=true;
        this.emailForm.reset();
        this.music_genre.reset();
        this.preload = false;
      })
    }else{
      this.preload = false;
      Swal.fire({
        icon: "warning",
        title: Global.MSG_INFO_SURVEY
      });
    }
  }


  getErrorMessageEmail() {
    return this.emailForm.hasError('required')
      ? 'Este campo es obligatorio'
      : this.emailForm.hasError('email')
      ? 'Ingrese un correo valido'
      : '';
  }

  getErrorMessageMusicGenre() {
    return this.music_genre.hasError('required')
      ? 'Este campo es obligatorio'
      : '';
  }
}
