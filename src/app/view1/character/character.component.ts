import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpServiceService } from '../../http-service.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
  providers:[Location]
})
export class CharacterComponent implements OnInit {
  private id = this._route.snapshot.paramMap.get('url');
  public characterData;
  constructor(private router:Router,private _route:ActivatedRoute,private location:Location,private httpservices:HttpServiceService) { }

  ngOnInit() {
  this.httpservices.getcharacterInfo(this.id).subscribe(
    data=>
    {
      this.characterData = data;
    },
    error=>
    {
      console.log(error.errorMessage);
    }

  );
  }
  getBack():any{
    this.location.back();
  }

}
