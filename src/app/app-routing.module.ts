import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RechercheComponent } from './recherche/recherche.component';
import { FinancialMeasureComponent } from './financial-measure/financial-measure.component';
import { CreateFinancialMeasureComponent } from './create-financial-measure/create-financial-measure.component';
import { ExampleComponent } from './example/example.component';

const routes: Routes = [
  { path: '', component: RechercheComponent },
  {path:'mesures/:id', component:FinancialMeasureComponent},
  {path:'createfm', component:CreateFinancialMeasureComponent},
  {path:'example', component:ExampleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
