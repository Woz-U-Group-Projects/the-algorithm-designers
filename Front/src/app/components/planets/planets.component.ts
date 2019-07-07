import { Component, OnInit, Input } from '@angular/core';
//you need to import files to be able to use them
import { HttpClient } from '@angular/common/http';
import { Planet } from '../../model/planet';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})

export class PlanetsComponent implements OnInit {

  planets: Planet[];
  @Input() dataPath: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Planet[]>(this.dataPath).subscribe(planets => {
      this.planets = planets;
      });
  }

}
