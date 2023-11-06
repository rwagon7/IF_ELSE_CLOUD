import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RecentOrder } from 'src/app/INTERFACES/IDashboard';


@Component({
  selector: 'app-recentorder',
  template: `

<table mat-table [dataSource]="this.data" class="small-table" class="mat-elevation-z8">


<ng-container matColumnDef="Name">
  <th mat-header-cell *matHeaderCellDef> Name </th>
  <td mat-cell *matCellDef="let element"> {{element.name}} </td>
</ng-container>


<ng-container matColumnDef="Product">
  <th mat-header-cell *matHeaderCellDef> Product </th>
  <td mat-cell *matCellDef="let element"> {{element.product}} </td>
</ng-container>


<ng-container matColumnDef="Delivery Date.">
  <th mat-header-cell *matHeaderCellDef> Delivery Date. </th>
  <td mat-cell *matCellDef="let element"> {{element.delivery_date}} </td>
</ng-container>


<ng-container matColumnDef="Status">
  <th mat-header-cell *matHeaderCellDef> Status </th>
  <td mat-cell *matCellDef="let element"> {{element.status}} </td>
</ng-container>


<ng-container matColumnDef="Tracking No.">
  <th mat-header-cell *matHeaderCellDef> Tracking No. </th>
  <td mat-cell *matCellDef="let element"> {{element.product}} </td>
</ng-container>


<ng-container matColumnDef="Shipping">
  <th mat-header-cell *matHeaderCellDef> Shipping </th>
  <td mat-cell *matCellDef="let element"> {{element.shipping}} </td>
</ng-container>


<ng-container matColumnDef="Close">
  <th mat-header-cell *matHeaderCellDef> Close </th>
  <td mat-cell *matCellDef="let element"> <i class="fa fa-times"></i> </td>
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

  `]
})
export class RecentorderComponent {
  // @Input() id!: number;
  // @Input() name!: string;
  // @Input() product!: string;
  // @Input() delivery_date!: string;
  // @Input() status!: string;
  // @Input() tracking_no!: string;
  // @Input() shipping!: string;

  @Input() data!: any[];
  displayedColumns: string[] = ['Name', 'Product', 'Delivery Date.', 'Status', 'Tracking No.', 'Shipping', 'Close'];
  filter! : any[];
constructor(){
  
}

}