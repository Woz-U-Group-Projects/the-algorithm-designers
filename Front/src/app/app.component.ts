import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front'; //change the title to view on page
  //contains the path where the page will be served
  staticPath: string = 'http://localhost:3001/staticPlanets';
  livePath: string = 'http://localhost:3001/planets';
}

