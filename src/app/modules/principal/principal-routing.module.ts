import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyResultsComponent } from './components/survey-results/survey-results.component';
import { SurveyComponent } from './components/survey/survey.component';
import { PrincipalComponent } from './principal.component';


const routes: Routes = [{ path: '', component: PrincipalComponent ,
children: [
  { path: '', redirectTo: 'survey', pathMatch: 'full' },
  { path: 'survey', component: SurveyComponent },
  { path: 'results', component: SurveyResultsComponent },
]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
