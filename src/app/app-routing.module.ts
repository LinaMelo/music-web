import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ {
  path: '', redirectTo: 'principal', pathMatch: 'full'
},
{
  path: 'principal',
  loadChildren: () =>
    import('./modules/principal/principal.module').then(
      module => module.PrincipalModule
    )
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
