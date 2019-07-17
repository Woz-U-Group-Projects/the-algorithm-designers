import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { Hotel } from '../../../../models/hotel';

@Component({
  selector: 'app-lacali',
  templateUrl: './lacali.component.html',
  styleUrls: ['./lacali.component.css']
})
export class LacaliComponent implements OnInit {
  private hotelRoute = 'http://localhost:4200/lacali';
  public hotel: Hotel[];

  constructor(private http: HttpClient) { }

  getHotel(){
    this.http.get<Hotel[]>(this.hotelRoute).subscribe(hotel => {
      this.hotel = hotel;
      console.log("Hotel", this.hotel);
    });
  }

  ngOnInit() {
    this.getHotel();
  }

}
