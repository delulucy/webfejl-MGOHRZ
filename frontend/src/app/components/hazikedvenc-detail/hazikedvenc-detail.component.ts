import {Component, Input} from '@angular/core';
import {Hazikedvenc} from "../../models/hazikedvenc.model";
import {HazikedvencService} from "../../services/hazikedvenc.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-hazikedvenc-detail',
  templateUrl: './hazikedvenc-detail.component.html',
  styleUrls: ['./hazikedvenc-detail.component.css']
})
export class HazikedvencDetailComponent {
  @Input() viewMode = false;

  @Input() currentKedvenc: Hazikedvenc = {
    name: '',
    faj: '',
    kor: 0,
  };

  message = '';

  constructor(
    private hazikedvencService: HazikedvencService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getKedvenc(this.route.snapshot.params['id']);
    }
  }

  getKedvenc(id: string): void {
    this.hazikedvencService.get(id).subscribe({
      next: (data) => {
        this.currentKedvenc = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  updateKedvenc(): void {
    this.message = '';

    this.hazikedvencService
      .update(this.currentKedvenc.id, this.currentKedvenc)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'A házikedvenc sikeresen frissítve lett.';
        },
        error: (e) => console.error(e)
      });
  }

  deleteKedvenc(): void {
    this.hazikedvencService.delete(this.currentKedvenc.id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/hazikedvencek']);
      },
      error: (e) => console.error(e)
    });
  }
}
