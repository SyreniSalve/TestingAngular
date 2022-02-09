import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeoplePageComponent } from './components/people-page/people-page.component';
import { LecturerPageComponent } from './components/lecturer-page/lecturer-page.component';
import { TitlePageComponent } from './components/title-page/title-page.component';
import { DatatablePageComponent } from './components/datatable-page/datatable-page.component';
import { PersonFormComponent } from './components/person-form/person-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    PeoplePageComponent,
    LecturerPageComponent,
    TitlePageComponent,
    DatatablePageComponent,
    PersonFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
