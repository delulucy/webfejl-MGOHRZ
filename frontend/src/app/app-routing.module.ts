import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GazdikListComponent } from './components/gazdik-list/gazdik-list.component';
import { GazdiDetailsComponent } from './components/gazdi-details/gazdi-details.component';
import { AddGazdiComponent } from './components/add-gazdi/add-gazdi.component';
import { HazikedvencekListComponent } from './components/hazikedvencek-list/hazikedvencek-list.component';
import { HazikedvencDetailComponent } from './components/hazikedvenc-detail/hazikedvenc-detail.component';
import { AddHazikedvencComponent } from './components/add-hazikedvenc/add-hazikedvenc.component';

const routes: Routes = [
  { path: '', redirectTo: 'gazdik', pathMatch: 'full' },
  { path: 'gazdik', component: GazdikListComponent },
  { path: 'gazdik/:id', component: GazdiDetailsComponent },
  { path: 'addGazdi', component: AddGazdiComponent },
  { path: 'hazikedvencek', component: HazikedvencekListComponent },
  { path: 'hazikedvencek/:id', component: HazikedvencDetailComponent },
  { path: 'addHazikedvenc', component: AddHazikedvencComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
