import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  template: `
  <section>
      <form class="searchbar">
        <input type="text" class="searchbar-full-width" placeholder="Search here..." #search>
        <button type="button" (click)="submitSearchInput()"><i class="fa fa-search" aria-hidden="true"></i></button>
      </form>
  </section>

  `,
  styles: [`
  input[type="text"] {
    list-style:none;
  border: solid 1px var(--color-primary);
  padding: 10px;
  border-radius: 8px 0px 0px 8px;
  margin-right: 4px;
  display: inline-block;
  width: 70%;
  background: var(--color-primary);
}

button {
  list-style:none;
  padding: 10px;
  border: solid 1px var(--color-primary);
  border-radius: 0px 8px 8px 0px;
  margin: -10px;
  min-width: 50px;
  background: var(--color-primary);
  i{
    color:black;
  }
}


@media (min-width: 500px) and (max-width: 768px) {
  .results {
      grid-template-columns: repeat(2, 1fr);
  }
  input[type="text"] {
      width: 70%;
  }   
}

@media (max-width: 499px) {
  .results {
      grid-template-columns: 1fr;
  }    
}

`
  ]
})
export class SearchbarComponent {

  // search! : string ;

  @Input() searchString!: string;

  submitSearchInput() {
    console.log(`Sending search query to server... ${this.searchString}`)
  }

  onKey(event: any) {
    console.log(this.searchString);
  }

}
