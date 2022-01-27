import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { PrincipalComponent } from './principal.component';
import { SurveyComponent } from './components/survey/survey.component';
import { SurveyResultsComponent } from './components/survey-results/survey-results.component';
import { AngularMaterialModule } from '../_shared/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PrincipalComponent,
    SurveyComponent,
    SurveyResultsComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class PrincipalModule { }
