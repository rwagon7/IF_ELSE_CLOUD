import { Component, Input } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-new-user',
  template: `
  <!-- <tr>
    <th>New User Registration</th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
  </tr>
  <tbody>
  <tr *ngFor="let element of this.data">
    <td>{{element.picture}}</td>
    <td>{{element.name}}</td>
    <td>{{element.isActive}}</td>
    <td>{{element.country}}</td>
    <td>{{element.progress}}</td>
  </tr>
</tbody>
</table> -->

<table mat-table [dataSource]="this.data" class="small-table" class="mat-elevation-z8">

<ng-container matColumnDef="User">
  <th mat-header-cell *matHeaderCellDef> User </th>
  <td mat-cell *matCellDef="let element"><img src={{element.picture}} alt="image"/></td>
</ng-container>


<ng-container matColumnDef="Name">
  <th mat-header-cell *matHeaderCellDef> Name </th>
  <td mat-cell *matCellDef="let element"> {{element.name}} </td>
</ng-container>


<ng-container matColumnDef="Is Active.">
  <th mat-header-cell *matHeaderCellDef> Is Active. </th>
  <td mat-cell *matCellDef="let element"> {{element.isActive}} </td>
</ng-container>


<ng-container matColumnDef="Country">
  <th mat-header-cell *matHeaderCellDef> Country </th>
  <td mat-cell *matCellDef="let element"> {{element.country}} </td>
</ng-container>


<ng-container matColumnDef="Progress">
  <th mat-header-cell *matHeaderCellDef> Progress </th>
  <td mat-cell *matCellDef="let element"> <mat-progress-bar mode="determinate" value={{element.progress}}></mat-progress-bar> </td>
</ng-container>

<tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
<tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>

</table>


  `,
  styles: [`
tr{
      font-family: arial, sans-serif;
      border-collapse: collapse;
      width: 100%;
      background: white;
      
    }

    td th{
      width: 50px!important;
      border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;
      
    }
    .small-table .mat-header-cell {
  padding: 8px; /* Adjust the padding as needed */
  /* Add other styles as necessary */
}
.small-table .mat-cell {
  padding: 8px; /* Adjust the padding as needed */
  /* Add other styles as necessary */
}
img{
  border-radius:50%;
}
  `]
})
export class NewUserComponent {
  @Input() data!: any[];
  displayedColumns: string[] = ['User', 'Name', 'Is Active.', 'Country', 'Progress'];
  filter!: any[];
  constructor(){
    this.filter = this.data;
  }
}
