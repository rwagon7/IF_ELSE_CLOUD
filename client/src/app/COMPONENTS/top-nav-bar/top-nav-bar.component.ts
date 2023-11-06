import { Component, OnInit } from '@angular/core';
import { } from '../../SHARED_RESOURCES/searchbar/searchbar.component'

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss']
})
export class TopNavBarComponent implements OnInit{

  inputString! : string;

  ngOnInit(): void {
      this.inputString = '';
  }

}
