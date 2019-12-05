import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SearchJsonService implements OnInit {

  constructor(private httpClient:HttpClient) { }
  ngOnInit(){
    
  }
  getJson(){
    return this.httpClient.get('assets/pathJSON.json');
  }
}
