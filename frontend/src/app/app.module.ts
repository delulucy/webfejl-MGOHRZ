import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddGazdiComponent } from './components/add-gazdi/add-gazdi.component';
import { GazdiDetailsComponent } from './components/gazdi-details/gazdi-details.component';
import { GazdikListComponent } from './components/gazdik-list/gazdik-list.component';
import { HazikedvencekListComponent } from './components/hazikedvencek-list/hazikedvencek-list.component';
import { HazikedvencDetailComponent } from './components/hazikedvenc-detail/hazikedvenc-detail.component';
import { AddHazikedvencComponent } from './components/add-hazikedvenc/add-hazikedvenc.component';

@NgModule({
  declarations: [
    AppComponent,
    AddGazdiComponent,
    GazdiDetailsComponent,
    GazdikListComponent,
    HazikedvencekListComponent,
    HazikedvencDetailComponent,
    AddHazikedvencComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
