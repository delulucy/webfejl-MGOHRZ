import { Component } from '@angular/core';
import {Hazikedvenc} from "../../models/hazikedvenc.model";
import {HazikedvencService} from "../../services/hazikedvenc.service";

@Component({
  selector: 'app-add-hazikedvenc',
  templateUrl: './add-hazikedvenc.component.html',
  styleUrls: ['./add-hazikedvenc.component.css']
})
export class AddHazikedvencComponent {
  hazikedvenc: Hazikedvenc = {
    name: '',
    faj: '',
    kor: 0,
  };
  submitted = false;

  constructor(private hazikedvencService: HazikedvencService) {}

  saveKedvenc(): void {
    const gazdaIDInput = document.getElementById('gazdaID') as HTMLInputElement;
    const gazdaID = gazdaIDInput.value;

    const data = {
      name: this.hazikedvenc.name,
      faj: this.hazikedvenc.faj,
      kor: this.hazikedvenc.kor
    };

    this.hazikedvencService.create(gazdaID, data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newKedvenc(): void {
    this.submitted = false;
    this.hazikedvenc = {
      name: '',
      faj: '',
      kor: 0,
    };
  }
}
