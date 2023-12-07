import { Component, Input, OnInit } from '@angular/core';
import { GazdiService } from 'src/app/services/gazdi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Gazdi } from 'src/app/models/gazdi.model';

@Component({
  selector: 'app-gazdi-details',
  templateUrl: './gazdi-details.component.html',
  styleUrls: ['./gazdi-details.component.css'],
})
export class GazdiDetailsComponent {
  @Input() viewMode = false;

  @Input() currentGazdi: Gazdi = {
    name: '',
    city: '',
  };

  message = '';

  constructor(
    private gazdiService: GazdiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getGazdi(this.route.snapshot.params['id']);
    }
  }

  getGazdi(id: string): void {
    this.gazdiService.get(id).subscribe({
      next: (data) => {
        this.currentGazdi = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  updateGazdi(): void {
    this.message = '';

    this.gazdiService
      .update(this.currentGazdi.id, this.currentGazdi)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'A gazdi sikeresen frissítve lett.';
        },
        error: (e) => console.error(e)
      });
  }

  deleteGazdi(): void {
    this.gazdiService.delete(this.currentGazdi.id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/gazdik']);
      },
      error: (e) => console.error(e)
    });
  }
}
