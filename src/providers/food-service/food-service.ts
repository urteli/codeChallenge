import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

/*
  Generated class for the FoodServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FoodServiceProvider {
//private url: string = "https://api.data.gov/nrel/alt-fuel-stations/v1/nearest.json?api_key=7L9QXQpDwCcbz4tUhi4rC4yscZ8OJYztK6014rAA&location=Denver+CO";
private url: string = "http://api.nal.usda.gov/ndb/reports/?ndbno=01009&type=f&format=json&api_key=DEMO_KEY";


  constructor(public http: Http) {
    console.log('Hello FoodServiceProvider Provider');
  }

  getFood() {
    return this.http.get(this.url)
    .do(this.logResponse)
    .map(this.extractData)
    .catch(this.catchError)
  }

 private catchError (error: Response | any) {
   console.log (error);
   return Observable.throw(error.json().error || "Server error.");
 }

  private logResponse (res: Response) {
     console.log(res);
  }
  
  private extractData(res: Response) {
    return res.json();
  }

}
