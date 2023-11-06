import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-offercards',
  template: `
  <mat-card class="top-card">
  <mat-card-header>
    <!-- <div mat-card-avatar class="example-header-image"></div> -->
    <mat-card-title>{{value}}</mat-card-title>
    <mat-card-subtitle>{{header}}</mat-card-subtitle>
  </mat-card-header>
  
  <mat-card-content>
  <!-- <img mat-card-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="Photo of a Shiba Inu">   -->
  <p>{{sub_header}}</p>
  </mat-card-content>
</mat-card>
  `,
  styles: [
    `
    .top-card {
      max-width: 400px;
      background-color: white;
    }
    .mat-card-content{
      background:white;
    }
/*     
    .example-header-image {
      background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');
      background-size: cover;
    } */
    `
  ]
})
export class OffercardsComponent {

  @Input() header!: string;
  @Input() sub_header!: string;
  @Input() value!: string;

}
