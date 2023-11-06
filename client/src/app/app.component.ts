import { AfterViewInit, Component, OnInit, Directive, ViewChild } from '@angular/core';
import { DashboardService } from './SERVICES/dashboard.service';
import { catchError, debounceTime, map, pluck, take } from 'rxjs/operators';
import { Data, NewUser, RecentOrder, TopCard } from './INTERFACES/IDashboard';
import { Observable, Subject, of } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  .wrap{
    display: flex;
    margin: 0 auto;
    justify-content: center;
    gap: 5rem;
    padding-top: 5rem;

  }
  .recent-orders-container{
    max-width: 50%!important;
    padding-left: 10rem;
    padding-top:2rem;
  }
  .table-container{
    display: flex;
    justify-content:center;
    align-content: center;
    padding-top: 2rem;
    padding-right: 5rem;
    padding-left: 5rem;
    gap:5rem;
  }
 
 .small-table {
    width: 20%!important;
    font-size: 12px;
    }
.donut-chart{
  width:24%;
  padding-bottom: 0rem;

}  
  `]
})
export class AppComponent implements OnInit, AfterViewInit {



  // topCardsData: any;
  topCardsData$ = new Observable<TopCard[]>();
  // recent_orders: any;
  // filter_recent_orders: any;
  recent_orders$ = new Observable<RecentOrder[]>();
  // new_users!: NewUser[];
  // filter_new_user!: NewUser[];
  new_users$ = new Observable<NewUser[]>();
  data$ = new Observable<Data>();
  constructor(public service: DashboardService) {
  }

  ngOnInit(): void {
    this.data$ = this.service.fetchData().pipe((
      debounceTime(300)
    ));
  }

  ngAfterViewInit() {

    this.topCardsData$ = this.data$.pipe(map(data => {
      return data.top_cards;
    }), catchError((err) => {
      console.log(err.message);
      return of([]);
    }))

    this.recent_orders$ = this.data$.pipe(map(data => {
      return data.recent_orders;
    })
    , catchError((err) => {
      console.log(err.message);
      return of([]);
    }))

    this.new_users$ = this.data$.pipe(map(data => {
      return data.new_users;
    }),
    take(8)
    , catchError((err) => {
      console.log(err.message);
      return of([]);
    }))

  }

}