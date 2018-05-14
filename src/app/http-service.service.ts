import { Injectable } from '@angular/core';
//http client to make request
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
//observables
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class HttpServiceService {
public data;
public ele;
public baseUrl = 'https://www.anapioficeandfire.com/api';
  constructor(private _http:HttpClient) {
    console.log("httpservice here?");
   }
//method
getBooksData():any{
  let myResponse = this._http.get(this.baseUrl +'/books');
  // console.log(myResponse);
  return myResponse;
}
getHouseData():any{
  let myResponse = this._http.get(this.baseUrl +'/houses');
  return myResponse;
}
getCharacterData():any{
  let myResponse = this._http.get(this.baseUrl +'/characters');
  return myResponse;
}
//functions that return details 
getDataOfId(id):any{
  let newResponse = this._http.get(id);
  return newResponse;
}
getDataofHouse(id):any
{
  let newResponse =this._http.get(id);
  return newResponse;
}
getcharacterInfo(id):any{
  let newResponse = this._http.get(id);
  return newResponse;
}

}
