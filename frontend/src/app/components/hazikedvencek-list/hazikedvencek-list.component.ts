import { Component } from '@angular/core';
import {Hazikedvenc} from "../../models/hazikedvenc.model";
import {HazikedvencService} from "../../services/hazikedvenc.service";

@Component({
  selector: 'app-hazikedvencek-list',
  templateUrl: './hazikedvencek-list.component.html',
  styleUrls: ['./hazikedvencek-list.component.css']
})
export class HazikedvencekListComponent {
  kedvencek?: Hazikedvenc[];
  currentKedvenc: Hazikedvenc = {};
  currentIndex = -1;

  constructor(private hazikedvencService: HazikedvencService) {}

  ngOnInit(): void {
    this.retrieveKedvencek();
  }

  retrieveKedvencek(): void {
    this.hazikedvencService.getAll().subscribe({
      next: (data) => {
        this.kedvencek = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveKedvencek();
    this.currentKedvenc = {};
    this.currentIndex = -1;
  }

  setActiveKedvenc(hazikedvenc: Hazikedvenc, index: number): void {
    this.currentKedvenc = hazikedvenc;
    this.currentIndex = index;
  }

  removeAllKedvenc(): void {
    this.hazikedvencService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }
}
