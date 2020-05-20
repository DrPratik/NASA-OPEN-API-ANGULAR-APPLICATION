import { Injectable } from '@angular/core';
import { apiURL,key } from '../config/api.config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private HttpClient: HttpClient) { }
  get(url:string,baseUrl = apiURL){
    return this.HttpClient.get<any>(`${baseUrl}/${url}`);
  }
  public getApod() { 
    return this.get(`planetary/apod?api_key=${key}`);
  }

  public getNEOSW(start,end){
    return this.get(
      `neo/rest/v1/feed?start_date=${start}&end_date=${end}&api_key=${key}`
    )
  }
  public getCuriosityPics() {
    return this.get(`mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${key}`);
  }
}
