import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LeftNavBarComponent } from '../app/COMPONENTS/left-nav-bar/left-nav-bar.component';
import { TopNavBarComponent } from './COMPONENTS/top-nav-bar/top-nav-bar.component';
import { SearchbarComponent } from './SHARED_RESOURCES/searchbar/searchbar.component';
import { OffercardsComponent } from './SHARED_RESOURCES/offercards/offercards.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { RecentorderComponent } from './SHARED_RESOURCES/recentorder/recentorder.component';
import { NewUserComponent } from './SHARED_RESOURCES/new-user/new-user.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { SalesStatisticsComponent } from './SHARED_RESOURCES/sales-statistics/sales-statistics.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { BalanceOverviewComponent } from './SHARED_RESOURCES/balance-overview/balance-overview.component';
import { TopProductsComponent } from './SHARED_RESOURCES/top-products/top-products.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftNavBarComponent,
    TopNavBarComponent,
    SearchbarComponent,
    OffercardsComponent,
    RecentorderComponent,
    NewUserComponent,
    SalesStatisticsComponent,
    BalanceOverviewComponent,
    TopProductsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatProgressBarModule,
    NgApexchartsModule,
    
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
