import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { debounceTime, map, filter, switchMap, catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Data, TopCard, NewUser, RecentOrder } from '../INTERFACES/IDashboard';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }


  fetchData(): Observable<any> {
    return this.http.get<Data>("http://localhost:3000/getDashBoardDetails/v1/");
  }

  getProcessedData(): any {
    console.log("Making http request...");
    return this.fetchData().pipe(
      debounceTime(300),
      map((data: Data) => {
        const processedData: Data = (data);
        console.log("data",processedData);
        if (processedData.top_cards.length === 0 || processedData.new_users.length === 0 || processedData.recent_orders.length === 0)
          return of([]);
        console.log("processedData",processedData);
        return of(processedData);
      }
      ), catchError((error) => {
        console.error('Error:', error);
        return of([]); // Return an empty array in case of an error
      })
    )
    
  }
}
