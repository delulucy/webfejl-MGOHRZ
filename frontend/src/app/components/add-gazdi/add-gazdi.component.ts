import { Component } from '@angular/core';
import { Gazdi } from 'src/app/models/gazdi.model';
import { GazdiService } from 'src/app/services/gazdi.service';

@Component({
  selector: 'app-add-gazdi',
  templateUrl: './add-gazdi.component.html',
  styleUrls: ['./add-gazdi.component.css'],
})
export class AddGazdiComponent {
  gazdi: Gazdi = {
    name: '',
    city: '',
  };
  submitted = false;

  constructor(private gazdiService: GazdiService) {}

  saveGazdi(): void {
    const data = {
      name: this.gazdi.name,
      city: this.gazdi.city
    };

    this.gazdiService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newGazdi(): void {
    this.submitted = false;
    this.gazdi = {
      name: '',
      city: '',
    };
  }
}
