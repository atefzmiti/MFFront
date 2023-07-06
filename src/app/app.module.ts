import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RechercheComponent } from './recherche/recherche.component';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatRadioModule} from '@angular/material/radio';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { FinancialMeasureComponent } from './financial-measure/financial-measure.component';
import { CreateFinancialMeasureComponent } from './create-financial-measure/create-financial-measure.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatMenuModule } from '@angular/material/menu';
import {NgxMatIntlTelInputComponent} from 'ngx-mat-intl-tel-input';
import {  ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ExampleComponent } from './example/example.component';


@NgModule({
  declarations: [
    AppComponent,
    RechercheComponent,
    FinancialMeasureComponent,
    CreateFinancialMeasureComponent,
    ExampleComponent ],
  imports: [
    HttpClientModule ,
    MatMenuModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,MatRadioModule,MatDialogModule,MatInputModule,
    MatFormFieldModule,MatSelectModule,
    MatTooltipModule,MatIconModule,MatButtonModule,
     BrowserAnimationsModule,NgxMatIntlTelInputComponent,ReactiveFormsModule,MatPaginatorModule,MatTableModule
    
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
