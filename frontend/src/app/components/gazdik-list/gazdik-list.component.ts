import { Component, OnInit } from '@angular/core';
import { Gazdi } from 'src/app/models/gazdi.model';
import { GazdiService } from 'src/app/services/gazdi.service';

@Component({
  selector: 'app-gazdik-list',
  templateUrl: './gazdik-list.component.html',
  styleUrls: ['./gazdik-list.component.css'],
})
export class GazdikListComponent {
  gazdik?: Gazdi[];
  currentGazdi: Gazdi = {};
  currentIndex = -1;

  constructor(private gazdiService: GazdiService) {}

  ngOnInit(): void {
    this.retrieveGazdik();
  }

  retrieveGazdik(): void {
    this.gazdiService.getAll().subscribe({
      next: (data) => {
        this.gazdik = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveGazdik();
    this.currentGazdi = {};
    this.currentIndex = -1;
  }

  setActiveGazdi(gazdi: Gazdi, index: number): void {
    this.currentGazdi = gazdi;
    this.currentIndex = index;
  }

  removeAllGazdik(): void {
    this.gazdiService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }
}
