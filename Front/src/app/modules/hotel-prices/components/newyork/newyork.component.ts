import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { Hotel } from '../../../../models/hotel';

@Component({
  selector: 'app-newyork',
  templateUrl: './newyork.component.html',
  styleUrls: ['./newyork.component.css']
})

export class NewyorkComponent implements OnInit {
  private hotelRoute = 'http://localhost:4200/newyork';
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
