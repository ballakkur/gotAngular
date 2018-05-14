import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpServiceService } from '../../http-service.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css'],
  providers:[Location]
})
export class HousesComponent implements OnInit {
  private id = this._route.snapshot.paramMap.get('url');
  public houseDetails;

  constructor(private router:Router,private _route:ActivatedRoute,private location:Location,private httpservice:HttpServiceService) { }

  ngOnInit() {
    this.httpservice.getDataofHouse(this.id).subscribe(
      data=>
      {
          this.houseDetails = data;
          
      },
      error=>
      {
        console.log(error.errorMessage);
      }
    );

  }
  getBack():any
  {
    this.location.back();
  }

}
