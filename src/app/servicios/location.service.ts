import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private httpClient: HttpClient) {
   }

   createLocation(dataLocation: any) {
   // return this.httpClient.post( '/create', dataLocation)
   return this.httpClient.post( 'http://localhost:3000/', dataLocation)
  }

}
